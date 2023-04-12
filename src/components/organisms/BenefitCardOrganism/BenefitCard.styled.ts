import styled from "styled-components";

type BenefitCardWrapper = {};

export const BenefitCardWrapper = styled.div<BenefitCardWrapper>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.5rem 2.7rem 2.7rem;
  gap: 1.8rem;
  isolation: isolate;
  width: 26rem;
  height: 29rem;
  background: #ffffff;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 3.8rem;
`;

export const BenefitCardIcon = styled.div<BenefitCardWrapper>`
  position: absolute;
  width: 10rem;
  height: 10rem;
  left: 8rem;
  top: -3rem;
`;

export const BenefitCardTitle = styled.p<BenefitCardWrapper>`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #325f71;
`;

export const BenefitCardDescription = styled.p<BenefitCardWrapper>`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #325f71;
  text-align: justify;
`;
