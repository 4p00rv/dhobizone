// @format
import React from 'react';
import {Image1} from './styled_image';
import Header from './header';
import Tagline from './tagline';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Services from './services';
import Pricing from './pricing';

const Wrapper = styled.div`
  position: relative;
  ${tw`h-screen-tag flex flex-col`}
  font-family: 'Roboto';
`;

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Image1 />
        <Header siteTitle="Dhobizone" />
        <Tagline content="Keeping it clean." />
      </Wrapper>
      <Services />
      <Pricing />
    </React.Fragment>
  );
};

export default Layout;
