import axios, { AxiosResponse } from 'axios';

export async function fetchLocationData(city: string): Promise<AxiosResponse> {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=aefe1edd9047ae5b97a70aae5cdd37d4`);
        return response;
    } catch (error) {
        // Handle error
        throw error;
    }
}
