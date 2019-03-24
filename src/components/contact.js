// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {Space, Wrapper, RowWrapper, Row, Col, Divider} from './commonElements';

const CustomWrapper = styled(Wrapper)`
  ${tw`bg-grey-lighter`}
`;

const Heading = styled.div`
  ${tw`text-center w-full font-ubuntu text-3xl tracking-wide py-2 text-brand-3`}
`;

const ContentHeading = styled.div`
  ${tw`text-brand-3 mt-4 mb-2 mr-auto ml-auto text-2xl text-center font-light cursor-pointer tracking-wide border-0 w-full pb-2 border-b border-solid`}
`;

const ContactUs = () => (
  <CustomWrapper id="contact">
    <Heading>Reach us at</Heading>
    <Divider />
    <RowWrapper>
      <Col>
        <ContentHeading>Location</ContentHeading>
        <div>
          <p>
            D4, Saraswati Nagar Extension,
            <br />
            Chainpura, Malviya Nagar,
            <br />
            Jaipur, Rajasthan 302017, India
          </p>
        </div>
      </Col>
      <Col>
        <ContentHeading>Email</ContentHeading>
        <p>dhobi.zone@gmail.com</p>
      </Col>
      <Col>
        <ContentHeading>Phone</ContentHeading>
        <p>+917665338899</p>
      </Col>
    </RowWrapper>
  </CustomWrapper>
);

export default ContactUs;
