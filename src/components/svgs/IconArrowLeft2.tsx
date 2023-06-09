import {IconT} from "@/types/icon.type";

export const IconArrowLeft2 = (props: IconT) => {
    const {color = "white", size = "40", className} = props;

    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24.9999 34.4495C24.6833 34.4495 24.3666 34.3329 24.1166 34.0829L13.2499 23.2162C12.4011 22.3608 11.9248 21.2046 11.9248 19.9995C11.9248 18.7945 12.4011 17.6383 13.2499 16.7829L24.1166 5.91621C24.5999 5.43288 25.3999 5.43288 25.8833 5.91621C26.3666 6.39954 26.3666 7.19954 25.8833 7.68288L15.0166 18.5495C14.2166 19.3495 14.2166 20.6495 15.0166 21.4495L25.8833 32.3162C26.3666 32.7995 26.3666 33.5995 25.8833 34.0829C25.6333 34.3162 25.3166 34.4495 24.9999 34.4495Z"
                fill={color}
            />
        </svg>

    );
};
