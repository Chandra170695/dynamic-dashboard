import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
`;

const Header = () => (
  <HeaderContainer>
    <h1 className="header">Stock Exchange Data</h1>
    <p  className="para">Explore simulated stock exchange data featuring daily open, high, low, and close values.</p>
  </HeaderContainer>
);

export default Header;