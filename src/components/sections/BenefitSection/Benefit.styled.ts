import styled from "styled-components";

type BenefitWrapper = {};

export const BenefitWrapper = styled.section<BenefitWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  height: fit-content;
  padding: 10rem 0 16.75rem 0rem;
  gap: 10.75rem;
`;

export const BenefitTitle = styled.p<BenefitWrapper>`
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.6rem;
  color: #325f71;
`;

export const BenefitCardsWrapper = styled.div<BenefitWrapper>`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  width:fit-content;

   @media (max-width: 750px) {
    flex-direction: column;
    gap:5rem
  }
`;

export const BenefitTitleContainer = styled.div<BenefitWrapper>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
`;
