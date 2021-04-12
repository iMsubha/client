import React from 'react';
import Image from 'react-bootstrap/Image';
import chair from '../../../images/chair.png';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center justify-content-start mt-5 pt-5">
            <div className="col-md-4 offset-md-1 ">
              <h1 className="text-left dark-color">Your New Smile</h1> 
              <h1 className="text-left dark-color">Starts Here</h1>
              <p className="text-left dark-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi!</p>
              <button className="btn float-left text-white main-btn font-weight-bold">GET APPOINMENT</button>
            </div>
            <div className="col-md-6 col-sm-12">
              <Image src={chair} className="w-100" />
            </div>
            <BussinessInfo/>
        </main>
    );
};

export default HeaderMain;