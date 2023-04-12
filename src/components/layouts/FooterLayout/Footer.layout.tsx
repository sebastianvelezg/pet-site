import { IconBgMolecule } from "@/components/molecules/IconBgMolecule/IconBg.molecule";
import { HasriskLogo } from "@/components/svgs/Hasrisk-logo";

import { FooterSocials } from "./FooterSocials/FooterSocials.layout";
import {
  FooterLayoutWrapper,
  FooterLinkColumn,
  FooterLinkNames,
  FooterLinkTitle,
  FooterLinks,
  FooterText,
} from "./Footer.styled";
import { footersData } from "@/data/footer.data";

export const FooterLayout = () => {
  return (
    <FooterLayoutWrapper>
      <IconBgMolecule
        srcSVG={<HasriskLogo color="#FFFFFF" className="IconSVG" />}
        size="10rem"
      />

      <FooterSocials />
      <FooterLinks>
        {footersData.map((benefit, index) => (
          <FooterLinkColumn key={index}>
            <FooterLinkTitle>{benefit.title}</FooterLinkTitle>
            {benefit.links.map((links) => (
              <FooterLinkNames key={links.id}>{links.title}</FooterLinkNames>
            ))}
          </FooterLinkColumn>
        ))}
      </FooterLinks>
      <FooterText>Medellin, Antioquia, Colombia</FooterText>
      <FooterText>©2022 hashrisk.co</FooterText>
    </FooterLayoutWrapper>
  );
};
