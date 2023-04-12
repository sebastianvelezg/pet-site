import { BenefitBgIcon } from "@/components/svgs/benefits/BenefitBgIcon";
import { BenefitBgIcon2 } from "@/components/svgs/benefits/BenefitBgIcon2";
import { benefitT } from "@/types/benefit.type";

export const benefitsData: benefitT[] = [
  {
    id: 1,
    url: "/",
    title: "Mayor seguridad",
    description:
      "Al contar con un servicio de cumplimiento especializado en wallets de blockchain, se puede garantizar una mayor seguridad en las transacciones y la protección de las criptomonedas.",
    src: BenefitBgIcon,
  },
  {
    id: 2,
    url: "#",
    title: "Reducción de riesgos",
    description:
      "Al contar con un servicio de cumplimiento especializado en wallets de blockchain, se puede garantizar una mayor seguridad en las transacciones y la protección de las criptomonedas.",
    src: BenefitBgIcon2,
  },
  {
    id: 3,
    url: "#",
    title: "Monitoreo constante",
    description:
      "Al contar con un servicio de cumplimiento especializado en wallets de blockchain, se puede garantizar una mayor seguridad en las transacciones y la protección de las criptomonedas.",
    src: BenefitBgIcon,
  },
];
