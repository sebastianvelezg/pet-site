import { IconT } from "@/types/icon.type";

export const IconFacebook = (props: IconT) => {
  const { color = "white", size = "40", className = "" } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6539 25.25L29.2094 21.6305H25.7363V19.2816C25.7363 18.2914 26.2215 17.3262 27.777 17.3262H29.3559V14.2445C29.3559 14.2445 27.923 14 26.5531 14C23.693 14 21.8234 15.7336 21.8234 18.8719V21.6305H18.6441V25.25H21.8234V34H25.7363V25.25H28.6539Z"
        fill={color}
      />
    </svg>
  );
};
