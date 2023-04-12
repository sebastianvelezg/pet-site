import {IconT} from "@/types/icon.type";

export type partnerT = {
    id: number;
    url: string;
    // src: (props: IconT) => JSX.Element | string;
    src: (props: IconT) => JSX.Element;
};