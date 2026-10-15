import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

// SERVICES IMAGES
import builderImage from "./Images/builders.png";
import saleImage from "./Images/sale.png";
import loanImage from "./Images/loan.png";
import propertyImage from "./Images/property.png";
import interiorsImage from "./Images/interiors.svg";
import nriImage from "./Images/no broker for nri.png";

// WHY NOBROKER IMAGES
import avoidBrokersImage from "./Images/avoid brokers.png";
import freeListingImage from "./Images/free listing.png";
import shortlistImage from "./Images/short list.png";
import agreementImage from "./Images/agreement.png";
import BuildersEnquire from "./BildersEnquire";
import InfoPage from "./InfoPage";

function Services() {
    const categories = [
        "Properties & Flats for Sale",
        "Flats for Rent",
        "PG / Hostels",
        "Flatmates",
        "Miscellaneous",
        "Commercial",
        "New Projects & Plots",
        "Independent Houses & Villas",
    ];

    const propertyGroups = [
        {
            title: "Flats for Sale in Bangalore",
            links: [
                "Flats for Sale in Koramangala",
                "Flats for Sale in Marathahalli",
                "Flats for Sale in HSR Layout",
                "Flats for Sale in Whitefield",
                "Flats for Sale in Indira Nagar",
                "Flats for Sale in Bellandur",
                "Flats for Sale in Chandra Layout",
                "Flats for Sale in J. P. Nagar",
                "Flats for Sale in BTM Layout",
                "Flats for Sale in Jayanagar",
                "Flats for Sale in Bangalore Below 45 Lakhs",
                "Flats for Sale in Bangalore Below 50 Lakhs",
                "Flats for Sale Below 60 Lakhs in Bangalore",
                "Flats for Sale Below 70 Lakhs in Bangalore",
                "Flats for Sale Below 80 Lakhs in Bangalore",
                "Flats for Sale Below 90 Lakhs in Bangalore",
            ],
            secondTitle: "Properties for Sale in Bangalore",
            secondLinks: [
                "Properties For Sale In Koramangala",
                "Properties For Sale In Whitefield",
                "Properties For Sale In Bellandur",
            ],
        },
        {
            title: "Flats for Sale in Mumbai",
            links: [
                "Flats for Sale in Andheri West",
                "Flats for Sale in Andheri East",
                "Flats for Sale in Malad West",
                "Flats for Sale in Navi Mumbai",
                "Flats for Sale in Powai",
                "Flats for Sale in Thane West",
                "Flats for Sale in Mira Road East",
                "Flats for Sale in Kharghar",
                "Flats for Sale in Kandivali East",
                "Flats for Sale in Bandra West",
                "Flats for Sale Below 60 Lakhs In Mumbai",
                "Flats for Sale Below 70 Lakhs In Mumbai",
                "Flats for Sale Below 80 Lakhs In Mumbai",
                "Flats for Sale Below 90 Lakhs In Mumbai",
            ],
            secondTitle: "Properties for Sale in Mumbai",
            secondLinks: [
                "Properties For Sale In Kharghar",
                "Properties For Sale In Mumbai",
            ],
        },
        {
            title: "Flats for Sale in Chennai",
            links: [
                "Flats for Sale in Velachery",
                "Flats for Sale in Thiruvanmiyur",
                "Flats for Sale in Madipakkam",
                "Flats for Sale in Thoraipakkam",
                "Flats for Sale in Sholinganallur",
                "Flats for Sale in Medavakkam",
                "Flats for Sale in Mylapore",
                "Flats for Sale in Adyar",
                "Flats for Sale in T Nagar",
                "Flats for Sale in Perungudi",
                "Flats for Sale in Chennai Below 45 Lakhs",
                "Flats for Sale Below 50 Lakhs In Chennai",
                "Flats for Sale Below 70 Lakhs In Chennai",
                "Flats for Sale Below 80 Lakhs In Chennai",
                "Flats for Sale Below 90 Lakhs In Chennai",
            ],
            secondTitle: "Properties for Sale in Chennai",
            secondLinks: [
                "Properties For Sale In Shalimar Bagh",
                "Properties For Sale In Velachery",
            ],
        },
        {
            title: "Flats for Sale in Pune",
            links: [
                "Flats for Sale in Wakad",
                "Flats for Sale in Kharadi",
                "Flats for Sale in Baner",
                "Flats for Sale in Hadapsar",
                "Flats for Sale in Aundh",
                "Flats for Sale in Kothrud",
                "Flats for Sale in Pimple Saudagar",
                "Flats for Sale in Viman Nagar",
                "Flats for Sale in Pimpri",
                "Flats for Sale in Hinjewadi",
                "Flats for Sale in Pune Below 45 Lakhs",
                "Flats for Sale Below 50 Lakhs In Pune",
                "Flats for Sale Below 60 Lakhs In Pune",
                "Flats for Sale Below 70 Lakhs In Pune",
                "Flats for Sale Below 80 Lakhs In Pune",
            ],
            secondTitle: "Properties for Sale in Pune",
            secondLinks: [
                "Properties For Sale In Hadapsar",
                "Properties For Sale In Kothrud",
            ],
        },
        {
            title: "Flats for Sale in Gurgaon",
            links: [
                "1 BHK Flats in Gurgaon",
                "2 BHK Flats in Gurgaon",
                "3 BHK Flats in Gurgaon",
                "4 BHK Flats in Gurgaon",
                "4+ BHK Flats in Gurgaon",
                "Fully Furnished Flats in Gurgaon",
                "Semi Furnished Flats in Gurgaon",
                "Unfurnished Flats in Gurgaon",
                "Independent Floor for Sale in Gurgaon",
                "Independent Houses For Sale in Gurgaon",
                "Flats For Sale Below 60 Lakhs In Gurgaon",
                "Flats For Sale Below 70 Lakhs In Gurgaon",
                "Flats For Sale Below 90 Lakhs In Gurgaon",
            ],
            secondTitle: "Properties for Sale in Gurgaon",
            secondLinks: [
                "Properties For Sale In Sector 31",
                "Properties For Sale In Sector 4",
            ],
        },
    ];

    const buyServices = [
        "Property Legal Services",
        "Interiors",
        "Sale Agreement",
        "NoBroker For NRI's",
        "New Builder Project",
        "Home Loan EMI Calculator",
        "Home Loan Balance Transfer",
        "Home Loan Eligibility Calculator",
        "Apply Home Loan",
        "Compare Home Loan Interest",
        "Property Buyers Forum",
        "Property Buyers Guide",
        "Property Seller Guide",
        "Home Loan Guide",
        "Home Loan Queries",
        "Home Renovation Guide",
        "Home Renovation Queries",
        "Interior Design Tips",
        "Interior Design Queries",
        "NRI RealEstate Guide",
        "NRI RealEstate Queries",
        "Realestate Vastu Guide",
        "Personal Loan Guide",
        "Personal Loan Queries",
        "Bill Payment Guide",
        "Realestate Legal Guide",
        "Realestate Legal Queries",
        "e-AASTHI BBMP",
        "Due Diligence Service",
    ];

    const rentServices = [
        "Rental Agreement",
        "Pay Tuition Fee",
        "Refer and Earn",
        "Packers and Movers",
        "Property Management in India",
        "Home Services Questions",
        "Rent Services Questions",
        "Rent Calculator",
        "Property Rental Guide",
        "Landlord Guide",
        "Tenant Guide",
        "Packers and Movers Guide",
        "Packers and Movers queries",
        "Home Services",
        "Home Services Queries",
        "Painting Services",
        "Home Painting Guide",
        "Home Painting Queries",
        "Cleaning Services",
        "Kitchen Cleaning Services",
        "Sofa Cleaning Services",
        "Bathroom Cleaning Services",
        "Full House Cleaning Services",
        "Home Cleaning Guide",
        "Home Cleaning Queries",
        "AC Services",
        "Carpentry Services",
        "Carpentry Services Queries",
        "Electrician Services",
        "Electrician Services Queries",
        "Plumbing Services",
        "Plumbing Services Queries",
        "Lease Agreement",
        "Notary",
        "Notary Advocate",
        "Notary Affidavit",
    ];

    return (
        <>
            {/* 1. LOAN BANNER */}
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
                    <button>Check Eligibility</button>
                </div>
            </section>

            {/* 2. SERVICE CARDS */}
            <section className="service-list">
                <div className="service-item">
                    <span className="service-badge">New</span>
                    <img src={builderImage} alt="Builder Projects" />
                    <p>Builder Projects</p>
                </div>

                <div className="service-item">
                    <span className="service-badge">New</span>
                    <img src={saleImage} alt="Sale Agreement" />
                    <p>Sale Agreement</p>
                </div>

                <div className="service-item">
                    <img src={loanImage} alt="Home Loan" />
                    <p>Home Loan</p>
                </div>

                <div className="service-item">
                    <img src={propertyImage} alt="Property Legal Services" />
                    <p>Property Legal Services</p>
                </div>

                <div className="service-item">
                    <span className="service-badge">Sale is live!</span>
                    <img src={interiorsImage} alt="Home Interiors" />
                    <p>Home Interiors</p>
                </div>

                <div className="service-item">
                    <img src={nriImage} alt="NoBroker For NRIs" />
                    <p>NoBroker For NRIs</p>
                </div>
            </section>

            {/* 3. WHY USE NOBROKER */}
            <section className="why-nobroker">
                <div className="section-title">
                    <span></span>
                    <h2>Why Use NoBroker</h2>
                    <span></span>
                </div>

                <div className="why-list">
                    <div className="why-item">
                        <img src={avoidBrokersImage} alt="Avoid Brokers" />
                        <h3>Avoid Brokers</h3>
                        <p>
                            We directly connect you to verified owners to save
                            brokerage
                        </p>
                    </div>

                    <div className="why-item">
                        <img src={freeListingImage} alt="Free Listing" />
                        <h3>Free Listing</h3>
                        <p>Easy listing process. Also using WhatsApp</p>
                    </div>

                    <div className="why-item">
                        <img
                            src={shortlistImage}
                            alt="Shortlist without Visit"
                        />
                        <h3>Shortlist without Visit</h3>
                        <p>Extensive Information makes it easy</p>
                    </div>

                    <div className="why-item">
                        <img src={agreementImage} alt="Rental Agreement" />
                        <h3>Rental Agreement</h3>
                        <p>
                            Assistance in creating Rental agreement &amp; Paper
                            work
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. BUSINESS ASSIST */}
            <section className="business-assist">
                <div className="section-title">
                    <span></span>
                    <h2>NoBroker Business Assist Plan For Builders</h2>
                    <span></span>
                </div>

                <div className="business-content">
                    <div className="business-image">
                        <img
                            src={builderImage}
                            alt="Business Assist For Builders"
                        />
                    </div>

                    {/* <div className="business-info">
                        <p>Get in touch with us to Sell or Rent Your Projects</p>
                        <button>Enquire Now</button>

                        <div className="builder-contact">
                            <p>For Builder Enquiries: +91 91080 50400</p>
                        </div>
                    </div> */}

                    <div className="business-info">
                        <p>Get in touch with us to Sell or Rent Your Projects</p>
                        <button>
                        <Link to="/builder-enquiry" className="enquire-btn" target="_blank">
                            Enquire Now
                        </Link></button>

                        <div className="builder-contact">
                            <p>For Builder Enquiries: +91 91080 50400</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DIFFERENCE STATISTICS */}
            <section className="difference-section">
                <div className="section-title">
                    <span></span>
                    <h2>We Make A Difference</h2>
                    <span></span>
                </div>

                <div className="difference-list">
                    <div className="difference-item">
                        <div className="difference-circle">
                            <span>₹130 cr+</span>
                        </div>
                        <p>Brokerage saved monthly</p>
                    </div>

                    <div className="difference-item">
                        <div className="difference-circle">
                            <span>30 Lakh+</span>
                        </div>
                        <p>Customers Connected Monthly</p>
                    </div>

                    <div className="difference-item">
                        <div className="difference-circle">
                            <span>2 Lakh+</span>
                        </div>
                        <p>New Listings Monthly</p>
                    </div>
                </div>
            </section>

            {/* 6. CUSTOMER TESTIMONIALS */}
            <section className="customers-section">
                <h2>Our Customers Loves us</h2>

                <div className="customer-video">
                    <iframe
                        src="https://www.youtube.com/embed/0ChlgxhXVws?si=biTl7J8TxParr6w_"
                        title="NoBroker Reviews"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="testimonial-list">
                    <div className="testimonial-card">
                        <div className="testimonial-user">
                            <div className="user-image">👤</div>
                            <div>
                                <h3>Shubham Raibhhandar</h3>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <h4>Helps us to find good properties</h4>
                        <p>
                            "The site really helps us to find good properties
                            in the least amount of time without any headache
                            of brokerage. I was so scared in Pune due to the
                            issues of high deposit as well as brokerage. I was
                            new and had no time. But then I found NoBroker.
                            It is simply a ..."
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-user">
                            <div className="user-image">👤</div>
                            <div>
                                <h3>Lisa Das</h3>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <h4>It's a nice experience</h4>
                        <p>
                            "It was a nice experience with Nobroker. They
                            helped me to find a new home to stay as it was
                            difficult for me, as an individual, to find a home
                            with friendly roommates. Thankfully Nobroker helped
                            me to get one with all kind of facilities."
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-user">
                            <div className="user-image">👤</div>
                            <div>
                                <h3>Kishore</h3>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <h4>Found Great Place to Stay via NoBroker</h4>
                        <p>
                            "NoBroker provides a great place to stay with safe
                            environment. If they show you something about
                            property that is always same as it. No fake
                            pictures."
                        </p>
                    </div>
                </div>

                    <Link to="/testimonials" className="more-testimonials" target="_blank">
                        More Testimonials
                    </Link>
            </section>

            {/* 7. MOBILE APP */}
            <section className="app-section">
                <div className="app-image">
                    <div className="phone-placeholder">
                        <img src="https://assets.nobroker.in/nb-new/public/Home/homeAppPromotion.png" ></img>
                    </div>
                </div>

                <div className="app-content">
                    <h2>Find A New Home On The Go</h2>
                    <h3>Download our app</h3>
                    <p>Where convenience is at your fingertip</p>

                    <div className="app-buttons">
                        <button><a href="https://play.google.com/store/apps/details?id=com.nobroker.app&referrer=utm_source%3Dnobroker&utm_medium=website&pli=1>">
                        ▶ Google Play </a></button>
                        <button> <a href="https://apps.apple.com/nz/app/nobroker-rent-buy-sell-flats/id1200507100"> App Store</a></button>
                    </div>
                </div>
            </section>

            {/* 8A. PROPERTY CATEGORIES - SEPARATE SECTION */}
            <section className="property-category-section">
                <div className="property-category-tabs">
                    {categories.map((category, index) => (
                        <button
                            type="button"
                            key={category}
                            className={`property-category-tab ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* 8B. CITY-WISE PROPERTY LISTINGS - SEPARATE SECTION */}
            <section className="property-listings-section">
                <div className="property-links">
                    {propertyGroups.map((group) => (
                        <div className="property-column" key={group.title}>
                            <h3>{group.title}</h3>

                            {group.links.map((link) => (
                                <a href="#property-listings" key={link}>
                                    {link}
                                </a>
                            ))}

                            <h3>{group.secondTitle}</h3>

                            {group.secondLinks.map((link) => (
                                <a href="#property-listings" key={link}>
                                    {link}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. NOBROKER SERVICES */}
            <section className="nobroker-services">
                <h2>NoBroker services</h2>

                <div className="service-columns">
                    <div className="service-links">
                        <h3>Buy</h3>
                        <div className="service-tags">
                            {buyServices.map((service) => (
                                <span key={service}>{service}</span>
                            ))}
                        </div>
                    </div>

                    <div className="service-links">
                        <h3>Rent</h3>
                        <div className="service-tags">
                            {rentServices.map((service) => (
                                <span key={service}>{service}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FIND / LIST PROPERTY */}
            <section className="property-actions">
                <div className="property-action">
                    <h3>Find Property</h3>
                    <p>
                        Select from thousands of options, without brokerage.
                    </p>
                    <button>Find Now</button>
                </div>

                <div className="property-action">
                    <h3>List Your Property</h3>
                    <p>For Free. Without any brokerage.</p>
                    <button>Free Posting</button>
                </div>
            </section>

            {/* 11. FOOTER */}
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/info/about-us">About Us</Link>
                    <Link to="/info/careers">Careers</Link>
                    <Link to="/info/terms">Terms &amp; Conditions</Link>
                    <Link to="/info/privacy-policy"> Privacy Policy</Link>
                    <Link to="/testimonials">Testimonials</Link>
                    <Link to="/info/sitemap">Sitemap</Link>
                    <Link to="/info/faqs">FAQs</Link>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-apps">
                    <button>▶ Google Play</button>
                    <button> App Store</button>
                </div>

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