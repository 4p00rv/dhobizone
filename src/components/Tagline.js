// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

const Tagline = ({content}) => {
  const Wrapper = styled.div`
    ${tw`flex relative w-full h-full`}
    z-index: +2;
  `;
  const Div = styled.div`
    text-transform: uppercase;
    ${tw`md:mx-32 mx-4 w-full text-5xl text-light justify-center items-center text-center tracking-widest flex text-grey-lightest`};
  `;
  return (
    <Wrapper>
      <Div>{content}</Div>
    </Wrapper>
  );
};

export default Tagline;
