import {Button} from "./Button.styled";

interface ButtonAtomProps {
    background?: string;
    backgroundColor?: string;
    border?: string;
    borderColor?: string;
    borderRadius?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    gradientColorPrimary?: string;
    gradientColorSecondary?: string;
    height?: string;
    hoverBackground?: string;
    hoverBackgroundColor?: string;
    hoverBorder?: string;
    hoverBorderColor?: string;
    hoverColor?: string;
    text: string;
    width?: string;
    classProp?: string;
    alignSelf?: string;
    justifySelf?: string;
    padding?: string;
}

const ButtonAtom = (props: ButtonAtomProps) => {
    let backgroundGradient = `
    linear-gradient(
      180deg,
      ${props.gradientColorPrimary} 0%,
      ${props.gradientColorSecondary} 81.77%
    );
  `;

    const {
        background = backgroundGradient,
        backgroundColor = 'transparent',
        border = "0",
        borderColor = 'transparent',
        borderRadius = "5rem",
        color = '',
        fontSize = '',
        fontWeight = '',
        gradientColorPrimary = '',
        gradientColorSecondary = '',
        height = "4.5rem",
        hoverBackground = '',
        hoverBackgroundColor = '',
        hoverBorder = "0",
        hoverBorderColor = 'transparent',
        hoverColor = '',
        text = '',
        width = 'fit-content',
        classProp = '',
        alignSelf = '',
        justifySelf = '',
        padding = '0 2.2rem 0 2.2rem'
    } = props;
    return (
        <Button
            background={background}
            backgroundColor={backgroundColor}
            border={border}
            borderColor={borderColor}
            borderRadius={borderRadius}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            gradientColorPrimary={gradientColorPrimary}
            gradientColorSecondary={gradientColorSecondary}
            height={height}
            hoverBackground={hoverBackground}
            hoverBackgroundColor={hoverBackgroundColor}
            hoverBorder={hoverBorder}
            hoverBorderColor={hoverBorderColor}
            hoverColor={hoverColor}
            width={width}
            className={`${classProp}`}
            alignSelf={alignSelf}
            justifySelf={justifySelf}
            padding={padding}
        >
            {text}
        </Button>
    );
};

export default ButtonAtom;
