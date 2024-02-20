import React, { useEffect, useRef, useState } from "react";
import { Wrapper, CardWrapperContainer } from "./CardWrapper.style";
import Slider from "./Slider/Slider";
import { CardContext } from "context/card";


export default function CardWrapper({ children }) {
    const [active, setActive] = useState(0);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const cards = wrapperRef.current?.children;
        cards[active].scrollIntoView();
    }, [active])

    return (
        <CardContext.Provider value={{ active, setActive, cardsNumber: children.length }}>
            <CardWrapperContainer className="card-wrapper">
                <Wrapper ref={wrapperRef}>
                    {children}
                </Wrapper>
                <Slider childrenLength={children.length} />
            </CardWrapperContainer>
        </CardContext.Provider>
    )
}