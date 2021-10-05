import { faClock, faSignal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import useCourses from '../../Hook/useCourses';

const Services = () => {
    const clockIcon = <FontAwesomeIcon icon={faClock}/>
    const usersIcon = <FontAwesomeIcon icon={faUsers}/>
    const signalIcon = <FontAwesomeIcon icon={faSignal}/>
    const [courses] = useCourses();
    return (
        /* using bootstrap react showing each courses which is our services */
        <div>
            <Container className="py-4">
                <h1 className="text-dark pb-3">Courses</h1>
                <Row xs={1} md={1} className="g-3">
                        {
                        courses.map(course => <div key={course.id}><div className="d-flex justify-content-between align-items-center pb-4">
                            <div className="w-50">
                                <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" width="200px" height="200px" src={course.img} />
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
                            </div>
                            <div>
                                    <h4 className="text-center">Outline</h4>
                                    <Table className="text-center" striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                        <th>Month</th>
                                        <th>Topics</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>First</td>
                                        <td>{course.outline.first}</td>
                                        </tr>
                                        <tr>
                                        <td>Second</td>
                                        <td>{course.outline.second}</td>
                                        </tr>
                                        <tr>
                                        <td>Third</td>
                                        <td>{course.outline.third}</td>
                                        </tr>
                                        <tr>
                                        <td>Fourth</td>
                                        <td>{course.outline.fourth}</td>
                                        </tr>
                                    </tbody>
                                    </Table>
                                    <div>
                                        <h5>Quizes: {course.outline.quiz}</h5>
                                        <h5>Mid: {course.Marks.mid} marks and Final: {course.Marks.final} and Others: {course.Marks.others}</h5>
                                    </div>
                            </div>
                            </div>
                            <hr className="text-dark fw-bold "/>
                            </div>
                         )}
                </Row>
            </Container>
        </div>
    );
};

export default Services;