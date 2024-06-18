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

export { getAllHotels, deleteHotel };
