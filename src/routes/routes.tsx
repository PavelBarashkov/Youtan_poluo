import React from "react";
import { Main } from "../pages/Main";
import { MAIN_ROUTE, STORE_ROUTE} from "./consts";
import { Store } from "../pages/Store";

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
        path: STORE_ROUTE,
        element: <Store/>
    },
    {
        path: '/*',
        element: <Main/>
    }
]
