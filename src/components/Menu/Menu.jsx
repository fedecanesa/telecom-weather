import PropTypes from 'prop-types';
import { menuEnum } from '../../constants/menuEnum';
import './menu.scss';

const Menu = ({ handleCity }) => {
    return (
        <div className='menu'>
            {
                menuEnum?.map(city => (
                    <button
                        key={city?.id}
                        className='text-white text-lg font-medium'
                        onClick={() => handleCity(city?.title)}>
                        {city?.title}
                    </button>
                ))
            }
        </div>
    );
};

Menu.propTypes = {
    handleCity: PropTypes.func
};

export default Menu;
