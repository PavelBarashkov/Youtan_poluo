import axios from "axios";

export async function fetchCards() {
    const response = await axios.get('http://localhost:5000/api/card/mini');
    return response
}