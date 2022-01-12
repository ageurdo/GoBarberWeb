import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarger" />

            <form>
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
            </form>
            <a href="login">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);
export default Signin;
