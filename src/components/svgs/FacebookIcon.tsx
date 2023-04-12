import {IconT} from "@/types/icon.type";


export const FacebookIcon = (props: IconT) => {
    const {color = "white", size = "16", className='ButtonIconSVG'} = props;

    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.7231 9L12.1675 6.10437H9.38908V4.22531C9.38908 3.43313 9.77721 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1385 0 10.0425 0C7.75439 0 6.25877 1.38688 6.25877 3.8975V6.10437H3.71533V9H6.25877V16H9.38908V9H11.7231Z"
                fill={color}
            />
        </svg>
    );
};
