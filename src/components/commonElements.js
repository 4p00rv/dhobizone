// @format
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Space = styled.div`
  ${tw`w-100 sm:my-4 my-2`}
`;

export const Wrapper = styled.div`
  ${tw`flex flex-col min-h-content relative p-8 sm:p-16 font-light items-center`}
  z-index: +2;
`;

export const RowWrapper = styled.div`
  ${tw`flex-col sm:flex-row flex justify-between sm:w-2/3 p-8`}
`;

export const Row = styled.div`
  ${tw`w-full sm:w-1/3`}
`;

export const Col = styled.div`
  ${tw`m-2 tracking-wide`}
`;

export const Divider = styled.div`
  ${tw`flex w-1/3 text-center bg-brand-3 h-2px my-6 opacity-75`}
`;
