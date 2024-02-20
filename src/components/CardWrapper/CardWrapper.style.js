import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    overflow-x: hidden;
    grid-gap: 10px;
    scroll-snap-type: x mandatory;

    @media screen and (min-width: 1025px) {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 20px;
    }
`;

export const CardWrapperContainer = styled.div`
    display: grid;

    @media screen and (min-width: 1025px) {
        .slider {
            display: none;
        }
    }
`;