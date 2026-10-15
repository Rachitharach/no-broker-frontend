
import React, { useState } from "react";
import "./Navbar.css";
import { Menu, CreditCard, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
    const [commercialOpen, setCommercialOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link to="/" className="logo">
                <div className="logo-icon"><img src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg">
                </img></div>
                {/* <span>
                    NO<span>BROKER</span>
                </span> */}
            </Link>

            {/* Right side */}
            <div className="nav-right">


                {/* Pay Tuition Fee */}
                <Link to="/pay-tuition-fee" className="tuition-btn" target="_blank">
                    <CreditCard size={16} />
                    <span className="divider"></span>
                    <span>Pay Tuition Fee</span>
                </Link>

                <Link to="/post-property" className="post-btn">
                   For Property Owners
                </Link>

                <Link to="/login" className="divider"> Sign up</Link>

                <span className="divide"></span>

                <Link to="/login">Log in</Link>

                <span className="divide"></span>

                {/* Menu button */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    <span>Menu</span>
                </button>

            </div>

           
        {/* Menu panel */}
        {menuOpen && (
            <>
        <div
            className="menu-backdrop"
            onClick={() => setMenuOpen(false)}
        ></div>

        <div className="menu-dropdown">
            <div className="menu-items">

                <Link to="/post-property" onClick={() => setMenuOpen(false)}>
                    Post Your Property
                </Link>

                <Link to="/rental-agreement" onClick={() => setMenuOpen(false)}>
                    Rental Agreement
                </Link>

                <Link to="/painting-cleaning" onClick={() => setMenuOpen(false)}>
                    Painting &amp; Cleaning
                </Link>

                <Link to="/packers-and-movers" onClick={() => setMenuOpen(false)}>
                    Packers and Movers
                </Link>

                <Link to="/refer-and-earn" onClick={() => setMenuOpen(false)}>
                    Refer &amp; Earn
                </Link>

                <Link to="/rent-receipts" onClick={() => setMenuOpen(false)}>
                    Rent Receipts
                </Link>

                {/* Commercial Plans */}
                <div className="menu-expandable">
                    <button
                        onClick={() => setCommercialOpen(!commercialOpen)}
                    >
                        <span>Commercial Plans</span>

                        <ChevronDown
                            size={17}
                            className={commercialOpen ? "rotate-arrow" : ""}
                        />
                    </button>

                    {commercialOpen && (
                        <div className="submenu">
                            <Link to="/tenant-plans" onClick={() => setMenuOpen(false)}>
                                Tenant Plans
                            </Link>

                            <Link to="/owner-plans" target="_blank"  onClick={() => setMenuOpen(false)}>
                                Owner Plans
                            </Link>

                            <Link to="/buyer-plans" target="_blank" onClick={() => setMenuOpen(false)}>
                                Buyer Plans
                            </Link>

                            <Link to="/seller-plans" onClick={() => setMenuOpen(false)}>
                                Seller Plans
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/careers" onClick={() => setMenuOpen(false)}>
                    Careers
                </Link>

                <Link to="/corporate-enquiry" onClick={() => setMenuOpen(false)}>
                    Corporate Enquiry
                </Link>

                <Link to="/blog" onClick={() => setMenuOpen(false)}>
                    Blog
                </Link>

                <Link to="/support" onClick={() => setMenuOpen(false)}>
                    NoBroker Support
                </Link>

                {/* Contact Us */}
                <div className="menu-expandable">
                    <button
                        onClick={() => setContactOpen(!contactOpen)}
                    >
                        <span>Contact Us</span>

                        <ChevronDown
                            size={17}
                            className={contactOpen ? "rotate-arrow" : ""}
                        />
                    </button>

                    {contactOpen && (
                        <div className="contact-details">
                            <p>Email</p>

                            <a href="mailto:assist@nobroker.in?Subject=Hello">
                                assist@nobroker.in
                            </a>

                            <div className="social-links">

                                <a
                                    href="https://www.facebook.com/nobrokercom/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="facebook"
                                    aria-label="Facebook"
                                >
                                    f
                                </a>

                                <a
                                    href="https://x.com/nobrokercom"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="twitter"
                                    aria-label="Twitter"
                                >
                                    𝕏
                                </a>

                                <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="google"
                                    aria-label="Google"
                                >
                                    G
                                </a>

                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    </>
)}


        </nav>
    );
}

export default Navbar;
