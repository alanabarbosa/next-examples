'use client';

import { revalidatePathAction } from "@/actions/revalidate-path";
import React from "react";

export default function Update() {
    const handleClick = () => {
        revalidatePathAction('/actions');
    }

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            revalidatePathAction('/actions');
        }, 5000);
        return () => {
            clearInterval(intervalId);
        }
    }, []) 

    return (
        <>
            <button onClick={handleClick}>Update</button>
        </>
    )
}