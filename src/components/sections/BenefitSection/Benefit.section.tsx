import { BenefitCardOrganism } from "@/components/organisms/BenefitCardOrganism/BenefitCard.organism";
import {
  BenefitCardsWrapper,
  BenefitTitle,
  BenefitTitleContainer,
  BenefitWrapper,
} from "./Benefit.styled";
import { IconBgMolecule } from "@/components/molecules/IconBgMolecule/IconBg.molecule";
import { ArchiveTickIcon } from "@/components/svgs/benefits/ArchiveTickIcon";
import { benefitsData } from "@/data/benefits.data";
import { benefitT } from "@/types/benefit.type";

type BenefitSectionT = {
  BenefitData: any[];
};

export const BenefitSection = (props: BenefitSectionT) => {
  const {} = props;
  return (
    <BenefitWrapper>
      <BenefitTitleContainer>
        <ArchiveTickIcon color="#325F71" />
        <BenefitTitle>BENEFICIOS</BenefitTitle>
      </BenefitTitleContainer>
      <BenefitCardsWrapper>
        {benefitsData.map((benefit, index) => (
          <BenefitCardOrganism
            key={index}
            id={index}
            title={benefit.title}
            description={benefit.description}
            src={<benefit.src />}
          />
        ))}
      </BenefitCardsWrapper>
    </BenefitWrapper>
  );
};
