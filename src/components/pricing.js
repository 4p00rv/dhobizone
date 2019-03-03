// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {Space, Wrapper, RowWrapper, Row, Col, Divider} from './commonElements';

const CustomWrapper = styled(Wrapper)`
  ${tw`bg-brand  opacity-75`}
`;

const RowWrapperCustom = styled(RowWrapper)`
  ${tw`w-full`}
`;

const Heading = styled.div`
  ${tw`text-brand-1 font-ubuntu text-4xl tracking-wide`}
`;

const RowHeading = styled.div`
  ${tw`text-grey-lighter mt-4 mb-2 text-2xl font-light tracking-wide`}
`;

const DividerCustom = styled(Divider)`
  ${tw`bg-brand-1`}
`;

const RowPrice = styled(Row)`
  ${tw`text-right`}
`;

const RowItem = styled(Row)`
  ${tw`sm:w-2/3 flex-row`}
`;

const ColItem = styled(Col)`
  ${tw`m-0 flex py-4 justify-between text-grey-lighter`}
`;

const washingItems = [
  ['Wash & Fold (per KG)', '40.00'],
  ['Wash & Iron (per KG)', '60.00'],
  ['Shirt/Tshirt/Topwear (Dry)', '12.50'],
  ['Pant/Jeans/Bottomwear (Dry)', '12.50'],
  ['Curtain (Window)', '60.00'],
  ['Curtain (Door)', '80.00'],
  ['Curtain (Hall)', '120.00'],
  ['Bed sheet (single + Pillow cover)', '25.00'],
  ['Bed sheet (double + Pillow cover)', '30.00'],
  ['Pyjama Kurta (Nightwear)', '30.00'],
  ['Just Iron', '5.00'],
];

const dryCleanItems = [
  ['Coat Suit (2pc)', '170.00'],
  ['Coat Suit (3pc)', '220.00'],
  ['Blanket (Single Bed)', '220.00'],
  ['Blanket (Double Bed)', '270.00'],
  ['Blazer', '110.00'],
  ["Girls' Suit", '90.00'],
  ['Hoodie', '90.00'],
  ['Jacket', '120.00'],
  ['Pyjama Kurta', '90.00'],
  ['Shirt/Tshirt/Topwear (Dry)', '35.00'],
  ['Pant/Jeans/Bottomwear (Dry)', '35.00'],
  ['Saree (Heavy)', '130.00'],
  ['Saree (Normal)', '110.00'],
];

const Pricing = () => (
  <CustomWrapper>
    <Heading>Pricing</Heading>
    <DividerCustom />
    <Space />
    <RowWrapperCustom>
      <Row>
        <RowHeading>Wash & Iron</RowHeading>
        {washingItems.map((item, i) => (
          <ColItem key={i * 131}>
            <RowItem>{item[0]}</RowItem>
            <RowPrice>{item[1]}</RowPrice>
          </ColItem>
        ))}
      </Row>
      <Row>
        <RowHeading>Dry clean per piece</RowHeading>
        {dryCleanItems.map((item, i) => (
          <ColItem key={i * 131}>
            <RowItem>{item[0]}</RowItem>
            <RowPrice>{item[1]}</RowPrice>
          </ColItem>
        ))}
      </Row>
    </RowWrapperCustom>
  </CustomWrapper>
);

export default Pricing;
