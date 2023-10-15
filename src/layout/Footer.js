import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid className="bg-dark text-light">
            <Row>
                <Col className="text-center py-3">
                ©copyright Hadi AR
                </Col>
            </Row>
        </Container>
    );
}