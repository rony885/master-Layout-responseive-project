// import React from 'react';

import { Link } from "react-router-dom";

const PageLocation = ({preb, next}) => {

    let nextUrl = next
    if(nextUrl.includes('/')){
        nextUrl = nextUrl.replace('/', '');
    }

    return (
        <div className="bg-cyan-800 py-2 flex justify-center">
            <div className="flex gap-3 text-white font-bold"> 
                <Link to={preb}> {preb=="/"&& "home"} </Link>
                <Link to={next}> {nextUrl} </Link>
            </div>
        </div>
    );
};

export default PageLocation;