import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from '../../Hook/useCourses';
import learn from "../../learn.svg";
import { useHistory } from "react-router-dom";


const Home = () => {
    const [courses] = useCourses();
    let sixCourse = [...courses];
    let homeCourses = sixCourse.slice(8);
    let history = useHistory();
    const handleClick = () =>{
        history.push("/services");
    }
    return (
        
        <div>
            <div className="bg-light">
            {/* the upper part */}
                <Container className="d-flex align-items-center justify-content-between p-4 rounded">
                    <div>
                        <img src={learn} alt="" />
                    </div>
                    <div>
                        <h2>Certified CSE Courses. Start Courses Now</h2>
                        <ul>
                            <li>12 hour support</li>
                            <li>Live projects</li>
                            <li>Quizes and Assignments</li>
                        </ul>
                        <button onClick={handleClick} className="btn btn-primary">Get Started</button>
                    </div>
                </Container>
            </div>
            {/* the second part */}
            <Container className="py-4">
                <div className="d-flex justify-content-between">
                    <h2 className="pt-2 pb-3">Courses</h2>
                    <Link to="/services"><button className="btn btn-primary">See More</button></Link>
                </div>
                <Row className="g-3" id="container">
                    {
                        homeCourses.map(course => <Col key={course.id}>
                            <Card className="text-center shadow">
                                <Card.Img variant="top" height="200px" src={course.img} />
                                <Card.Title className="bg-primary p-2 text-white">{course.name}</Card.Title>
                                <Card.Body>
                                <h3>By: {course.Instructor?.name}</h3>
                                <p>Duration: {course.duration}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Home;