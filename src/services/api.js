
import axios from 'axios';

// const API_URL = 'http://localhost:8000'
const API_URL = 'https://file-sharing-backend-h4xk.onrender.com'

export const uploadFile = async (data) => {
    try  {
        let response = await axios.post(`${API_URL}/upload`,data);
        return response.data;
    } catch (error) {
        console.error('Error while calling the api',error.message)
    }
}




