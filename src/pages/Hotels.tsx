import { useEffect, useState } from "react";
import { getAllHotels, deleteHotel, updateHotel } from "../apiFacade";
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
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        street: "",
        city: "",
        country: "",
        zipCode: "",
        numberOfRooms: 0,
    });

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

    const handleUpdate = (hotel: Hotel) => {
        setSelectedHotel(hotel);
        setFormData({
            name: hotel.name,
            street: hotel.street,
            city: hotel.city,
            country: hotel.country,
            zipCode: hotel.zipCode,
            numberOfRooms: hotel.numberOfRooms,
            price: hotel.price,
        });
        setIsFormVisible(true);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedHotel) {
            const updatedHotel = { ...selectedHotel, ...formData };
            try {
                await updateHotel(selectedHotel.id, updatedHotel);
                setHotels(hotels.map((hotel) => (hotel.id === selectedHotel.id ? updatedHotel : hotel)));
                setIsFormVisible(false);
                setSelectedHotel(null);
            } catch (error) {
                console.error("Error updating hotel:", error);
            }
        }
    };

    return (
        <>
            <h1>Hotels</h1>
            <p>Hotels page</p>
            {isFormVisible && selectedHotel && (
                <form onSubmit={handleFormSubmit} className="update-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Hotelnavn"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                    />
                    <input
                        type="text"
                        name="street"
                        placeholder="Gade"
                        value={formData.street}
                        onChange={handleFormChange}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="By"
                        value={formData.city}
                        onChange={handleFormChange}
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Land"
                        value={formData.country}
                        onChange={handleFormChange}
                        required
                    />
                    <input
                        type="text"
                        name="zipCode"
                        placeholder="Postnummer"
                        value={formData.zipCode}
                        onChange={handleFormChange}
                        required
                    />
                    <button type="submit">Update hotel</button>
                </form>
            )}
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
                        <button className="update-hotel-button" onClick={() => handleUpdate(hotel)}>
                            Update hotel
                        </button>
                    </div>
                ))}
            </section>
        </>
    );
}
