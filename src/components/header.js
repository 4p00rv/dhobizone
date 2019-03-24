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
  ${tw`text-grey-lightest flex sm:flex-row flex-col md:mx-32 mx-0`}
  justify-content: space-between;
  padding: 1.45rem 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
`;

const AnchorFlex = styled.a`
  ${tw`text-grey-lightest mx-4 sm:mx-1 flex items-center mb-4 sm:mb-0`}
  &:visited {
    ${tw`text-grey-lightest`}
  }
  &:active {
    ${tw`text-grey-lightest`}
  }
`;

const TitleText = styled(AnchorFlex)`
  ${tw`text-2xl font-light tracking-widest`}
`;

const Item = styled(AnchorFlex)`
  ${tw`text-sm font-hairline tracking-wide sm:justify-end justify-start px-0 sm:px-4`}
  text-decoration: none;
  cursor: pointer;
  @media (min-width: 576px) {
    &:hover {
      box-shadow: 0px 2px rgba(255, 255, 255, 0.3);
    }
  }
`;

const TagLine = styled.div`
  ${tw`text-3xl `}
`;

const Header = ({siteTitle}) => (
  <HeaderStyled>
    <Wrapper>
      <TitleText>{siteTitle}</TitleText>
      <Item href="/#services">Services</Item>
      <Item href="/#pricing">Pricing</Item>
      <Item href="/#terms">Terms & Conditions</Item>
      <Item style={tw`mb-0`} href="/#contact">
        Contact
      </Item>
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
