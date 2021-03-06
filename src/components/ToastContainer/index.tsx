import React from 'react';

import { ToastMessage } from '../../hooks/toast';
import Container from './styles';
import Toast from './Toast';

interface ToastContainer {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainer> = ({ messages }) => {
    return (
        <Container>
            {messages.map(message => (
                <Toast key={message.id} message={message} />
            ))}
        </Container>
    );
};

export default ToastContainer;
