// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {Space, Wrapper, RowWrapper, Row, Col, Divider} from './commonElements';
import Modal from 'react-modal';

const CustomWrapper = styled(Wrapper)`
  ${tw`bg-brand`}
`;

const DividerCustom = styled(Divider)`
  ${tw`bg-brand-1`}
`;

const Heading = styled.div`
  ${tw`text-center w-full font-ubuntu text-3xl tracking-wide py-2 text-brand-1`}
`;

const Ul = styled.ul`
  ${tw`text-grey-lighter`}
`;

const Terms = () => (
  <CustomWrapper id="terms">
    <Heading>Terms & Conditions</Heading>
    <DividerCustom />
    <Space />
    <Ul>
      <li>
        Warm clothes will not be included if you are giving clothes according to
        weight. Only normal clothes can be taken in weight. Delivery boy will
        explain you more at the pick up time.
      </li>
      <li>Delivery boy will tell you the delivery time.</li>
      <li>Price is fixed. No bargaining please.</li>
      <li>
        Check your clothes at the time of delivery. If there is an issue after
        washing, return it to the delivery boy.
      </li>
      <li>
        If clothe/clothes are missing or mismatch, your complain will be listen
        by us but only within 24 hrs. After 24 hrs, we can't help you.
      </li>
      <li>You can order any time, team dhobizone will call you back.</li>
      <li>
        If you order after 8 PM, delivery boy may or may not receive your order.
        If delivery boy receives your order after 8 PM then the order will count
        in the next day order.
      </li>
    </Ul>
  </CustomWrapper>
);
export default Terms;
