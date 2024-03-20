import { useQuery } from "@tanstack/react-query"
import { fetchLocationData } from "./LocationApi"

export function useGetLocationCoordinates(city: string) {
  return useQuery({ queryKey: ['location', city], queryFn: () => fetchLocationData(city), enabled: city !== ''})
}
