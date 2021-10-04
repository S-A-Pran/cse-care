import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import faq from "../../faq.jpg";
const Faq = () => {
    return (
        <div>
            {/* using bootstrap accordian faq designed */}
            <Container>
                <h1 className="text-dark py-4">Frequently Asked Question</h1>
                <div className="d-flex pb-5">
                <div className="text-center">
                    <img src={faq} alt="" />
                </div> 
                <Accordion className="py-4 w-75 m-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What about Routin?</Accordion.Header>
                        <Accordion.Body>
                        Well Each Courses will run 3 days in a week. Two will be theoritical and one will be for practical.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What About Projects?</Accordion.Header>
                        <Accordion.Body>
                        You will have to submit a project according to the course outline. If you attend the practical classes regularly then you will find it easy.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What About Holidays?</Accordion.Header>
                        <Accordion.Body>
                        You will get the occational holidays. However we give tasks during holidays to keep you in touch with the courses.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What if can not complete in time?</Accordion.Header>
                        <Accordion.Body>
                        You will not be certified. However we will give you chace to complete within 6 month. After that you have to register again.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How can we pay?</Accordion.Header>
                        <Accordion.Body>
                        We have every international gateways. Paypal will be easier or you can use any mastercard.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Can I take multiple courses?</Accordion.Header>
                        <Accordion.Body>
                        You are allowed to take multiple courses bt we recomment to take 4 courses maximum in 4 month.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>How can i reach you?</Accordion.Header>
                        <Accordion.Body>
                        Watch the footer of our site. email: csecare@gmail.com. phone: 017777777
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>When the course will start?</Accordion.Header>
                        <Accordion.Body>
                        Just buy ans start today. Our instructors are ready to serve you.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default Faq;