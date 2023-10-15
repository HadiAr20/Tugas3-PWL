import React from 'react';

export default function About() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>About Me</h2>
                <p style={styles.description}>
                    Hello! I'm Muhammad Hadi Arsa, a student at ITERA. I'm passionate about learning and exploring new things, especially in the world of technology and innovation.
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #4CAF50, #2196F3)',
    },
    card: {
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
        width: '80%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        color: '#333',
    },
    description: {
        fontSize: '16px',
        color: '#555',
    },
};
