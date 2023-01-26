import React from "react"
import styled, { css } from "styled-components"
import { AppContext } from "./AppProvider"

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    margin-buttom: 40px;
    grid-template-columns:  auto 100px 100px;
`
//Code for cursor
const ControlButtonElem = styled.div`
    cursor:pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 60px #03ff03;
    `}
`
//Code for upper and lower case
function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name}) {
    return (
        <AppContext.Consumer>
            {({ page }) =>(
                <ControlButtonElem active={page === name}>
                    {toProperCase(name)}
                </ControlButtonElem>)}
        </AppContext.Consumer>
    )
}

export default function () {
    return (<Bar>
        <Logo><ControlButton active name="alma-Crypto" /></Logo>
        <ControlButton active name="dashboard" />
        <ControlButton active name="settings" />

    </Bar>)
}