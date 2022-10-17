import React, { useDebugValue } from "react";
import {Area} from './style';

export default function Container({children}) {
    return(
        <Area>
            {children}
        </Area>
    )
}