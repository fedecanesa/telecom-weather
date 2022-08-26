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

            <div className='currentweather__details'>
                <div className='currentweather__details--description'>
                    <p>{description}</p>
                </div>

                <div className='currentweather__details--temperature'>
                    <div className='details__temperature--main'>
                        <p>{`${temp?.toFixed()}°`}</p>
                    </div>
                    <div className="details__temperature--others">
                        <div className="temperature__others--container">
                            <UilTemperature size={18} className="others_container--icon" />
                            <p>
                                Real feels:
                                <span>{`${feelsLike?.toFixed()}°`}</span>

                            </p>
                        </div>
                        <div className="temperature__others--container">
                            <UilTear size={18} className="others_container--icon" />
                            <p>  Humidity:
                                <span>{`${humidity?.toFixed()}%`}</span>

                            </p>
                        </div>
                        <div className="temperature__others--container">
                            <UilWind size={18} className="others_container--icon" />
                            <p>
                                Wind:
                                <span>{`${speed?.toFixed()} km/h`}</span>

                            </p>
                        </div>
                    </div>
                </div>

                <div className='currentweather__details--others'>
                    <div className='details__others--container'>
                        <UilSun className="others_container--icon" />
                        <p>
                            Rise:
                            <span>
                                {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                            </span>
                        </p>
                    </div>
                    <p>|</p>
                    <div className='details__others--container'>
                        <UilSunset className="others_container--icon" />
                        <p>
                            Set:
                            <span>
                                {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
                            </span>
                        </p>
                    </div>
                    <p>|</p>
                    <div className='details__others--container'>
                        <UilTemperaturePlus className="others_container--icon" />
                        <p>
                            High:
                            <span>{`${tempMax?.toFixed()}°`}</span>
                        </p>
                    </div>
                    <p>|</p>
                    <div className='details__others--container'>
                        <UilTemperatureMinus className="others_container--icon" />
                        <p>
                            Low:
                            <span>{`${tempMin?.toFixed()}°`}</span>

                        </p>
                    </div>
                </div>
            </div>

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