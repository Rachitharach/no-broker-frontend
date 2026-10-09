import React from "react";

import "./Services.css";


// ==================================================
// SERVICES IMAGES
// ==================================================

import builderImage from "./Images/builders.png";
import saleImage from "./Images/sale.png";
import loanImage from "./Images/loan.png";
import propertyImage from "./Images/property.png";
import interiorsImage from "./Images/interiors.svg";
import nriImage from "./Images/no broker for nri.png";


// ==================================================
// WHY NOBROKER IMAGES
// ==================================================

import avoidBrokersImage from "./Images/avoid brokers.png";
import freeListingImage from "./Images/free listing.png";
import shortlistImage from "./Images/short list.png";
import agreementImage from "./Images/agreement.png";


function Services() {

    return (
        <>


            {/* ==================================================
                LOAN BANNER
            ================================================== */}

            <section className="loan-banner">

                <div className="loan-content">

                    <img
                        className="loan-icon"
                        src={loanImage}
                        alt="Home Loan"
                    />

                    <p>
                        Do you know how much <strong>loan</strong> you can get?
                        Get maximum with <strong>NoBroker</strong>
                    </p>

                    <button>
                        Check Eligibility
                    </button>

                </div>

            </section>



            {/* ==================================================
                SERVICES
            ================================================== */}

            <section className="service-list">


                {/* Builder Projects */}

                <div className="service-item">

                    <span className="service-badge">
                        New
                    </span>

                    <img
                        src={builderImage}
                        alt="Builder Projects"
                    />

                    <p>
                        Builder Projects
                    </p>

                </div>


                {/* Sale Agreement */}

                <div className="service-item">

                    <span className="service-badge">
                        New
                    </span>

                    <img
                        src={saleImage}
                        alt="Sale Agreement"
                    />

                    <p>
                        Sale Agreement
                    </p>

                </div>


                {/* Home Loan */}

                <div className="service-item">

                    <img
                        src={loanImage}
                        alt="Home Loan"
                    />

                    <p>
                        Home Loan
                    </p>

                </div>


                {/* Property Legal Services */}

                <div className="service-item">

                    <img
                        src={propertyImage}
                        alt="Property Legal Services"
                    />

                    <p>
                        Property Legal Services
                    </p>

                </div>


                {/* Home Interiors */}

                <div className="service-item">

                    <span className="service-badge">
                        Sale is live!
                    </span>

                    <img
                        src={interiorsImage}
                        alt="Home Interiors"
                    />

                    <p>
                        Home Interiors
                    </p>

                </div>


                {/* NoBroker For NRIs */}

                <div className="service-item">

                    <img
                        src={nriImage}
                        alt="NoBroker For NRIs"
                    />

                    <p>
                        NoBroker For NRIs
                    </p>

                </div>

            </section>



            {/* ==================================================
                WHY USE NOBROKER
            ================================================== */}

            <section className="why-nobroker">


                <div className="section-title">

                    <span></span>

                    <h2>
                        Why Use NoBroker
                    </h2>

                    <span></span>

                </div>


                <div className="why-list">


                    {/* Avoid Brokers */}

                    <div className="why-item">

                        <img
                            src={avoidBrokersImage}
                            alt="Avoid Brokers"
                        />

                        <h3>
                            Avoid Brokers
                        </h3>

                        <p>
                            We directly connect you to verified
                            owners to save brokerage
                        </p>

                    </div>


                    {/* Free Listing */}

                    <div className="why-item">

                        <img
                            src={freeListingImage}
                            alt="Free Listing"
                        />

                        <h3>
                            Free Listing
                        </h3>

                        <p>
                            Easy listing process. Also using
                            WhatsApp
                        </p>

                    </div>


                    {/* Shortlist Without Visit */}

                    <div className="why-item">

                        <img
                            src={shortlistImage}
                            alt="Shortlist without Visit"
                        />

                        <h3>
                            Shortlist without Visit
                        </h3>

                        <p>
                            Extensive Information makes it easy
                        </p>

                    </div>


                    {/* Rental Agreement */}

                    <div className="why-item">

                        <img
                            src={agreementImage}
                            alt="Rental Agreement"
                        />

                        <h3>
                            Rental Agreement
                        </h3>

                        <p>
                            Assistance in creating Rental
                            agreement & Paper work
                        </p>

                    </div>

                </div>

            </section>



            {/* ==================================================
                BUSINESS ASSIST PLAN
            ================================================== */}

            <section className="business-assist">


                {/* Section Title */}

                <div className="section-title">

                    <span></span>

                    <h2>
                        NoBroker Business Assist Plan For Builders
                    </h2>

                    <span></span>

                </div>


                <div className="business-content">


                    {/* Left Image */}

                    <div className="business-image">
                        <img
                            src={builderImage}
                            alt="Business Assist For Builders"
                        />
                    </div>


                    {/* Right Content */}

                    <div className="business-info">

                        <p>
                            Get in touch with us to Sell or Rent Your Projects
                        </p>

                        <button>
                            Enquire Now
                        </button>

                        <div className="builder-contact">

                            <p>
                                For Builder Enquiries: +91 91080 50400
                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ==================================================
                WE MAKE A DIFFERENCE
            ================================================== */}

            <section className="difference-section">


                {/* Section Title */}

                <div className="section-title">

                    <span></span>

                    <h2>
                        We Make A Difference
                    </h2>

                    <span></span>

                </div>


                {/* Statistics */}

                <div className="difference-list">


                    {/* Brokerage */}

                    <div className="difference-item">

                        <div className="difference-circle">

                            <span>
                                ₹130 cr+
                            </span>

                        </div>

                        <p>
                            Brokerage saved monthly
                        </p>

                    </div>


                    {/* Customers */}

                    <div className="difference-item">

                        <div className="difference-circle">

                            <span>
                                30 Lakh+
                            </span>

                        </div>

                        <p>
                            Customers Connected Monthly
                        </p>

                    </div>


                    {/* Listings */}

                    <div className="difference-item">

                        <div className="difference-circle">

                            <span>
                                2 Lakh+
                            </span>

                        </div>

                        <p>
                            New Listings Monthly
                        </p>

                    </div>


                </div>

            </section>



            {/*
                OUR CUSTOMERS LOVE US
*/}

           {/* ==================================================
    OUR CUSTOMERS LOVES US
================================================== */}

<section className="customers-section">

    <h2>
        Our Customers Loves us
    </h2>


    {/* YouTube Video */}

    <div className="customer-video">

        <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="NoBroker Reviews"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>

    </div>


    {/* Testimonials */}

    <div className="testimonial-list">


        {/* Testimonial 1 */}

        <div className="testimonial-card">

            <div className="testimonial-user">

                <div className="user-image">
                    👤
                </div>

                <div>

                    <h3>
                        Shubham Raibhhandar
                    </h3>

                    <div className="stars">
                        ★★★★★
                    </div>

                </div>

            </div>


            <h4>
                Helps us to find good properties
            </h4>

            <p>
                "The site really helps us to find good properties
                in the least amount of time without any headache
                of brokerage. I was so scared in Pune due to the
                issues of high deposit as well as brokerage.
                I was new and had no time. But then I found
                NoBroker. It is simply a ..."
            </p>

        </div>



        {/* Testimonial 2 */}

        <div className="testimonial-card">

            <div className="testimonial-user">

                <div className="user-image">
                    👤
                </div>

                <div>

                    <h3>
                        Lisa Das
                    </h3>

                    <div className="stars">
                        ★★★★★
                    </div>

                </div>

            </div>


            <h4>
                It's a nice experience
            </h4>

            <p>
                "It was a nice experience with Nobroker.
                They helped me to find a new home to stay as
                it was difficult for me, as an individual, to
                find a home with friendly roommates.
                Thankfully Nobroker helped me to get one with
                all kind of facilities."
            </p>

        </div>



        {/* Testimonial 3 */}

        <div className="testimonial-card">

            <div className="testimonial-user">

                <div className="user-image">
                    👤
                </div>

                <div>

                    <h3>
                        Kishore
                    </h3>

                    <div className="stars">
                        ★★★★★
                    </div>

                </div>

            </div>


            <h4>
                Found Great Place to Stay via NoBroker
            </h4>

            <p>
                "NoBroker provides a great place to stay
                with safe environment. If they show you
                something about property that is always same
                as it. No fake pictures."
            </p>

        </div>


    </div>


    {/* More Testimonials */}

    <a
        href="#"
        className="more-testimonials"
    >
        More Testimonials
    </a>

</section>


{/* ==================================================
    FIND A NEW HOME ON THE GO
================================================== */}

<section className="app-section">

    <div className="app-image">
        <div className="phone-placeholder">
            📱
        </div>
    </div>

    <div className="app-content">

        <h2>
            Find A New Home On The Go
        </h2>

        <h3>
            Download our app
        </h3>

        <p>
            Where convenience is at your fingertip
        </p>

        <div className="app-buttons">

            <button>
                ▶ Google Play
            </button>

            <button>
                 App Store
            </button>

        </div>

    </div>

</section>



{/* ==================================================
    PROPERTY CATEGORIES
================================================== */}

<section className="property-section">

    {/* Category Tabs */}

    <div className="property-tabs">

        <div className="property-tab active">
            Properties & Flats for Sale
        </div>

        <div className="property-tab">
            Flats for Rent
        </div>

        <div className="property-tab">
            PG / Hostels
        </div>

        <div className="property-tab">
            Flatmates
        </div>

        <div className="property-tab">
            Miscellaneous
        </div>

        <div className="property-tab">
            Commercial
        </div>

        <div className="property-tab">
            New Projects & Plots
        </div>

        <div className="property-tab">
            Independent Houses & Villas
        </div>

    </div>


    {/* Property Links */}

    <div className="property-links">

        <div className="property-column">

            <h3>
                Flats for Sale in Bangalore
            </h3>

            <a>Flats for Sale in Koramangala</a>
            <a>Flats for Sale in Marathahalli</a>
            <a>Flats for Sale in HSR Layout</a>
            <a>Flats for Sale in Whitefield</a>
            <a>Flats for Sale in Indira Nagar</a>
            <a>Flats for Sale in Bellandur</a>
            <a>Flats for Sale in Chandra Layout</a>
            <a>Flats for Sale in J. P. Nagar</a>
            <a>Flats for Sale in BTM Layout</a>
            <a>Flats for Sale in Jayanagar</a>
            <a>Flats for Sale in Bangalore Below 45 Lakhs</a>
            <a>Flats for Sale in Bangalore Below 50 Lakhs</a>
            <a>Flats for Sale Below 60 Lakhs in Bangalore</a>
            <a>Flats for Sale Below 70 Lakhs in Bangalore</a>
            <a>Flats for Sale Below 80 Lakhs in Bangalore</a>
            <a>Flats for Sale Below 90 Lakhs in Bangalore</a>

            <h3>
                Properties for Sale in Bangalore
            </h3>

            <a>Properties For Sale In Koramangala</a>
            <a>Properties For Sale In Whitefield</a>
            <a>Properties For Sale In Bellandur</a>

        </div>


        <div className="property-column">

            <h3>
                Flats for Sale in Mumbai
            </h3>

            <a>Flats for Sale in Andheri West</a>
            <a>Flats for Sale in Andheri East</a>
            <a>Flats for Sale in Malad West</a>
            <a>Flats for Sale in Navi Mumbai</a>
            <a>Flats for Sale in Powai</a>
            <a>Flats for Sale in Thane West</a>
            <a>Flats for Sale in Mira Road East</a>
            <a>Flats for Sale in Kharghar</a>
            <a>Flats for Sale in Kandivali East</a>
            <a>Flats for Sale in Bandra West</a>
            <a>Flats for Sale Below 60 Lakhs In Mumbai</a>
            <a>Flats for Sale Below 70 Lakhs In Mumbai</a>
            <a>Flats for Sale Below 80 Lakhs In Mumbai</a>
            <a>Flats for Sale Below 90 Lakhs In Mumbai</a>

            <h3>
                Properties for Sale in Mumbai
            </h3>

            <a>Properties For Sale In Kharghar</a>
            <a>Properties For Sale In Mumbai</a>

        </div>


        <div className="property-column">

            <h3>
                Flats for Sale in Chennai
            </h3>

            <a>Flats for Sale in Velachery</a>
            <a>Flats for Sale in Thiruvanmiyur</a>
            <a>Flats for Sale in Madipakkam</a>
            <a>Flats for Sale in Thoraipakkam</a>
            <a>Flats for Sale in Sholinganallur</a>
            <a>Flats for Sale in Medavakkam</a>
            <a>Flats for Sale in Mylapore</a>
            <a>Flats for Sale in Adyar</a>
            <a>Flats for Sale in T Nagar</a>
            <a>Flats for Sale in Perungudi</a>
            <a>Flats for Sale in Chennai Below 45 Lakhs</a>
            <a>Flats for Sale Below 50 Lakhs In Chennai</a>
            <a>Flats for Sale Below 70 Lakhs In Chennai</a>
            <a>Flats for Sale Below 80 Lakhs In Chennai</a>
            <a>Flats for Sale Below 90 Lakhs In Chennai</a>

            <h3>
                Properties for Sale in Chennai
            </h3>

            <a>Properties For Sale In Shalimar Bagh</a>
            <a>Properties For Sale In Velachery</a>

        </div>


        <div className="property-column">

            <h3>
                Flats for Sale in Pune
            </h3>

            <a>Flats for Sale in Wakad</a>
            <a>Flats for Sale in Kharadi</a>
            <a>Flats for Sale in Baner</a>
            <a>Flats for Sale in Hadapsar</a>
            <a>Flats for Sale in Aundh</a>
            <a>Flats for Sale in Kothrud</a>
            <a>Flats for Sale in Pimple Saudagar</a>
            <a>Flats for Sale in Viman Nagar</a>
            <a>Flats for Sale in Pimpri</a>
            <a>Flats for Sale in Hinjewadi</a>
            <a>Flats for Sale in Pune Below 45 Lakhs</a>
            <a>Flats for Sale Below 50 Lakhs In Pune</a>
            <a>Flats for Sale Below 60 Lakhs In Pune</a>
            <a>Flats for Sale Below 70 Lakhs In Pune</a>
            <a>Flats for Sale Below 80 Lakhs In Pune</a>

            <h3>
                Properties for Sale in Pune
            </h3>

            <a>Properties For Sale In Hadapsar</a>
            <a>Properties For Sale In Kothrud</a>

        </div>


        <div className="property-column">

            <h3>
                Flats for Sale in Gurgaon
            </h3>

            <a>1 BHK Flats in Gurgaon</a>
            <a>2 BHK Flats in Gurgaon</a>
            <a>3 BHK Flats in Gurgaon</a>
            <a>4 BHK Flats in Gurgaon</a>
            <a>4+ BHK Flats in Gurgaon</a>
            <a>Fully Furnished Flats in Gurgaon</a>
            <a>Semi Furnished Flats in Gurgaon</a>
            <a>Unfurnished Flats in Gurgaon</a>
            <a>Independent Floor for Sale in Gurgaon</a>
            <a>Independent Houses For Sale in Gurgaon</a>
            <a>Flats For Sale Below 60 Lakhs In Gurgaon</a>
            <a>Flats For Sale Below 70 Lakhs In Gurgaon</a>
            <a>Flats For Sale Below 90 Lakhs In Gurgaon</a>

            <h3>
                Properties for Sale in Gurgaon
            </h3>

            <a>Properties For Sale In Sector 31</a>
            <a>Properties For Sale In Sector 4</a>

        </div>

    </div>

</section>



{/* ==================================================
    NOBROKER SERVICES
================================================== */}

<section className="nobroker-services">

    <h2>
        NoBroker services
    </h2>


    <div className="service-columns">


        {/* BUY */}

        <div className="service-links">

            <h3>
                Buy
            </h3>

            <div className="service-tags">

                <span>Property Legal Services</span>
                <span>Interiors</span>
                <span>Sale Agreement</span>
                <span>NoBroker For NRI's</span>
                <span>New Builder Project</span>

                <span>Home Loan EMI Calculator</span>
                <span>Home Loan Balance Transfer</span>
                <span>Home Loan Eligibility Calculator</span>

                <span>Apply Home Loan</span>
                <span>Compare Home Loan Interest</span>
                <span>Property Buyers Forum</span>
                <span>Property Buyers Guide</span>

                <span>Property Seller Guide</span>
                <span>Home Loan Guide</span>
                <span>Home Loan Queries</span>
                <span>Home Renovation Guide</span>

                <span>Home Renovation Queries</span>
                <span>Interior Design Tips</span>
                <span>Interior Design Queries</span>
                <span>NRI RealEstate Guide</span>

                <span>NRI RealEstate Queries</span>
                <span>Realestate Vastu Guide</span>
                <span>Personal Loan Guide</span>
                <span>Personal Loan Queries</span>

                <span>Bill Payment Guide</span>
                <span>Realestate Legal Guide</span>
                <span>Realestate Legal Queries</span>
                <span>e-AASTHI BBMP</span>

                <span>Due Diligence Service</span>

            </div>

        </div>



        {/* RENT */}

        <div className="service-links">

            <h3>
                Rent
            </h3>

            <div className="service-tags">

                <span>Rental Agreement</span>
                <span>Pay Tuition Fee</span>
                <span>Refer and Earn</span>
                <span>Packers and Movers</span>

                <span>Property Management in India</span>
                <span>Home Services Questions</span>
                <span>Rent Services Questions</span>

                <span>Rent Calculator</span>
                <span>Property Rental Guide</span>
                <span>Landlord Guide</span>
                <span>Tenant Guide</span>

                <span>Packers and Movers Guide</span>
                <span>Packers and Movers queries</span>
                <span>Home Services</span>
                <span>Home Services Queries</span>

                <span>Painting Services</span>
                <span>Home Painting Guide</span>
                <span>Home Painting Queries</span>
                <span>Cleaning Services</span>

                <span>Kitchen Cleaning Services</span>
                <span>Sofa Cleaning Services</span>
                <span>Bathroom Cleaning Services</span>

                <span>Full House Cleaning Services</span>
                <span>Home Cleaning Guide</span>
                <span>Home Cleaning Queries</span>
                <span>AC Services</span>

                <span>Carpentry Services</span>
                <span>Carpentry Services Queries</span>
                <span>Electrician Services</span>
                <span>Electrician Services Queries</span>

                <span>Plumbing Services</span>
                <span>Plumbing Services Queries</span>
                <span>Lease Agreement</span>
                <span>Notary</span>
                <span>Notary Advocate</span>
                <span>Notary Affidavit</span>

            </div>

        </div>

    </div>

</section>



{/* ==================================================
    FIND / LIST PROPERTY
================================================== */}

<section className="property-actions">

    <div className="property-action">

        <h3>
            Find Property
        </h3>

        <p>
            Select from thousands of options, without brokerage.
        </p>

        <button>
            Find Now
        </button>

    </div>


    <div className="property-action">

        <h3>
            List Your Property
        </h3>

        <p>
            For Free. Without any brokerage.
        </p>

        <button>
            Free Posting
        </button>

    </div>

</section>



{/* ==================================================
    FOOTER
================================================== */}

<footer className="footer">

    <div className="footer-links">

        <a>About Us</a>
        <a>Careers</a>
        <a>Terms & Conditions</a>
        <a>Privacy Policy</a>
        <a>Testimonials</a>
        <a>Sitemap</a>
        <a>FAQs</a>

    </div>


    <div className="footer-divider"></div>


    {/* App buttons */}

    <div className="footer-apps">

        <button>
            ▶ Google Play
        </button>

        <button>
             App Store
        </button>

    </div>


    {/* Social icons */}

    <div className="social-icons">

        <span>f</span>
        <span>♥</span>
        <span>◎</span>
        <span>in</span>
        <span>▶</span>

    </div>


    <p className="copyright">
        © 2013-25 NoBroker Technologies Solutions Pvt. Ltd.
    </p>

</footer>


        </>
    );
}


export default Services;