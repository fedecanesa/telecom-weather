import { UilLocationPoint } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import './locationForm.scss';

const LocationForm = ({ handleSubmit, handleLocation, handleSearch, query }) => {
    return (
        <div className='input'>
            <form onSubmit={handleSubmit} className='locationForm'>
                <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Search for a city...'
                    onChange={handleSearch}
                    value={query}
                    className='locationForm__input'
                />
                <button className="locationForm__btn" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>

            <UilLocationPoint
                size={25}
                className='locationForm__util'
                onClick={handleLocation}
            />
        </div>
    );
};

LocationForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleLocation: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    query: PropTypes.string,
};

export default LocationForm;
