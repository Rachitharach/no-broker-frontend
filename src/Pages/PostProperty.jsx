
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PostProperty.css";

const adOptions = {
    Residential: ["Rent", "Resale", "PG/Hostel", "Flatmates"],
    Commercial: ["Rent", "Resale", "Lease"],
    "Land/Plot": ["Resale"],
};

const cities = [
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Pune",
    "Chennai",
    "Hyderabad",
    "Gurgaon",
    "Noida",
    "Kolkata",
];

function PostProperty() {
    const [propertyType, setPropertyType] = useState("Residential");
    const [adType, setAdType] = useState("Rent");
    const [whatsapp, setWhatsapp] = useState(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        city: "",
    });

    const [errors, setErrors] = useState({});
    const [started, setStarted] = useState(false);

    const updateField = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));
    };

    const changePropertyType = (type) => {
        setPropertyType(type);
        setAdType(adOptions[type][0]);
    };

    const handleContinue = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Please enter your name.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!/^[6-9]\d{9}$/.test(form.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }

        if (!form.city) {
            newErrors.city = "Please select a city.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setStarted(true);
        }
    };

    return (
        <>
        <div className="post-property-page">
            {/* PAGE HEADING */}
            <div className="post-property-heading">
                <h1>Sell or Rent your Property For Free</h1>

                <Link to="/" className="looking-link">
                    Looking for a property? <span>Click Here</span>
                </Link>
            </div>

            {/* MAIN LISTING PANEL */}
            <main className="listing-panel">
                {/* LEFT SIDEBAR */}
                <aside className="listing-sidebar">
                    <h2>Why Post through us?</h2>

                    <div className="sidebar-benefit">
                        <span className="benefit-icon">♧</span>
                        <span>Zero Brokerage</span>
                    </div>

                    <div className="sidebar-benefit">
                        <span className="benefit-icon">♙</span>
                        <span>Faster Tenants</span>
                    </div>

                    <div className="sidebar-benefit">
                        <span className="benefit-icon">♧</span>
                        <span>10 lac tenants/buyers connections</span>
                    </div>

                    <div className="testimonial">
                        <h3>30 Lac+ Home Owners Trust Us</h3>

                        <p>
                            I posted a property ad online on NoBroker.
                            It's an efficient real estate website because
                            it helps connect me with the right tenants.
                            They found a great tenant for my rental
                            property as per my demands.
                        </p>

                        <p className="testimonial-author">
                            <strong>Aldrin</strong> | Bangalore
                        </p>

                        <div className="testimonial-dots">
                            · · · · · · ·
                        </div>
                    </div>
                </aside>

                {/* RIGHT SIDE */}
                <section className="listing-main">
                    {started ? (
                        <div className="listing-next-step">
                            <h2>Thank you, {form.name}!</h2>

                            <p>
                                Your contact details have been validated.
                                Next, we'll collect your property details.
                            </p>

                            <div className="selected-summary">
                                <p>
                                    <strong>Property type:</strong>{" "}
                                    {propertyType}
                                </p>

                                <p>
                                    <strong>Advertisement type:</strong>{" "}
                                    {adType}
                                </p>

                                <p>
                                    <strong>City:</strong> {form.city}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="listing-submit"
                                onClick={() =>
                                    alert(
                                        "The property details form will be added next."
                                    )
                                }
                            >
                                Continue to Property Details
                            </button>

                            <button
                                type="button"
                                className="edit-details"
                                onClick={() => setStarted(false)}
                            >
                                Edit contact details
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleContinue} noValidate>
                            {/* CONTACT FIELDS */}
                            <div className="contact-form-grid">
                                <div className="field-wrap">
                                    <input
                                        name="name"
                                        placeholder="Name"
                                        value={form.name}
                                        onChange={updateField}
                                    />

                                    {errors.name && (
                                        <small>{errors.name}</small>
                                    )}
                                </div>

                                <div className="field-wrap">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email like name@gmail.com"
                                        value={form.email}
                                        onChange={updateField}
                                    />

                                    {errors.email && (
                                        <small>{errors.email}</small>
                                    )}
                                </div>

                                <div className="field-wrap">
                                    <div className="mobile-input">
                                        <span className="country-code">
                                            🇮🇳 +91⌄
                                        </span>

                                        <input
                                            name="mobile"
                                            type="tel"
                                            maxLength={10}
                                            placeholder="Mobile Number"
                                            value={form.mobile}
                                            onChange={(event) => {
                                                const mobile =
                                                    event.target.value
                                                        .replace(/\D/g, "")
                                                        .slice(0, 10);

                                                setForm((previous) => ({
                                                    ...previous,
                                                    mobile,
                                                }));

                                                setErrors((previous) => ({
                                                    ...previous,
                                                    mobile: "",
                                                }));
                                            }}
                                        />
                                    </div>

                                    {errors.mobile && (
                                        <small>{errors.mobile}</small>
                                    )}
                                </div>

                                <div className="field-wrap">
                                    <select
                                        name="city"
                                        value={form.city}
                                        onChange={updateField}
                                    >
                                        <option value="">Select City</option>

                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.city && (
                                        <small>{errors.city}</small>
                                    )}
                                </div>
                            </div>

                            {/* WHATSAPP TOGGLE */}
                            <div className="whatsapp-row">
                                <span>Get updates on</span>
                                <span className="whatsapp-symbol">●</span>
                                <span>WhatsApp</span>

                                <button
                                    type="button"
                                    role="switch"
                                    aria-label="WhatsApp updates"
                                    aria-checked={whatsapp}
                                    onClick={() => setWhatsapp(!whatsapp)}
                                    className={`whatsapp-toggle ${
                                        whatsapp ? "toggle-on" : ""
                                    }`}
                                >
                                    <span />
                                </button>
                            </div>

                            {/* PROPERTY TYPE */}
                            <div className="property-selector">
                                <h3>Property type</h3>

                                <div className="property-tabs">
                                    {Object.keys(adOptions).map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            className={
                                                propertyType === type
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                changePropertyType(type)
                                            }
                                        >
                                            {type}

                                            {type === "Land/Plot" && (
                                                <span className="new-badge">
                                                    New
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="ad-type-box">
                                    <h4>Select Property Ad Type</h4>

                                    <div className="ad-type-options">
                                        {adOptions[propertyType].map(
                                            (option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    className={
                                                        adType === option
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setAdType(option)
                                                    }
                                                >
                                                    {option}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="listing-submit"
                                >
                                    Start Posting Your Ad For FREE
                                </button>
                            </div>
                        </form>
                    )}
                </section>
            </main>

            {/* HELP BANNER */}
            <div className="listing-help">
                <span className="phone-symbol">☎</span>
                Give a missed call to 869-000-5267 to get help with your
                property listing
            </div>

            {/* THREE BENEFITS */}
            <section className="listing-benefits">
                <article>
                    <div className="large-benefit-icon">⊘</div>
                    <h2>No Calls From Brokers</h2>
                    <p>
                        Your information is kept confidential and you no
                        longer have to worry about calls from brokers.
                    </p>
                </article>

                <article>
                    <div className="large-benefit-icon">♙✓</div>
                    <h2>Verified Tenants</h2>
                    <p>
                        Thanks to our technology, only verified and genuine
                        tenants can call you.
                    </p>
                </article>

                <article>
                    <div className="large-benefit-icon">♧</div>
                    <h2>Save Brokerage</h2>
                    <p>
                        No Brokers means No Brokerage! Buy yourself a gift.
                    </p>
                </article>
            </section>

            {/* HOW IT WORKS */}
            <section className="how-it-works">
                <h2>How it Works</h2>

                <div className="how-row">
                    <div className="how-text">
                        <h3>Simple Listing Process</h3>
                        <p>
                            As an owner you can list your property in a few
                            minutes. Just fill out our simple form. Your
                            property will go live after verification.
                        </p>
                    </div>

                    <div className="how-illustration illustration-one">
                        <span>📋</span>
                        <span>🏠</span>
                    </div>
                </div>

                <div className="how-row reverse">
                    <div className="how-text">
                        <h3>
                            Tenant Selects Property and Schedules an
                            Appointment
                        </h3>
                        <p>
                            If a tenant likes your property, they can request
                            your contact details. Both parties can then
                            arrange a visit.
                        </p>
                    </div>

                    <div className="how-illustration illustration-two">
                        <span>📱</span>
                        <span>🤝</span>
                    </div>
                </div>

                <div className="how-row">
                    <div className="how-text">
                        <h3>Deal Closure</h3>
                        <p>
                            Owner and tenant meet to close the deal directly.
                            NoBroker also offers services to help with rental
                            agreements.
                        </p>
                    </div>

                    <div className="how-illustration illustration-three">
                        <span>🤝</span>
                        <span>🏡</span>
                    </div>
                </div>
            </section>

            {/* BOTTOM INFORMATION */}
            <section className="listing-description">
                <h2>Rent or Sell Property Online Easily With NoBroker</h2>

                <p>
                    Looking to sell property online or list your property
                    for rent? NoBroker makes it simple to advertise your
                    house, apartment or land without dealing with middlemen.
                </p>

                <p>
                    With free property listings, you can connect with
                    potential buyers and tenants directly. Add your property
                    details, share photos and find the right people for your
                    property.
                </p>
            </section>
        </div>
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



{/*FOOTER */}

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

export default PostProperty;
