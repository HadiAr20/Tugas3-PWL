import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

export default function Home() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/everything?q=tesla&from=2023-09-15&sortBy=publishedAt&apiKey=2cec721a651f4b1a80436877904cba3b`
                );
                setData(response.data.articles);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <Container style={styles.container}>
            <Row>
                {Data.map((news, index) => (
                    <Col key={index} xs={12} md={4}>
                        <Card style={styles.card}>
                            <Card.Img variant="top" src={news.urlToImage} />
                            <Card.Body>
                                <Card.Title style={styles.title}>{news.title}</Card.Title>
                                <Card.Text style={styles.description}>{news.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

const styles = {
    container: {
        marginTop: '20px',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
    },
    card: {
        marginBottom: '20px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s',
        border: '2px solid #3498db',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#3498db',
    },
    description: {
        fontSize: '14px',
        color: '#333',
    },
};
