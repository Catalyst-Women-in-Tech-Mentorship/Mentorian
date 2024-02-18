import axios from "axios";

const API_BASE_URI = "http://localhost:3001"

export const registerUser = async (userData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(`${API_BASE_URI}/users/register`, userData, config);

        return res.data;

    } catch (error) {
        throw error.response.data; 
    }
};




export const loginUser = async (userData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(`${API_BASE_URI}/users/login`, userData, config);

        return res.data.token; 

    } catch (error) {
        throw error.response.data; 
    }
};

