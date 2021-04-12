import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';

const ServiceDetails = ({service}) => {
    console.log(service);
    const {title, image, description} = service;
    return (
        <Col sm={12} lg={4} className="dark-color d-flex flex-column justify-content-center align-items-center">
            <Image src={image} height={50} className="mb-3"/>
            <h4 className="mb-4">{title}</h4>
            <p className="text-center text-muted w-75">{description}</p>
        </Col>
    );
};

export default ServiceDetails;