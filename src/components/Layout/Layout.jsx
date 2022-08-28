import PropTypes from 'prop-types';
import './layout.scss';

const Layout = ({ children }) => {
    return <div className='layout'>{children}</div>;
};

Layout.propTypes = {
    children: PropTypes.object,
};

export default Layout;
