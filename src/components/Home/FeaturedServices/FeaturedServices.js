import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import services from '../../../images/services.png';
const FeaturedServices = () => {
    return (
        <section>
            <Row>
                <Col>
                    <Image src={services}/>
                </Col>
                <Col></Col>
            </Row>
        </section>
    );
};

export default FeaturedServices;