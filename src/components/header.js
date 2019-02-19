// @format
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

const HeaderStyled = styled.header`
  width: 100%;
  ${tw`font-sans`}
  position: relative;
  display: block;
  z-index: +2;
`;

/*
const ImgStyled = styled(Img)`
  width: 42px;
  ${tw`mr-4`}
`;

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "gatsby-icon.png"}) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ImgStyled fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
);
*/
const Wrapper = styled.div`
  ${tw`text-grey-lightest flex sm:flex-row flex-col md:mx-32 mx-4`}
  justify-content: space-between;
  padding: 1.45rem 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
`;

const AnchorFlex = styled.a`
  ${tw`mx-1 sm:mx-1`}
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const TitleText = styled(AnchorFlex)`
  ${tw`text-2xl font-light tracking-widest sm:mb-0 mb-2`}
`;

const Item = styled(AnchorFlex)`
  ${tw`text-sm font-hairline tracking-wide sm:justify-end justify-start sm:leading-none leading-loose`}
  text-decoration: none;
  cursor: pointer;
  &:hover {
    ${tw`font-bold`}
  }
`;

const TagLine = styled.div`
  ${tw`text-3xl `}
`;

const Header = ({siteTitle}) => (
  <HeaderStyled>
    <Wrapper>
      <TitleText>{siteTitle}</TitleText>
      <Item>Services</Item>
      <Item>Pricing</Item>
      <Item>Contact</Item>
    </Wrapper>
  </HeaderStyled>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
