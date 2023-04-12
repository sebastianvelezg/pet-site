import styled from "styled-components";

type TeamWrapper = {};

export const TeamWrapper = styled.section<TeamWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10.1rem;
  background-color: #ffffff;
  height: fit-content;
  padding: 10rem 0 0 0;
`;
export const TeamSectionTitle = styled.p<TeamWrapper>`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  //color: #c66e14;
  color: #F0973C;
`;
export const TeamSpan = styled.span<TeamWrapper>`
  color: #717171;
`;
