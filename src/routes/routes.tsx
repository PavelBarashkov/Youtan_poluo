import React from "react";
import { Main } from "../pages/Main";
import { BASKET_ROUTE, MAIN_ROUTE, STORE_ROUTE} from "./consts";
import { Store } from "../pages/Store";
import { Basket } from "../pages/Basket";

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
        path: BASKET_ROUTE,
        element: <Basket/>
    },
    {
        path: '/*',
        element: <Main/>
    }
]
