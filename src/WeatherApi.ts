import axios, { AxiosResponse } from "axios";

export async function fetchWeatherData(lat: string, lon: string): Promise<AxiosResponse> {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aefe1edd9047ae5b97a70aae5cdd37d4&units=metric`
    );
    return response;
  } catch (error) {
    // Handle error
    throw error;
  }
}
