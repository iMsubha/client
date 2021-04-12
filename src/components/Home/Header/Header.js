import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
const Header = () => {
    return (
        <div className="header ">
            {/* <h3>Header</h3> */}
            <Navigation/>
            <HeaderMain/>
            
        </div>
    );
};

export default Header;