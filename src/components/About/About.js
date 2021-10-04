import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useCourses from '../../Hook/useCourses';

const About = () => {
    const [courses] = useCourses();
    return (
        /* the intructor details showed using bootstrap card*/
        <div>
            <Container className="py-4">
                <h1 className="text-dark pb-3">About Lecturer</h1>
                <Row xs={1} md={4} className="g-3">
                        {
                        courses.map(course => <Col key={course.id}>
                                <Card className="text-center shadow">
                                    <Card.Img variant="top" className="w-50 m-auto py-3" height="150px" src={course.Instructor?.pic} />
                                    <Card.Title className="bg-primary p-2 text-white">{course.Instructor?.name}</Card.Title>
                                    <Card.Body>
                                    <h3>Designation: {course.Instructor?.designation}</h3>
                                    <p>Institution: {course.Instructor?.university}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        )}
                </Row>
            </Container>
        </div>
    );
};

export default About;