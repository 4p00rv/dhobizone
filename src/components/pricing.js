// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {Space, Wrapper, RowWrapper, Row, Col, Divider} from './commonElements';

const CustomWrapper = styled(Wrapper)`
  ${tw`bg-brand`}
`;
const Heading = styled.div`
  ${tw`text-brand-1 font-ubuntu text-4xl tracking-wide`}
`;
const RowHeading = styled.div`
  ${tw`text-brand-1 mt-4 mb-2 mr-auto ml-auto text-2xl text-center font-light cursor-pointer tracking-wide border-0 sm:w-2/3 pb-2 border-b border-solid`}
`;
const DividerCustom = styled(Divider)`
  ${tw`bg-brand-1`}
`;
const RowPrice = styled(Row)`
  ${tw`text-right w-1/3`}
`;
const RowItem = styled(Row)`
  ${tw`w-2/3 sm:w-2/3 flex-row`}
`;
const ColItem = styled(Col)`
  ${tw`m-auto sm:w-2/3 flex py-4 justify-between text-grey-lighter`}
`;
const SectionWrapper = styled.div`
  ${tw`w-full sm:w-2/3`}
`;
const ColWrapper = styled.div`
  ${tw`w-full`}
  &.hidden {
    ${tw`hidden`}
  }
`;

const sectionContent = [
  [['Wash & Fold (per KG)', '40.00']],
  [['Wash & Iron (per KG)', '60.00']],
  [['Just Iron', '5.00']],
  [
    ['Shirt/Tshirt/Topwear (Dry)', '12.50'],
    ['Pant/Jeans/Bottomwear (Dry)', '12.50'],
    ['Curtain (Window)', '60.00'],
    ['Curtain (Door)', '80.00'],
    ['Curtain (Hall)', '120.00'],
    ['Bed sheet (single + Pillow cover)', '25.00'],
    ['Bed sheet (double + Pillow cover)', '30.00'],
    ['Pyjama Kurta (Nightwear)', '30.00'],
  ],
  [
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
  ],
];

const sections = [
  'Wash & Fold (per KG)',
  'Wash & Iron (per KG)',
  'Just Iron (per pc)',
  'Wash & Iron (per pc)',
  'Dry Clean (per pc)',
];

class Pricing extends React.Component {
  handleClick(e, data) {
    const ele = e.target.nextSibling;
    ele.classList.toggle('hidden');
  }

  render() {
    return (
      <CustomWrapper id="pricing">
        <Heading>Base Prices</Heading>
        <DividerCustom />
        <Space />
        {sections.map((ele, i) => (
          <SectionWrapper key={i + 33}>
            <RowHeading key={i} onClick={this.handleClick}>
              {ele}
            </RowHeading>
            <ColWrapper key={i * i + 2} className={i > 2 ? 'hidden' : ''}>
              {sectionContent[i].map((item, j) => (
                <ColItem key={i * j * 131 + j}>
                  <RowItem>{item[0]}</RowItem>
                  <RowPrice>{item[1]}</RowPrice>
                </ColItem>
              ))}
            </ColWrapper>
          </SectionWrapper>
        ))}
        <Space />
      </CustomWrapper>
    );
  }
}
/*
          <Row>
            <RowHeading 
              onClick={this.handleClick}
            >
              Wash & Iron
            </RowHeading>
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
          */

export default Pricing;
