import React from "react";
import styled from 'styled-components';

const LoadingScreen = () => {
  return (
    <Container>
      <Logo src="/images/logo.gif" alt="logo" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const Logo = styled.img`
  height: 300px;
  width: 300px;
`;

export default LoadingScreen;
