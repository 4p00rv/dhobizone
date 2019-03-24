// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {Space, Wrapper, RowWrapper, Row, Col, Divider} from './commonElements';

const LocationDetails = styled.div`
  ${tw`text-center w-full font-ubuntu text-3xl tracking-wide py-2 text-brand-3`}
`;

const Feature = () => {
  const features = [
    ['24 hours delivery', 'hygenic washing', 'wash & fold/iron'],
    ['dry cleaning', 'liquid detergent', 'steam iron'],
  ];

  const RowWrapperCustom = styled(RowWrapper)`
    ${tw`text-black rounded border border-solid border-brand`}
  `;

  const ColCustom = styled(Col)`
    ${tw`p-4 text-center capitalize text-xl`}
  `;

  return (
    <RowWrapperCustom>
      {features.map((rows, i) => (
        <Row key={i * 122}>
          {rows.map((item, i) => (
            <ColCustom key={i * 13}>{item}</ColCustom>
          ))}
        </Row>
      ))}
    </RowWrapperCustom>
  );
};

const CustomWrapper = styled(Wrapper)`
  ${tw`bg-grey-lighter`}
`;

const Services = () => (
  <CustomWrapper id="services">
    <Space />
    <LocationDetails>Affordable laundry service now in Jaipur</LocationDetails>
    <Divider />
    <Space />
    <Space />
    <Space />
    <Feature />
    <Space />
    <Space />
  </CustomWrapper>
);

export default Services;
