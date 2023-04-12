import { IconBgMolecule } from "@/components/molecules/IconBgMolecule/IconBg.molecule";
import { IconLinkedIn } from "@/components/svgs/footer/IconLinkedin";
import { FooterSocialsWrapper } from "./FooterSocials.styled";
import { IconTwitter } from "@/components/svgs/twitter";
import { IconYoutube } from "@/components/svgs/footer/IconYoutube";
import { IconInstagram } from "@/components/svgs/instagram";
import { IconFacebook } from "@/components/svgs/footer/IconFacebook";

export const FooterSocials = () => {
  return (
    <FooterSocialsWrapper>
      <IconBgMolecule
        srcSVG={<IconLinkedIn color="#FFFFFF" className="IconSVG" />}
        size="4.5rem"
        bgColor="transparent"
        hoverBgColor="#FFFFFF"
        hoverColor="transparent"
      />
      <IconBgMolecule
        srcSVG={<IconTwitter color="#FFFFFF" className="IconSVG" />}
        size="4.5rem"
        bgColor="transparent"
        hoverBgColor="#FFFFFF"
        hoverColor="transparent"
      />
      <IconBgMolecule
        srcSVG={<IconYoutube color="#FFFFFF" className="IconSVG" />}
        size="4.5rem"
        bgColor="transparent"
        isHover={true}
        hoverBgColor="#FFFFFF"
        hoverColor="transparent"
      />
      <IconBgMolecule
        srcSVG={<IconInstagram color="#FFFFFF" className="IconSVG" />}
        size="4rem"
        bgColor="transparent"
        hoverBgColor="#FFFFFF"
        hoverColor="transparent"
      />
      <IconBgMolecule
        srcSVG={<IconFacebook color="#FFFFFF" className="IconSVG" />}
        size="4.5rem"
        bgColor="transparent"
        hoverBgColor="#FFFFFF"
        hoverColor="transparent"
      />
    </FooterSocialsWrapper>
  );
};
