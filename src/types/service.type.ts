import Image, {ImageProps, StaticImageData} from "next/image";

export type ServiceT = {
    id: number;
    title: string;
    url: string;
    src: string | typeof Image | StaticImageData | ImageProps;
    // src: string;
};