import React from "react";
import "./Navbar.css";
import { Menu, CreditCard } from "lucide-react";

function Navbar() {
    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="logo">
                <div className="logo-icon">⌘</div>

                <span>
                    NO<span>BROKER</span>
                </span>
            </div>


            {/* Right side */}
            <div className="nav-right">

                {/* Pay Tuition */}
                <button className="tuition-btn">
                    <CreditCard size={16} />
                    <span className="divider"></span>
                    <span>Pay Tuition Fee</span>
                </button>


                {/* Post Property */}
                <button className="post-btn">
                    Post Your Property
                </button>


                {/* Sign up */}
                <a href="#">Sign up</a>

                <span className="divider"></span>


                {/* Log in */}
                <a href="#">Log in</a>

                <span className="divider"></span>


                {/* Menu */}
                <button className="menu-btn">
                    <Menu size={18} />
                    <span>Menu</span>
                </button>

            </div>

        </nav>
    );
}

export default Navbar;