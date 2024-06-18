import { useEffect, useState } from "react";
import { getAllHotels } from "../apiFacade";

interface Hotel { 
    id: number;
    name: string;
    address: string;
    city: string;
    country: string;
    numberOfRooms: number;
    price: number;
}


export default function Hotels() {
    const [hotels, setHotels] = useState([]);

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

    return (
        <>
            <h1>Hotels</h1>
            <p>Hotels page</p>
            <ul>
                {hotels.map((hotel: Hotel) => (
                    <li key={hotel.id}>{hotel.name}</li>
                ))}
            </ul>
        </>
    );
}
