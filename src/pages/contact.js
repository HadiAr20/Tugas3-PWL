import React, { useState, useContext } from "react";
import { Form, Button, Container, Card, ListGroup } from 'react-bootstrap';

const MessageContext = React.createContext();

export default function Contact() {
    return (
        <Container style={styles.container}>
            <h2 style={styles.heading}>Get in Touch</h2>
            <MessageProvider>
                <MessagesForm />
                <MessageList />
            </MessageProvider>
        </Container>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #3498db, #e74c3c)',
    },
    heading: {
        fontSize: '28px',
        color: '#fff',
        marginBottom: '20px',
    },
};

function MessageProvider({ children }) {
    const [messages, setMessages] = useState([]);
    return (
        <MessageContext.Provider value={{ messages, setMessages }}>
            {children}
        </MessageContext.Provider>
    );
}

function MessagesForm() {
    const { messages, setMessages } = useContext(MessageContext);
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newMessage.trim()) return;

        const newObject = {
            text: newMessage,
        }

        setMessages([...messages, newObject]);
        setNewMessage("");
    }

    return (
        <Card>
            <Card.Body>
                <h3 style={styles.subHeading}>Input Message</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Your Message"
                            value={newMessage}
                            onChange={handleInputChange}
                        />
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

function MessageList() {
    const { messages } = useContext(MessageContext);

    return (
        <Card style={styles.messageListCard}>
            <Card.Body>
                <h3 style={styles.subHeading}>My Messages</h3>
                <ListGroup>
                    {messages.map((message, index) => (
                        <ListGroup.Item key={index}>{message.text}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}
