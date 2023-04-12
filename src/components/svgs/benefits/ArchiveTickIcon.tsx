import { IconT } from "@/types/icon.type";

export const ArchiveTickIcon = (props: IconT) => {
  const { color = "white", size = "16", className } = props;

  return (
    <svg
      className={className}
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.6625 28.4375C6.1375 28.4375 5.65 28.3125 5.2125 28.0625C4.25 27.5 3.7 26.3625 3.7 24.95V7.325C3.7 4.15 6.2875 1.5625 9.4625 1.5625H21.525C24.7 1.5625 27.2875 4.15 27.2875 7.325V24.9375C27.2875 26.35 26.7375 27.4875 25.775 28.05C24.8125 28.6125 23.55 28.55 22.3125 27.8625L16.2125 24.475C15.85 24.275 15.1375 24.275 14.775 24.475L8.675 27.8625C8 28.2375 7.3125 28.4375 6.6625 28.4375ZM9.475 3.4375C8.44498 3.4408 7.4581 3.85143 6.72976 4.57976C6.00143 5.3081 5.59079 6.29498 5.5875 7.325V24.9375C5.5875 25.675 5.8 26.225 6.175 26.4375C6.55 26.65 7.1375 26.5875 7.775 26.225L13.875 22.8375C14.8 22.325 16.2 22.325 17.125 22.8375L23.225 26.225C23.8625 26.5875 24.45 26.6625 24.825 26.4375C25.2 26.2125 25.4125 25.6625 25.4125 24.9375V7.325C25.4125 5.1875 23.6625 3.4375 21.525 3.4375H9.475Z"
        fill={color}
      />
      <path
        d="M14.3625 16.5638C14.125 16.5638 13.8875 16.4763 13.7 16.2888L11.825 14.4138C11.6506 14.2373 11.5529 13.9993 11.5529 13.7513C11.5529 13.5032 11.6506 13.2652 11.825 13.0888C12.1875 12.7263 12.7875 12.7263 13.15 13.0888L14.3625 14.3013L18.7 9.96377C19.0625 9.60127 19.6625 9.60127 20.025 9.96377C20.3875 10.3263 20.3875 10.9263 20.025 11.2888L15.025 16.2888C14.8375 16.4763 14.6 16.5638 14.3625 16.5638Z"
        fill={color}
      />
    </svg>
  );
};
