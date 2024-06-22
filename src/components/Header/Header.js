import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Dynamic Dashboard</h1>
    <p>A React dashboard displaying dynamic data</p>
  </HeaderContainer>
);

export default Header;