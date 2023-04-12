import Image, {ImageProps, StaticImageData} from "next/image";


export type userT = {
    imgSrc: string | typeof Image | StaticImageData | ImageProps;
    name: string;
    description: string;
    linkedIn: string;
    jobTittle: string;
    email: string;
};