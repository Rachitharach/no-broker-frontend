
import React from "react";
import { Link, useParams } from "react-router-dom";

import termsText from "./terms-and-conditions.txt?raw";
import privacyText from "./privacy-policy.txt?raw";

import "./InfoPage.css";

// Sidebar links for regular information pages
const sidebarItems = [
    { title: "About Us", slug: "about-us" },
    { title: "Additional Services", slug: "additional-services" },
    { title: "Owners", slug: "owners" },
    { title: "Listing Using Whatsapp", slug: "listing-whatsapp" },
    { title: "Tenants", slug: "tenants" },
    { title: "Team", slug: "team" },
    { title: "FAQ", slug: "faqs" },
    { title: "Our Blog", slug: "blog" },
    { title: "Contact Us", slug: "contact-us" },
];

// Titles for all information pages
const pageTitles = {
    "about-us": "About Us",
    "additional-services": "Additional Services",
    owners: "Owners",
    "listing-whatsapp": "Listing Using Whatsapp",
    tenants: "Tenants",
    team: "Team",
    faqs: "FAQ",
    blog: "Our Blog",
    "contact-us": "Contact Us",
    terms: "Terms & Conditions",
    "privacy-policy": "Privacy Policy",
};

// Terms & Conditions content from the text file
function TermsAndConditions() {
    return (
        <div className="terms-text">
            {termsText}
        </div>
    );
}

// Privacy Policy content from the text file
function PrivacyPolicy() {
    return (
        <div className="terms-text">
            {privacyText}
        </div>
    );
}

// Content for regular information pages
function PageContent({ slug }) {
    switch (slug) {
        case "about-us":
            return (
                <>
                    <p>Welcome to NoBroker!</p>

                    <p>
                        NoBroker is a disruptive real-estate platform that
                        makes it possible to buy, sell, or rent a house
                        without paying any brokerage.
                    </p>

                    <p>
                        NoBroker was started because we believed that paying
                        hefty brokerage cannot be the only option to find a
                        new home. As tenants, we have been paying these
                        brokerages year after year without seeing any
                        advantage from the broker.
                    </p>

                    <p>
                        NoBroker removes information asymmetry and provides
                        a marketplace for the free exchange of property
                        information that used to cost one or two months
                        of rent as brokerage.
                    </p>

                    <p>
                        We have done two things to help you find that
                        perfect home:
                    </p>

                    <ul>
                        <li>
                            Firstly, we have verified listings and made sure
                            that they are from direct owners or shared
                            accommodation parties, without middlemen or brokers.
                        </li>

                        <li>
                            Secondly, we provide maximum information in an
                            easy-to-use format. You can shortlist properties
                            from the comfort of your home before visiting them.
                            This saves your time and effort.
                        </li>
                    </ul>

                    <p>
                        If you are a landlord interested in posting your
                        apartment, email us at{" "}
                        <a href="mailto:assist@nobroker.in">
                            assist@nobroker.in
                        </a>{" "}
                        and we will help you list your property.
                    </p>

                    <p>
                        And tenants, happy hunting! Get in touch with us
                        to let us know how else we can help.
                    </p>
                </>
            );

        case "additional-services":
            return (
                <>
                    <p>
                        Explore additional services that can help make
                        buying, selling, renting, and maintaining a
                        property easier.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.nobroker.in/legal-services">
                                Property Legal Services
                            </a>
                        </li>
                        <li>
                            <a href="https://www.nobroker.in/interiors/">
                                Home Interiors
                            </a>
                        </li>
                        <li>
                            <a href="https://www.nobroker.in/rental-agreement">
                                Rental Agreement
                            </a>
                        </li>
                        <li>
                            <a href="https://www.nobroker.in/home-loan/">
                                Home Loans
                            </a>
                        </li>
                        <li>
                            <a href="https://www.nobroker.in/home-services">
                                Home Services
                            </a>
                        </li>
                    </ul>
                </>
            );

        case "owners":
            return (
                <>
                    <p>
                        Are you a property owner? List your property and
                        connect directly with potential tenants or buyers.
                    </p>

                    <p>
                        NoBroker helps owners list properties without
                        traditional brokerage.
                    </p>

                    <p>
                        <a href="https://www.nobroker.in/list-your-property-for-rent-sale">
                            List Your Property
                        </a>
                    </p>
                </>
            );

        case "listing-whatsapp":
            return (
                <>
                    <p>
                        NoBroker provides property listing options to help
                        owners reach people looking for homes.
                    </p>

                    <p>
                        Prepare your property details and photos before
                        creating a listing.
                    </p>

                    <a href="https://www.nobroker.in/list-your-property-for-rent-sale">
                        Start Listing Your Property
                    </a>
                </>
            );

        case "tenants":
            return (
                <>
                    <p>
                        Looking for a home? Explore properties that match
                        your budget, location, and requirements.
                    </p>

                    <ul>
                        <li>Search properties by location.</li>
                        <li>Compare rent and property details.</li>
                        <li>Shortlist properties before visiting.</li>
                    </ul>

                    <a href="https://www.nobroker.in/">
                        Find a Property
                    </a>
                </>
            );

        case "team":
            return (
                <>
                    <p>
                        NoBroker works to simplify real-estate transactions
                        and help people find homes without traditional
                        brokerage.
                    </p>

                    <p>
                        Our platform brings property owners and people
                        looking for homes together.
                    </p>
                </>
            );

        case "faqs":
            return (
                <>
                    <h3>What is NoBroker?</h3>

                    <p>
                        NoBroker is a real-estate platform that connects
                        property owners and people looking for properties.
                    </p>

                    <h3>Can I list my property?</h3>

                    <p>
                        Yes. Owners can use the property listing service
                        to post their properties.
                    </p>

                    <h3>Can I search for rental properties?</h3>

                    <p>
                        Yes. You can search for rental properties based
                        on your requirements.
                    </p>

                    <a href="https://www.nobroker.in/">
                        Visit NoBroker
                    </a>
                </>
            );

        case "blog":
            return (
                <>
                    <p>
                        Explore articles and guides about real estate,
                        home loans, renting, property buying, and
                        home improvement.
                    </p>

                    <a href="https://www.nobroker.in/blog/">
                        Visit NoBroker Blog
                    </a>
                </>
            );

        case "contact-us":
            return (
                <>
                    <p>
                        Have a question or need assistance? Get in touch
                        with us.
                    </p>

                    <p>
                        Email:{" "}
                        <a href="mailto:assist@nobroker.in">
                            assist@nobroker.in
                        </a>
                    </p>
                </>
            );

        default:
            return <p>Page not found.</p>;
    }
}

function InfoPage() {
    const { slug } = useParams();
    const title = pageTitles[slug];

    // Handle invalid routes
    if (!title) {
        return (
            <div className="info-not-found">
                <h2>Page not found</h2>
                <Link to="/">Return Home</Link>
            </div>
        );
    }

    // Terms & Conditions: no sidebar
    if (slug === "terms") {
        return (
            <div className="terms-page">
                <h1 className="info-title">{title}</h1>
                <TermsAndConditions />
            </div>
        );
    }

    // Privacy Policy: no sidebar
    if (slug === "privacy-policy") {
        return (
            <div className="terms-page">
                <h1 className="info-title">{title}</h1>
                <PrivacyPolicy />
            </div>
        );
    }

    // All other pages: display the sidebar
    return (
        <div className="info-page">
            <aside className="info-sidebar">
                {sidebarItems.map((item) => (
                    <Link
                        key={item.slug}
                        to={`/info/${item.slug}`}
                        className={
                            slug === item.slug
                                ? "info-sidebar-link active"
                                : "info-sidebar-link"
                        }
                    >
                        {item.title}
                    </Link>
                ))}
            </aside>

            <main className="info-main">
                <h1 className="info-title">{title}</h1>

                <div className="info-content">
                    <PageContent slug={slug} />
                </div>
            </main>
        </div>
    );
}

export default InfoPage;
