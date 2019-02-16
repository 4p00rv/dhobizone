// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';
import {graphql, StaticQuery} from 'gatsby';

const ImageWrapper = styled.div`
  width: 100%;
  ${tw`h-screen`}
  position:relative;
  overflow: hidden;
`;

const ImageCustom = styled(Img)`
  width: 100%;
  height: 100%;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: +1;
    transition: all 0.3s linear;
  }
`;

export const Image1 = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {eq: "pop-zebra-348410-unsplash.jpg"}
        ) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ImageWrapper>
        {children}
        <ImageCustom
          style={{position: 'absolute'}}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </ImageWrapper>
    )}
  />
);
