// @format
import React from 'react';
import {Image1} from './styled_image';
import Header from './header';
import Tagline from './tagline';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  position: relative;
  ${tw`h-screen-tag flex flex-col`}
  font-family: 'Roboto';
`;

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Image1 />
      <Header siteTitle="Dhobinzone" />
      <Tagline content="Keeping it clean." />
    </Wrapper>
  );
};

export default Layout;
