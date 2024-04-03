import { createFileRoute } from '@tanstack/react-router'
import WeatherPage from '../pages/WeatherPage'

export const Route = createFileRoute('/weather/$city')({
  component: () => <WeatherPage />
})
