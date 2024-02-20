import React, { useContext } from "react";
import { Container, Dots } from "./Slider.style";
import { CardContext } from "context/card";

export default function Slider() {
    const cardContext = useContext(CardContext);

    const { active, setActive, cardsNumber } = cardContext;


    const changeSlider = (index) => {
        setActive(index)
    }

    const generateDots = () => {
        const dots = [];
        for (let index = 0; index < cardsNumber; index++) {
            dots.push(<Dots key={index} onClick={() => changeSlider(index)} $active={active === index} />)
        }
        return dots;
    }

    return (
        <Container className="slider">
            {generateDots()}
        </Container>
    )
}