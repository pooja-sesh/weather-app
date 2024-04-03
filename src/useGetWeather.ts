import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "./WeatherApi";

export function useGetWeather(lat: string, lon: string) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeatherData(lat, lon),
    enabled: lat !== undefined && lon !== undefined,
  });
}
