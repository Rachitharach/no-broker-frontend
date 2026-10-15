
import React, { useState } from "react";
import "./BuyerPlan.css";

const plans = [
    {
        name: "Relax Plan",
        price: 7499,
        description: "Get buyers quickly and save lakhs on brokerage.",
        features: [false, false, true, true, true, true, false, false],
    },
    {
        name: "Super Relax Plan",
        price: 13499,
        description: "Leave your house keys and worries to us.",
        features: [false, true, true, true, true, true, true, true],
        popular: true,
    },
    {
        name: "MoneyBack Plan",
        price: 16499,
        description:
            "Guaranteed buyers or moneyback with a relationship manager.",
        features: [true, false, true, true, true, true, false, false],
    },
    {
        name: "Super MoneyBack Plan",
        price: 20999,
        description:
            "Guaranteed buyers or moneyback with field assistance.",
        features: [true, true, true, true, true, true, true, true],
    },
];

const features = [
    {
        name: "Guaranteed buyers or Moneyback",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/refund.png",
    },
    {
        name: "Personal Field assistant",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/assistant.png",
    },
    {
        name: "Property promotion on site",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/promotion.png",
    },
    {
        name: "Relationship Manager (RM)",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/rm.png",
    },
    {
        name: "Facebook Marketing Of Property",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/marketing.png",
    },
    {
        name: "Privacy of your phone number",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/privacy.png",
    },
    {
        name: "Showing property on your behalf",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/showing-interest.png",
    },
    {
        name: "Photoshoot of your property",
        icon: "https://assets.nobroker.in/static/img/owner_plan_icons/photoshoot.png",
    },
];

const faqs = [
    {
        question: "What will the Relationship Manager do?",
        answer:
            "The Relationship Manager handles enquiries, filters potential buyers and helps coordinate the property-selling process.",
    },
    {
        question: "How will my property get promoted?",
        answer:
            "Property promotion and listing visibility depend on the services included in your selected plan.",
    },
    {
        question: "Are there any hidden charges?",
        answer:
            "An additional 18% GST is displayed. Review the final amount and plan terms before subscribing.",
    },
    {
        question: "How will I get faster closures?",
        answer:
            "Buyer enquiries can be filtered based on your requirements, helping you focus on suitable prospective buyers.",
    },
];

function BuyerPlan() {
    const [openFaq, setOpenFaq] = useState(0);
    const [gstInfo, setGstInfo] = useState(null);

    const formatPrice = (price) =>
        price.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
        });

    return (
        <main className="buyer-plans-page">

            {/* HERO SECTION */}
            <section className="buyer-plans-hero">
                <h1>
                    Get Buyers Quickly.
                    <span> SAVE LAKHS</span> on Brokerage
                </h1>

                <p>
                    For assistance call us at :+91-83-060-037-65
                </p>
            </section>

            {/* BENEFITS SECTION */}
            <section className="buyer-benefits">
                <div className="buyer-benefit">
                    <img
                        src="https://assets.nobroker.in/static/img/owner_plan_icons/wallet.svg"
                        alt=""
                    />

                    <h3>Get Buyers Faster</h3>
                    <p>Save on brokerage</p>
                </div>

                <div className="buyer-benefit">
                    <img
                        src="https://assets.nobroker.in/static/img/owner_plan_icons/house.svg"
                        alt=""
                    />

                    <h3>Leave Your House Keys</h3>
                    <p>Let us help you through the process</p>
                </div>
            </section>

            {/* PRICING AND COMPARISON */}
            <section className="buyer-pricing-section">

                <div className="buyer-plan-comparison">

                    {/* LEFT FEATURE COLUMN */}
                    <div className="buyer-feature-column">

                        <div className="buyer-feature-column-header">
                            <h2>Plans and Pricing</h2>
                        </div>

                        <div className="buyer-feature-rows">
                            {features.map((feature) => (
                                <div
                                    className="buyer-feature-row"
                                    key={feature.name}
                                >
                                    <img
                                        src={feature.icon}
                                        alt=""
                                        className="buyer-feature-icon"
                                    />

                                    <span>{feature.name}</span>
                                </div>
                            ))}

                            <div className="buyer-feature-row">
                                <img
                                    src="https://assets.nobroker.in/static/img/owner_plan_icons/validity.png"
                                    alt=""
                                    className="buyer-feature-icon"
                                />

                                <span>Plan validity</span>
                            </div>
                        </div>
                    </div>

                    {/* FOUR PLAN CARDS */}
                    <div className="buyer-plan-cards">

                        {plans.map((plan) => (
                            <article
                                className={`buyer-plan-card ${
                                    plan.popular ? "popular-plan" : ""
                                }`}
                                key={plan.name}
                            >
                                {plan.popular && (
                                    <div className="buyer-popular-label">
                                        {/* RECOMMENDED */}
                                    </div>
                                )}

                                {/* PLAN DETAILS */}
                                <div className="buyer-plan-card-top">

                                    <h3>{plan.name}</h3>

                                    <div className="buyer-plan-price">
                                        ₹{formatPrice(plan.price)}
                                    </div>

                                    <button
                                        type="button"
                                        className="buyer-gst-button"
                                        onClick={() =>
                                            setGstInfo(
                                                gstInfo === plan.name
                                                    ? null
                                                    : plan.name
                                            )
                                        }
                                        aria-expanded={
                                            gstInfo === plan.name
                                        }
                                    >
                                        +18% GST ⓘ
                                    </button>

                                    {/* GST BREAKDOWN */}
                                    {gstInfo === plan.name && (
                                        <div className="buyer-gst-breakdown">
                                            <p>
                                                <span>Plan Price</span>
                                                <strong>
                                                    ₹{formatPrice(plan.price)}
                                                </strong>
                                            </p>

                                            <p>
                                                <span>GST (18%)</span>
                                                <strong>
                                                    ₹
                                                    {formatPrice(
                                                        plan.price * 0.18
                                                    )}
                                                </strong>
                                            </p>

                                            <p>
                                                <span>Amount Payable</span>
                                                <strong>
                                                    ₹
                                                    {formatPrice(
                                                        plan.price * 1.18
                                                    )}
                                                </strong>
                                            </p>
                                        </div>
                                    )}

                                    {/* SUBSCRIBE */}
                                    <button
                                        type="button"
                                        className="buyer-subscribe-button"
                                        onClick={() =>
                                            alert(
                                                `${plan.name} selected. Payment integration can be added later.`
                                            )
                                        }
                                    >
                                        Subscribe
                                    </button>

                                    <p className="buyer-plan-description">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* FEATURE CHECKMARKS */}
                                <div className="buyer-feature-checks">
                                    {plan.features.map(
                                        (included, index) => (
                                            <div
                                                className="buyer-feature-check"
                                                key={features[index].name}
                                                title={features[index].name}
                                            >
                                                {included ? (
                                                    <span className="buyer-check">
                                                        ✓
                                                    </span>
                                                ) : (
                                                    <span className="buyer-unavailable">
                                                        —
                                                    </span>
                                                )}
                                            </div>
                                        )
                                    )}

                                    <div className="buyer-feature-check buyer-validity">
                                        3 Months
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <p className="buyer-plan-note">
                    * Terms and conditions apply. Confirm plan features,
                    eligibility and refund terms before subscribing.
                </p>
            </section>

            {/* HOW ASSISTED PLANS WORK */}
            <section className="buyer-how-section">
                <h2>HOW ASSISTED PLANS WORK</h2>

                <div className="buyer-how-grid">
                    <article>
                        <span>01</span>
                        <h3>Looking for a Buyer?</h3>
                        <p>
                            Get assistance in reaching prospective buyers
                            for your property.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>The Helping Hand</h3>
                        <p>
                            A dedicated relationship manager can guide
                            you through the selling process.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>Marketing and Promotion</h3>
                        <p>
                            Promote your property through the services
                            included in your selected plan.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <h3>Freedom from Unwanted Calls</h3>
                        <p>
                            Get assistance in handling and filtering
                            prospective buyer enquiries.
                        </p>
                    </article>

                    <article>
                        <span>05</span>
                        <h3>Filter Qualified Buyers</h3>
                        <p>
                            Focus on prospective buyers who match
                            your requirements.
                        </p>
                    </article>

                    <article>
                        <span>06</span>
                        <h3>Faster Closure</h3>
                        <p>
                            Get support in moving towards a suitable
                            property sale.
                        </p>
                    </article>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="buyer-faq-section">
                <h2>Frequently Asked Questions</h2>

                {faqs.map((faq, index) => (
                    <article
                        className="buyer-faq"
                        key={faq.question}
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setOpenFaq(
                                    openFaq === index ? null : index
                                )
                            }
                            aria-expanded={openFaq === index}
                        >
                            <span>{faq.question}</span>

                            <span className="buyer-faq-icon">
                                {openFaq === index ? "−" : "+"}
                            </span>
                        </button>

                        {openFaq === index && (
                            <p>{faq.answer}</p>
                        )}
                    </article>
                ))}
            </section>
        </main>
    );
}

export default BuyerPlan;
