import React from "react";
import * as C from './style';

export default function Title({children}) {
    return(
        <C.Container>
            <h1>{children}</h1>
        </C.Container>
    )
}