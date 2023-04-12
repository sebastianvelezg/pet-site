import {
  BenefitCardDescription,
  BenefitCardIcon,
  BenefitCardTitle,
  BenefitCardWrapper,
} from "./BenefitCard.styled";
import { BenefitBgIcon } from "@/components/svgs/benefits/BenefitBgIcon";
import { BenefitBgIcon2 } from "@/components/svgs/benefits/BenefitBgIcon2";

type BenefitCardOrganismProps = {
  id: number;
  title: string;
  description: string;
  src: JSX.Element;
};

export const BenefitCardOrganism = (props: BenefitCardOrganismProps) => {
  const { id, title, description, src } = props;
  const isEven = id % 2 === 0;

  return (
    <BenefitCardWrapper>
      <BenefitCardIcon>
        {isEven ? <BenefitBgIcon /> : <BenefitBgIcon2 />}
      </BenefitCardIcon>
      <BenefitCardTitle>{title}</BenefitCardTitle>
      <BenefitCardDescription>{description}</BenefitCardDescription>
    </BenefitCardWrapper>
  );
};
