import React from "react";
import styled from "styled-components";
import { greenBoxShadow, lightBlueBackground, redBoxShadow, subtleBoxShadow,  } from "./Style";

export const Tile = styled.div`
${subtleBoxShadow}
${lightBlueBackground}
padding: 10px;
`

export const SelectableTile = styled(Tile)`
&:hover{
    cursor: pointer;
    ${greenBoxShadow}
}
`