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
    getWeatherByCity,
} from '../../services/weather.service';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentWeather, LocationForm, Layout, Loader, Menu, Title } from '../../components';
import './home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const { location, isLoading, } = useSelector(state => state.geolocation);
    const { weather } = useSelector(state => state.weather);
    const [query, setQuery] = useState('');

    const getLocalWeather = async () => {
        try {
            const { data, status } = await getWeather(location?.latitude, location?.longitude);
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
                if (latitude.length > 0 && longitude.length > 0) {
                    getLocalWeather();
                }
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
                <Loader />
            </Layout>
            :
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
                    <div className='home__menu'>
                        <Menu handleCity={handleCity} />
                    </div>
                    <section className='home__body' >
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
                    </section>
                </main>
            </Layout>
    );
};

Home.propTypes = {
    getLocalWeather: PropTypes.func,
    getCityWather: PropTypes.func,
    handleLocation: PropTypes.func,
    handleCity: PropTypes.func,
    handleSearch: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default Home;
