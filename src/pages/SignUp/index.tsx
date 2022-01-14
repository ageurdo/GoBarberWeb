import React, { useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValiddationErrors';
import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleOnSubmit = useCallback(
        async (data: Record<string, unknown>) => {
            try {
                formRef.current?.setErrors({});
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
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarger" />

                    <Form ref={formRef} onSubmit={handleOnSubmit}>
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
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para logon
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    );
};
export default SignUp;
