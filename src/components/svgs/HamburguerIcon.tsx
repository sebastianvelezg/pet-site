import {IconT} from "@/types/icon.type";


export const HamburgerIcon = (props: IconT) => {
    const {color = "white", size = "40", className} = props;

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
                d="M14 5.16699H2C1.72667 5.16699 1.5 4.94033 1.5 4.66699C1.5 4.39366 1.72667 4.16699 2 4.16699H14C14.2733 4.16699 14.5 4.39366 14.5 4.66699C14.5 4.94033 14.2733 5.16699 14 5.16699ZM14 8.50033H2C1.72667 8.50033 1.5 8.27366 1.5 8.00033C1.5 7.72699 1.72667 7.50033 2 7.50033H14C14.2733 7.50033 14.5 7.72699 14.5 8.00033C14.5 8.27366 14.2733 8.50033 14 8.50033ZM14 11.8337H2C1.72667 11.8337 1.5 11.607 1.5 11.3337C1.5 11.0603 1.72667 10.8337 2 10.8337H14C14.2733 10.8337 14.5 11.0603 14.5 11.3337C14.5 11.607 14.2733 11.8337 14 11.8337Z"
                fill={color}
            />
        </svg>
    );
};
