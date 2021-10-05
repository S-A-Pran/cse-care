import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from '../../Hook/useCourses';
import learn from "../../learn.svg";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faUsers,faSignal, faStopwatch, faTasks, faCheck } from '@fortawesome/free-solid-svg-icons';
import StarRatings from 'react-star-ratings';


const Home = () => {
    const clockIcon = <FontAwesomeIcon icon={faClock}/>
    const usersIcon = <FontAwesomeIcon icon={faUsers}/>
    const signalIcon = <FontAwesomeIcon icon={faSignal}/>
    const stopwatchlIcon = <FontAwesomeIcon icon={faStopwatch}/>
    const projectlIcon = <FontAwesomeIcon icon={faTasks}/>
    const quizeslIcon = <FontAwesomeIcon icon={faCheck}/>
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
                            <h6>{stopwatchlIcon} 12 hour support</h6> 
                            <h6>{quizeslIcon} Live projects</h6> 
                            <h6>{projectlIcon} Quizes and Assignments</h6> 
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
                <Row xs={1} md={4} className="g-3" id="container">
                    {
                        homeCourses.map(course => <Col key={course.id}>
                            <Card className="text-center shadow">
                                <Card.Img variant="top" height="200px" src={course.img} />
                                <Card.Title className="bg-primary p-2 text-white">{course.name}</Card.Title>
                                <Card.Body>
                                <h5>By: {course.Instructor?.name}</h5>
                                <h6>{clockIcon} Duration: {course.duration}</h6>
                                <div>
                                    <h6>{usersIcon} {course.enrolled} enrolled</h6>
                                    <span>{signalIcon}</span> 
                                    <StarRatings
                                    starRatedColor="goldenrod"
                                    rating={course.star}
                                    starDimension="20px"
                                    starSpacing="2px"/>
                                </div>
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