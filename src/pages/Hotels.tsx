import { useEffect, useState } from "react";
import { getAllHotels, deleteHotel } from "../apiFacade";
import "../css-files/hotels.css";

interface Hotel {
    id: number;
    name: string;
    street: string;
    city: string;
    country: string;
    zipCode: string;
    numberOfRooms: number;
    price: number;
}

export default function Hotels() {
    const [hotels, setHotels] = useState<Hotel[]>([]);

    useEffect(() => {
        async function fetchHotels() {
            try {
                const hotelsData = await getAllHotels();
                setHotels(hotelsData);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            }
        }

        fetchHotels();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteHotel(id);
            setHotels(hotels.filter((hotel) => hotel.id !== id));
        } catch (error) {
            console.error("Error deleting hotel:", error);
        }
    };

    return (
        <>
            <h1>Hotels</h1>
            <p>Hotels page</p>
            <section className="hotels-container">
                {hotels.map((hotel) => (
                    <div key={hotel.id}>
                        <p>Hotelnummer: {hotel.id}</p>
                        <p>Hotelnavn: {hotel.name}</p>
                        <p>Gade: {hotel.street}</p>
                        <p>By: {hotel.city}</p>
                        <p>Postnummer: {hotel.zipCode}</p>
                        <p>Antal værelser: {hotel.numberOfRooms}</p>
                        <button className="delete-hotel-button" onClick={() => handleDelete(hotel.id)}>
                            Delete hotel
                        </button>
                        <button className="update-hotel-button">Update hotel</button>
                    </div>
                ))}
            </section>
        </>
    );
}
