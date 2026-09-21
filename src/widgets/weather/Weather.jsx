import { useEffect, useState } from 'react'
import "./Weather.scss";
const cities = [
    {
        name: 'Одеса',
        latitude: 46.48,
        longitude: 30.72
    },
    {
        name: 'Київ',
        latitude: 50.45,
        longitude: 30.52
    },
    {
        name: 'Львів',
        latitude: 49.84,
        longitude: 24.03
    },
    {
        name: 'Харків',
        latitude: 49.99,
        longitude: 36.23
    },
    {
        name: 'Дніпро',
        latitude: 48.46,
        longitude: 35.05
    }
]

const getWeather = async (latitude, longitude) => {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    )

    if (!response.ok) {
        throw new Error('Не удалось получить погоду')
    }

    const info = await response.json()

    return info.current.temperature_2m
}

const Weather = () => {
    const [city, setCity] = useState(cities[0])
    const [temperature, setTemperature] = useState(null)

    const handleCityChange = (event) => {
        const selectedCity = cities.find(
            (city) => city.name === event.target.value
        )

        setCity(selectedCity)
    }

    useEffect(() => {
        const loadWeather = async () => {
            try {
                const temperature = await getWeather(
                    city.latitude,
                    city.longitude
                )

                setTemperature(temperature)
            } catch (error) {
                console.error(error)
            }
        }

        loadWeather()
    }, [city])

    return (
        <div className="weather-widget">
            <span className="weather-icon">☀️</span>

            <select
                className="weather-city"
                value={city.name}
                onChange={handleCityChange}
            >
                {cities.map((city) => (
                    <option
                        key={city.name}
                        value={city.name}
                    >
                        {city.name}
                    </option>
                ))}
            </select>

            <span className="weather-temperature">
                {temperature !== null ? `${temperature}°C` : '--°C'}
            </span>
        </div>
    )
}

export default Weather