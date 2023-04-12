import { IconT } from "@/types/icon.type";

export const BenefitBgIcon = (props: IconT) => {
  const { color = "white", size = "100", className } = props;

  return (
    <svg
      className={className}
      width={100}
      height={101}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M92.97 26.26C92.97 25.91 92.78 25.59 92.48 25.41L50.49 1.13C50.34 1.04 50.17 1 50 1C49.83 1 49.66 1.04 49.51 1.13L7.52 25.41C7.22 25.58 7.03 25.91 7.03 26.26V74.78C7.03 75.13 7.21 75.45 7.52 75.63L49.51 99.87C49.66 99.96 49.83 100 50 100C50.17 100 50.34 99.96 50.49 99.87L92.48 75.63C92.78 75.46 92.97 75.13 92.97 74.78V26.26Z"
        fill="url(#paint0_linear_8_237)"
      />
      <path
        d="M50 68.9167C49.6 68.9167 49.2 68.8667 48.8167 68.75C40.1667 66.3667 33.9 58.2833 33.9 49.5167V42.2C33.9 40.3333 35.25 38.3167 36.9833 37.6L46.2667 33.8C48.6584 32.8165 51.3416 32.8165 53.7333 33.8L63.0167 37.6C64.75 38.3167 66.1 40.3333 66.1 42.2V49.5167C66.1 58.2667 59.8167 66.35 51.1833 68.75C50.8 68.8667 50.4 68.9167 50 68.9167ZM50 35.5833C49.0453 35.5837 48.0998 35.7706 47.2167 36.1333L37.9333 39.9333C37.1333 40.2667 36.4 41.35 36.4 42.2167V49.5333C36.4 57.1833 41.9 64.25 49.4833 66.35C49.8167 66.45 50.1833 66.45 50.5167 66.35C58.1 64.25 63.6 57.1833 63.6 49.5333V42.2167C63.6 41.35 62.8667 40.2667 62.0667 39.9333L52.7833 36.1333C51.9002 35.7706 50.9547 35.5837 50 35.5833Z"
        fill="white"
      />
      <path
        d="M50 53.0834C47.4667 53.0834 45.4167 51.0334 45.4167 48.5C45.4167 45.9667 47.4667 43.9167 50 43.9167C52.5333 43.9167 54.5833 45.9667 54.5833 48.5C54.5833 51.0334 52.5333 53.0834 50 53.0834ZM50 46.4167C49.4475 46.4167 48.9176 46.6362 48.5269 47.0269C48.1362 47.4176 47.9167 47.9475 47.9167 48.5C47.9167 49.0526 48.1362 49.5825 48.5269 49.9732C48.9176 50.3639 49.4475 50.5834 50 50.5834C50.5525 50.5834 51.0824 50.3639 51.4731 49.9732C51.8638 49.5825 52.0833 49.0526 52.0833 48.5C52.0833 47.9475 51.8638 47.4176 51.4731 47.0269C51.0824 46.6362 50.5525 46.4167 50 46.4167Z"
        fill="white"
      />
      <path
        d="M50 58.0833C49.3167 58.0833 48.75 57.5166 48.75 56.8333V51.8333C48.75 51.15 49.3167 50.5833 50 50.5833C50.6833 50.5833 51.25 51.15 51.25 51.8333V56.8333C51.25 57.5166 50.6833 58.0833 50 58.0833Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8_237"
          x1="50"
          y1="1"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F6A3B2" />
          <stop offset="1" stop-color="#884451" />
        </linearGradient>
      </defs>
    </svg>
  );
};