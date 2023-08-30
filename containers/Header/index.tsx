import React from 'react';
import Link from "next/link";
import {navMenus} from "@/constant";

const Header: React.FC = ({ }) => {
    const linkStyle = "mx-3 hover:text-white";

    return (
        <nav className="flex justify-between p-6 items-center bg-slate-900 fixed w-full">
                <div className="font-extrabold text-2xl">David Do.</div>
                <div className="font-bold text-lg text-slate-400">
                    <ul className="flex">
                        {
                            navMenus.map((menu) => (
                                <Link href="/" className={linkStyle}>{menu}</Link>
                            ))
                        }
                    </ul>
                </div>
        </nav>
    );
}

export default Header;