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
  position: absolute;
  display: block;
  z-index: +2;
`;

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

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  ${tw`text-grey-lightest`}
  justify-content: space-between;
  padding: 1.45rem 1.0875rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
`;

const TitleText = styled.div`
  ${tw`text-2xl font-light tracking-widest`}
`;

const Item = styled.a`
  ${tw`text-sm font-hairline tracking-wide`}
  text-decoration: none;
  cursor: pointer;
  &:hover {
    ${tw`font-light`}
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
