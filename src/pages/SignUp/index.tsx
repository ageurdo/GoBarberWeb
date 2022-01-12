import React, { useCallback } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => {
    const handleOnSubmit = useCallback(
        async (data: Record<string, unknown>) => {
            try {
                const schema = Yup.object().shape({
                    name: Yup.string().required().required(),
                    email: Yup.string().required().email(),
                    password: Yup.string().min(
                        6,
                        'Senha com no mínimo 6 dígitos',
                    ),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });
            } catch (err) {
                console.log({ err });
            }
        },
        [],
    );

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarger" />

                <Form onSubmit={handleOnSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input
                        name="name"
                        type="text"
                        icon={FiUser}
                        placeholder="Nome"
                    />

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

                    <Button type="submit" placeholder="Cadastrar">
                        Entrar
                    </Button>
                </Form>
                <a href="login">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
};
export default Signin;
