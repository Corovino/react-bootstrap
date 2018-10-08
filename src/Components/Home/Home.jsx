import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css';

class Home extends Component {

    render() {
        return (
            <Grid fluid={true}>
                <Jumbotron>
                    <h2>Wellcome to code life</h2>
                    <p>Esto es un texto de prueba</p>
                    <Link to="/about">
                        <Button bsStyle="primary">
                            About
                        </Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center" >
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" circle className="profile-pic" />
                        <h3>Vanessa</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" circle className="profile-pic" />
                        <h3>Riff</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                </Row>

            </Grid>   
        )
    }


}

export default Home;