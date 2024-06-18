const endpoint = "http://localhost:8080"; 

async function getAllHotels() {
    const data = await fetch(`${endpoint}/hotels`);
    const response = await data.json();
    console.log(response);
    return response;
}

export { getAllHotels };