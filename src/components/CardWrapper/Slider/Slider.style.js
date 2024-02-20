import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
`;

export const Dots = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;

    ${({ $active }) =>
        $active ? css`background-color: gray;`
            : css`background-color: #000000;`
    }
`;