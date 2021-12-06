import React from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarger" />

            <form>
                <h1>Faça seu logon</h1>

                <input placeholder="E-mail" />

                <input type="password" placeholder="E-Senha" />

                <button type="submit" placeholder="Entrar" />

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="forgot ">Criar conta</a>
        </Content>
        <Background />
    </Container>
);
export default Signin;
