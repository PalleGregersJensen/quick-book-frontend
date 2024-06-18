const endpoint = "http://localhost:8080";

async function getAllHotels() {
    const response = await fetch(`${endpoint}/hotels`);
    if (!response.ok) {
        throw new Error("Failed to fetch hotels");
    }
    const data = await response.json();
    return data;
}

async function deleteHotel(id: number) {
    const response = await fetch(`${endpoint}/hotels/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete hotel");
    }
    return response;
}

async function updateHotel(id: number, hotel: any) { 
    const response = await fetch(`${endpoint}/hotels/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(hotel),
    });
    if (!response.ok) {
        throw new Error("Failed to update hotel");
    }
    return response;
}

export { getAllHotels, deleteHotel, updateHotel };
