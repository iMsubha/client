import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/tooth-whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const servicesData = [
    {
        title: 'Fluoride Treatment',
        image: fluoride,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae!'
    },
    {
        title: 'Cavity Filling',
        image: cavity,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae!'
    },
    {
        title: 'Teeth Whitening',
        image: whitening,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae!'
    }
    
]

const Services = () => {
    return (
        <section className="mt-5 mb-2">
            <h6 className="text-uppercase light-color text-center font-weight-bold mb-2">Our Services</h6>
            <h2 className="text-center dark-color font-weight-bold mb-5">Services We Provide</h2>
            <Row className="pt-5 m-5">
            {
                servicesData.map(service =><ServiceDetails service={service}></ServiceDetails> )
            }
            </Row>
        </section>
    );
};

export default Services;