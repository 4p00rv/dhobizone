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
  width: auto;
  height: auto;
  position: fixed;
  &:before {
    content: '';
    ${tw`block fixed bg-brand pin opacity-85`};
    z-index: +1;
  }
`;

export const Image1 = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "gatsby-icon.jpg"}) {
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
