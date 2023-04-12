import {
    TeamSectionTitle,
    TeamSpan,
    TeamWrapper,
} from "./Team.styled";

export const TeamSection = () => {

    const title = "NUESTRO";
    const titleSpan = "EQUIPO"

    return (
        <TeamWrapper>
            <TeamSectionTitle>
                {title} <TeamSpan>{titleSpan}</TeamSpan>
            </TeamSectionTitle>
        </TeamWrapper>
    );
};
