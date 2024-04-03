import { Route } from "../routes/weather.$city"
import { useGetLocationCoordinates } from "../useGetLocationCoordinates"
import { useGetWeather } from "../useGetWeather"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import Loader from "../components/Loader/Loader";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from '@tanstack/react-router'

export default function WeatherPage() {
    const { city } = Route.useParams()
    const { data: locationData, isLoading: isLocationLoading } = useGetLocationCoordinates(city)
    const lon = locationData?.data[0].lon
    const lat = locationData?.data[0].lat

    const { data: weatherData, isLoading: isWeatherLoading } = useGetWeather(lat, lon)

    if (isLocationLoading || isWeatherLoading) {
        return <Loader />
    }

    return (
        <>
            <div className='mt-48'>
                <div className='text-left'>
                    <Link to="/">
                        <button><ArrowCircleLeftIcon /></button>
                    </Link>
                </div>
                <div className='flex items-baseline gap-x-8 justify-center'>
                    {getWeatherIcon(weatherData?.data.weather[0].description)}
                    <h1 className='font-thin tracking-wide self-center text-9xl'>{Math.round(weatherData?.data.main.temp) + '°'}</h1>
                </div>
                <div className='flex mt-10 gap-x-10'>
                    <div>
                        <div className='flex justify-center'>
                            <DeviceThermostatIcon style={{ fontSize: 50 }} />
                        </div>
                        <p className='font-thin pt-2'>{'min: ' + Math.round(weatherData?.data.main.temp_min) + '°'}</p>
                        <p className='font-thin'>{'max: ' + Math.round(weatherData?.data.main.temp_max) + '°'}</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <AirIcon style={{ fontSize: 50 }} />
                        </div>
                        <p className='font-thin pt-2'>{'humidity: ' + weatherData?.data.main.humidity}</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <CompareArrowsIcon style={{ fontSize: 50 }} />
                        </div>
                        <p className='font-thin pt-2'>{'pressure: ' + weatherData?.data.main.pressure}</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <TouchAppIcon style={{ fontSize: 50 }} />
                        </div>
                        <p className='font-thin pt-2'>{'feels like: ' + Math.round(weatherData?.data.main.feels_like) + '°'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function getWeatherIcon(weatherDescription: string) {
    switch (weatherDescription) {
        case 'clear sky':
            return <WbSunnyIcon style={{ color: '#fee181', fontSize: 140 }} />
        case 'few clouds':
            return <CloudIcon style={{ color: '#a2cffe', fontSize: 140 }} />
        case 'overcast clouds':
            return <CloudIcon style={{ color: '#a2cffe', fontSize: 140 }} />
        case 'broken clouds':
            return <CloudIcon style={{ color: '#a2cffe', fontSize: 140 }} />
        case 'scattered clouds':
            return <CloudIcon style={{ color: '#a2cffe', fontSize: 140 }} />
        case 'light rain':
            return <WaterDropIcon style={{ color: '#a2cffe', fontSize: 140 }} />
        case 'shower rain':
            return <WaterDropIcon style={{ color: '#a2cffe', fontSize: 140 }} />
        default:
            break;
    }
}
