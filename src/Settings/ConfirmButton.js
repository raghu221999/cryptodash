import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { color3, fontSize1, greenBoxShadow, } from "../Shared/Style";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3}
    ${fontSize1}
    padding: 5px;
    cursor: pointer;
    &:hover {
        ${greenBoxShadow}
    }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function (){
    return (
        <AppContext.Consumer>
            {({confirmFavorites})=> 
            <CenterDiv>
            <ConfirmButtonStyled onClick={confirmFavorites}>
                Confirm Favorties
            </ConfirmButtonStyled>
                </CenterDiv>
            }
        </AppContext.Consumer>
        )
}