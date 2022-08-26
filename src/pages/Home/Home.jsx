import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    geolocationSuccess,
    geolocationPending,
    updateCity
} from '../../features/geolocation/geolocationSlice';
import {
    weatherSuccess,
} from '../../features/weather/weatherSlice';

import {
    getWeather,
    getForecast,
    getWeatherByCity,
} from '../../services/weather.service';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentWeather, CustomCursor, LocationForm, Layout, Menu, Title } from '../../components';
import './home.scss';

const Home = props => {
    const dispatch = useDispatch();
    const { location, isLoading, } = useSelector(state => state.geolocation);
    const { weather, isLoadingWeather } = useSelector(state => state.weather);
    const [query, setQuery] = useState('');

    const getLocalWeather = async () => {
        try {
            const { data, status } = await getWeather(location.latitude, location.longitude);
            if (status === 200) {
                dispatch(weatherSuccess(data))
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    const getCityWather = async city => {
        try {
            const res = await getWeatherByCity(city);
            if (res) {
                dispatch(weatherSuccess(res));
            } else {
                alert("La ciudad no se encuentra disponible");
            }
            setQuery('');
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleLocation = () => {
        dispatch(geolocationPending());
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const {
                    coords: { latitude, longitude },
                } = position;
                dispatch(geolocationSuccess({ latitude, longitude }));
                getLocalWeather();
            });
        }
    };

    const handleCity = city => {
        if (city !== '' || city !== null) {
            dispatch(updateCity(city));
            getCityWather(city)
        }
    };

    const handleSearch = e => {
        const { target: { value } } = e;
        setQuery(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (query !== '') {
            getCityWather(query)
        }
    }


    /* const getLocalForecast = async () => {
        try {
            const { data, status, statusText } = await getForecast(location.latitude, location.longitude);
            console.log("forecast: ", data)
        } catch (error) {
            console.log(error)
        }
    }
  */

    useEffect(() => {
        dispatch(geolocationPending());
        setTimeout(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const {
                        coords: { latitude, longitude },
                    } = position;
                    dispatch(geolocationSuccess({ latitude, longitude }));
                });
            }
        }, 2000)
    }, []);

    useEffect(() => {
        if (weather.length === 1) return
        if (weather.length < 1) getLocalWeather();
    }, [location]);


    return (
        isLoading
            ?
            <Layout >
                <span>Buscando tu localizacion...</span>
            </Layout>
            :
            <>
                <CustomCursor />
                <Layout>
                    <main className='home'>
                        <div className='home__header' >
                            <Title>telecom weather</Title>
                            <LocationForm
                                handleSubmit={handleSubmit}
                                handleLocation={handleLocation}
                                handleSearch={handleSearch}
                                query={query}
                            />

                        </div>
                        <Menu handleCity={handleCity} />
                        <section className='home__body' >
                            {
                                <>
                                    <aside className='home__body--currentWeather' >
                                        {
                                            weather?.length === 1 && <CurrentWeather
                                                dt={weather[0]?.dt}
                                                feelsLike={weather[0]?.main?.feels_like}
                                                humidity={weather[0]?.main?.humidity}
                                                temp={weather[0]?.main?.temp}
                                                tempMax={weather[0]?.main?.temp_max}
                                                tempMin={weather[0]?.main?.temp_min}
                                                name={weather[0]?.name}
                                                timezone={weather[0]?.timezone}
                                                country={weather[0]?.sys?.country}
                                                sunrise={weather[0]?.sys?.sunrise}
                                                sunset={weather[0]?.sys?.sunset}
                                                speed={weather[0]?.wind?.speed}
                                                description={weather[0]?.weather[0]?.description}
                                                icon={weather[0]?.weather[0]?.icon}
                                                main={weather[0]?.weather[0]?.main}
                                            />
                                        }
                                    </aside>
                                    <aside>

                                    </aside>
                                </>

                            }
                        </section>
                    </main>
                </Layout>
            </>

    );
};

Home.propTypes = {
    getLocalWeather: PropTypes.func.isRequired,
    getCityWather: PropTypes.func.isRequired,
    handleLocation: PropTypes.func.isRequired,
    handleCity: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Home;
