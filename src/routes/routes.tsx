import React from "react";
import { Main } from "../pages/Main";
import { MAIN_ROUTE} from "./consts";

interface Path {
    path: string
    element: React.ReactNode,
}

export const publicRoutes: Path[] = [
    {
        path: MAIN_ROUTE,
        element: <Main/>
    },
    {
        path: '/*',
        element: <Main/>
    }
]
