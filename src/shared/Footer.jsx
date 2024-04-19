// import React from 'react';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-teal-600 pt-20">
            <div className="container mx-auto flex justify-between">
                <div className="w-[30%]"> <h2>Links</h2>
                 <ul>
                    <li> <Link to="#">Home</Link></li>
                    <li> <Link to="#">Home</Link></li>
                    <li> <Link to="#">Home</Link></li>
                    <li> <Link to="#">Home</Link></li>
                 </ul>
                </div>
                <div className="w-[30%]"><h2>Links</h2>
                 <ul>
                    <li> <Link to="#">About</Link></li>
                    <li> <Link to="#">About</Link></li>
                    <li> <Link to="#">About</Link></li>
                    <li> <Link to="#">About</Link></li>
                 </ul>
                </div>
                <div className="w-[30%]"><h2>Links</h2>
                 <ul>
                    <li> <Link to="#">Our Service</Link></li>
                    <li> <Link to="#">Our Service</Link></li>
                    <li> <Link to="#">Our Service</Link></li>
                    <li> <Link to="#">Our Service</Link></li>
                 </ul>
                </div>
            </div>
            <div className="bg-neutral-800 text-white text-center py-3">
                <p>© [Current Year] ApexX. All rights reserved. Unauthorized use or reproduction of any content, logo, or design.</p>
            </div>
        </footer>
    );
};

export default Footer;