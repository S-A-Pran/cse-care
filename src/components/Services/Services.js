import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useCourses from '../../Hook/useCourses';

const Services = () => {
    const [courses] = useCourses();
    return (
        /* using bootstrap react showing each courses which is our services */
        <div>
            <Container className="py-4">
                <h1 className="text-dark pb-3">Courses</h1>
                <Row xs={1} md={3} className="g-3">
                        {
                        courses.map(course => <Col key={course.id}>
                                <Card className="text-center shadow">
                                    <Card.Img variant="top" height="200px" src={course.img} />
                                    <Card.Title className="bg-primary p-2 text-white">{course.name}</Card.Title>
                                    <Card.Body>
                                    <h3>By: {course.Instructor?.name}</h3>
                                    <p>Duration: {course.duration}</p>
                                    <h4>Outline</h4>
                                    <p> First Month: {course.outline.first}</p>
                                    <p> Second Month: {course.outline.second}</p>
                                    <p> Third Month: {course.outline.third}</p>
                                    <p> Fourth Month: {course.outline.fourth}</p>
                                    <div>
                                        <h5>Quizes: {course.outline.quiz}</h5>
                                        <h5>Mid: {course.Marks.mid} marks and Final: {course.Marks.final} and Others: {course.Marks.others}</h5>
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

export default Services;