import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinTile from "./CoinTile";



export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px:
`
function getCoinsToDisplay(coinList, topSection){
    return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}


export default function ({topSection}){
    return <AppContext.Consumer>
        {({coinList}) => <CoinGridStyled>
            {getCoinsToDisplay(coinList, topSection).map(coinKey => 
                <CoinTile topSection={topSection} coinKey={coinKey}/>)}
            </CoinGridStyled>}
    </AppContext.Consumer>
}