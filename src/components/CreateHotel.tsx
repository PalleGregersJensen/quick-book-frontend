import React from "react";
import { useState } from "react";

export default function createHotel() {
    const [isCreateHotelFormVisible, setIsCreateHotelFormVisible] = useState(false); 

    const handleCreateHotel = () => {
        setIsCreateHotelFormVisible(true);
    };
    
    return (
        <>
            <form>
                <h1>Create Hotel</h1>
                <label htmlFor="hotelName">Hotel Name</label>
                <input type="text" id="hotelName" />
                <label htmlFor="hotelStreet">Hotel Street</label>
                <input type="text" id="hotelStreet" />
                <label htmlFor="hotelCity">Hotel City</label>
                <input type="text" id="hotelCity" />
                <label htmlFor="hotelCountry">Hotel Country</label>
                <input type="text" id="hotelCountry" />
                <label htmlFor="hotelZipCode">Hotel Zip Code</label>
                <input type="text" id="hotelZipCode" />
                <button type="submit">Create new hotel</button>
            </form>
        </>
    );
}
