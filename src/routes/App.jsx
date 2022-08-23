import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {
    routesEnum
} from "../constants/routesEnum";
import {
    Home,
    NotFound
} from '../pages';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routesEnum.HOME} element={<Home />} />
                <Route path={routesEnum.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </BrowserRouter >
    );
}

export default App;


/*  
     const API_KEY = '5ff1f2fb10a9c8dbba1b850dae23bd8b';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5';

    // https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

    const getWeatherData = (infoType, searchParams) => {
        console.log(searchParams, infoType)
        const url = new URL(BASE_URL + '/' + infoType);
        url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

        return fetch(url).then(res => res.json());
    };

    useEffect(() => {
        getWeatherData()
    }, [])
*/