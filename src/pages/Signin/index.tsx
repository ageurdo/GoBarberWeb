import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValiddationErrors';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleOnSubmit = useCallback(
        async (data: Record<string, unknown>) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    email: Yup.string().required().email(),
                    password: Yup.string().required('Senha obrigatória'),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                }
            }
        },
        [],
    );
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarger" />

                <Form onSubmit={handleOnSubmit} ref={formRef}>
                    <h1>Faça seu logon</h1>

                    <Input
                        name="email"
                        type="email"
                        icon={FiMail}
                        placeholder="E-mail"
                    />

                    <Input
                        name="password"
                        type="password"
                        icon={FiLock}
                        placeholder="Senha"
                    />

                    <Button type="submit" placeholder="Entrar">
                        Entrar
                    </Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>
                <a href="login">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};
export default Signin;
