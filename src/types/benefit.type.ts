import { IconT } from "@/types/icon.type";

export type benefitT = {
  id: number;
  url: string;
  title: string;
  description: string;
  //   src: string | ((props: IconT) => JSX.Element | string);
  src: (props: IconT) => JSX.Element;
};
