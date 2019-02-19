// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';
import {graphql, StaticQuery} from 'gatsby';

const ImageWrapper = styled.div`
  width: 100%;
  ${tw`h-screen fixed pin-l`}
  overflow: hidden;
`;

const ImageCustom = styled(Img)`
  width: 100%;
  height: 100%;
  position: fixed;
  &:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: +1;
    transition: all 0.3s linear;
  }
`;

export const Image1 = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "towel-3156896_1920.jpg"}) {
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
        <ImageCustom fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
    )}
  />
);
