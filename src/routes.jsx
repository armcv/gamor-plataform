import React from 'react';
import { Home, Profile, Tables, Notifications, Maps } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

export const routes = [
    {
        layout: "app",
        pages: [
            {
                name: "home",
                path: "/home",
                element: <Home />,
            },
            {
                name: "streams",
                path: "/streams",
                element: <Profile />,
            },
            {
                name: "tables",
                path: "/tables",
                element: <Tables />,
            },
            {
                name: "party",
                path: "/Party",
                element: <Notifications />,
            },
            {
                name: "premium",
                path: "/maps",
                element: <Maps />,
            },
        ],
    },
    {
        title: "auth pages",
        layout: "auth",
        pages: [
            {
                name: "sign in",
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                name: "sign up",
                path: "/sign-up",
                element: <SignUp />,
            },
        ],
    },
];

export default routes;
