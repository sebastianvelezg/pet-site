import styled from "styled-components";

export const FooterLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 848px;
  background: linear-gradient(180deg, #325f71 0%, #002736 100%);
  @media (max-width: 750px) {


  height: 1269px;
}
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 70px 0px;
  gap: 60px;
  
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 750px) {

    align-items: center;
  }
`;

export const FooterLinkTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.0125em;
  color: #b4e2ed;
`;

export const FooterLinkNames = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.0125em;
  color: #ffffff;
  cursor: pointer;
`;

export const FooterText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.0125em;
  color: #ffffff;
`;
