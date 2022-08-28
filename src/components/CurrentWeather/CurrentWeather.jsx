import PropTypes from 'prop-types';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilTemperatureMinus,
    UilTemperaturePlus
} from "@iconscout/react-unicons";
import './currentWeather.scss';
import { useState } from 'react';


const CurrentWeather = ({
    dt,
    feelsLike,
    humidity,
    temp,
    tempMax,
    tempMin,
    name,
    timezone,
    country,
    sunrise,
    sunset,
    description,
    main,
    speed
}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='currentweather'>

            <div className='currentweather__date'>
                <p>
                    {
                        new Date().toLocaleString()
                    }
                </p>
            </div>

            <div className='currentweather__location'>
                <p>{`${name}, ${country}`}</p>
            </div>
            <div className='currentweather__temperature'>
                <p>{`${temp?.toFixed()}°`}</p>
            </div>
            <div className='currentweather__description'>
                <p>{description}</p>
            </div>
            <div className='currentweather__button--details'>
                <button onClick={() => setIsOpen(!isOpen)}>See details {' >'} </button>
            </div>
            {
                isOpen && (
                    <div className='currentweather__details' style={
                        isOpen
                            ? { height: 'auto' }
                            : { heigth: '250px' }
                    }>
                        <div className='currentweather__details--temperature'>
                            <div className="details__temperature--others">
                                <div className="temperature__others--container">
                                    <div className='others__container--title'>
                                        <UilTemperature size={18} className="others_container--icon" />
                                        Real feels
                                    </div>
                                    <span>{`${feelsLike?.toFixed()}°`}</span>
                                </div>
                                <div className="temperature__others--container">
                                    <div className='others__container--title'>
                                        <UilTear size={18} className="others_container--icon" />
                                        Humidity
                                    </div>
                                    <span>{`${humidity?.toFixed()}%`}</span>
                                </div>
                                <div className="temperature__others--container">
                                    <div className='others__container--title'>
                                        <UilWind size={18} className="others_container--icon" />
                                        Wind
                                    </div>
                                    <span>{`${speed?.toFixed()} km/h`}</span>
                                </div>
                                <div className="temperature__others--container">
                                    <div className='others__container--title'>
                                        <UilSun className="others_container--icon" />
                                        Rise
                                    </div>
                                    <span>
                                        {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                                    </span>
                                </div>
                                <div className="temperature__others--container">
                                    <div className='others__container--title'>
                                        <UilSunset className="others_container--icon" />
                                        Set
                                    </div>
                                    <span>
                                        {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
                                    </span>
                                </div>
                                <div className="temperature__others--container">
                                    <div className='others__container--title'>
                                        <UilTemperaturePlus className="others_container--icon" />
                                        High
                                    </div>
                                    <span>{`${tempMax?.toFixed()}°`}</span>
                                </div>
                                <div className="temperature__others--container">
                                    <div className='others__container--title'>
                                        <UilTemperatureMinus className="others_container--icon" />
                                        Low
                                    </div>
                                    <span>{`${tempMin?.toFixed()}°`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )

}

CurrentWeather.propTypes = {
    dt: PropTypes.number,
    feelsLike: PropTypes.number,
    humidity: PropTypes.number,
    temp: PropTypes.number,
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
    name: PropTypes.string,
    timezone: PropTypes.number,
    country: PropTypes.string,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    description: PropTypes.string,
    main: PropTypes.string,
    speed: PropTypes.number
}

export default CurrentWeather;