
import "./Testimonials.css";
import Navbar from "../Navbar/Navbar";


const reviews = [
    {
        name: "Prameet",
        role: "Tenant",
        image: "https://assets.nobroker.in/images/testimonials/ff8081814f4537d0014f463ad8950854_2016.08.18.18.44.22.jpg",
        review:
            "Getting a roommate through NoBroker was a cakewalk for me. I have done a lot of house hunting, and finding a roommate was always challenging."
    },
    {
        name: "Mohamme Kouse",
        role: "Owner",
        image: "https://assets.nobroker.in/images/testimonials/ff80818155ac0fe40155af6ca8df1302_2016.10.06.12.05.00.jpg",
        review:
            "The NoBroker app is very useful for home seekers looking for homes to rent. I am happy to use the service."
    },
    {
        name: "Ayan",
        role: "Owner",
        image: "https://assets.nobroker.in/images/testimonials/ff8081814dc793fa014dc8d20faf1045_2016.10.06.12.03.04.jpg",
        review:
            "Wow! I am really amazed. Refer and Earn is awesome. I earn money by clicking pictures of To-Let boards."
    },
    {
        name: "Balasubramaniyam",
        role: "Owner",
        image: "https://assets.nobroker.in/images/testimonials/ff8081814d4b859b014d5268806a2734_2016.08.22.18.28.14.jpg",
        review:
            "I appreciate the positive and quick responses from the NoBroker team. Thank you for the excellent service."
    },
    {
        name: "Prabhu Dev",
        role: "Owner",
        image: "https://assets.nobroker.in/images/testimonials/ff8081814c2dea94014c452131543574_2016.08.22.20.01.02.jpg",
        review:
            "I got a genuine and quick response from the site. I am very happy with the service."
    }
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


function Testimonials() {
    return (
        <>
        <div className="min-h-screen bg-[#F7F9FD]">
            <Navbar/>

            {/* Banner */}
            <div className="h-[380px] w-full overflow-hidden">
                <img
                    src="https://images.nobroker.in/static/img/testimonial_bg.jpg"
                    alt="NoBroker customer testimonials"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Reviews */}
            <section className="px-6 py-20 md:px-10">

                <h1 className="mb-12 text-center text-2xl font-bold text-gray-700 md:text-3xl">
                    NoBroker Reviews - See What Our Valuable Customers Say
                </h1>

                <div className="flex gap-5 overflow-x-auto pb-6">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] max-w-[340px] flex-shrink-0 rounded-lg bg-white p-5 shadow-md"
                        >
                            {/* Customer details */}
                            <div className="mb-4 flex items-center gap-4">

                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        {review.name}
                                    </h3>

                                    <p className="text-sm text-gray-600">
                                        {review.role}
                                    </p>

                                    <p className="text-sm text-yellow-500">
                                        ★★★★★
                                    </p>
                                </div>
                            </div>

                            {/* Review text */}
                            <p className="leading-7 text-gray-600">
                                {review.review}
                            </p>
                        </div>
                    ))}

                </div>


            </section>
        </div>
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
                    <a href="#about">About Us</a>
                    <a href="#careers">Careers</a>
                    <a href="#terms">Terms &amp; Conditions</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="testimonials" target="_blank">Testimonials</a>
                    <a href="#sitemap">Sitemap</a>
                    <a href="#faqs">FAQs</a>
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

export default Testimonials;
