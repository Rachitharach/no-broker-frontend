
import React, { useState } from "react";
import "./OwnerPlan.css";

const plans = [
    {
        name: "Relax",
        price: 3499,
        badge: "ON CALL ASSISTANCE",
        description: "Online promotion and relationship manager support.",
        popular: false,
    },
    {
        name: "Super Relax",
        price: 6499,
        badge: "MOST POPULAR",
        description: "Additional assistance for property visits and promotion.",
        popular: true,
    },
    {
        name: "MoneyBack",
        price: 7999,
        badge: "100% GUARANTEE",
        description: "Tenant guarantee or moneyback, subject to terms.",
        popular: false,
    },
    {
        name: "Super MoneyBack",
        price: 11999,
        badge: "FASTEST CLOSURE",
        description: "Tenant guarantee with additional on-site assistance.",
        popular: false,
    },
];

const benefits = [
    {
        icon: "▦",
        title: "45 Days",
        description: "Plan Validity",
        available: true,
    },
    {
        icon: "◇",
        title: "Guaranteed Tenants",
        description: "Or 100% Moneyback",
        available: false,
    },
    {
        icon: "♙",
        title: "Personal",
        description: "Field Assistant",
        available: true,
    },
    {
        icon: "♧",
        title: "Relationship Manager (RM)",
        description: "Super Fast Closure",
        available: true,
    },
    {
        icon: "♬",
        title: "Property Promotion On",
        description: "Website",
        available: true,
    },
    {
        icon: "⌂",
        title: "Showing Property",
        description: "On Your Behalf",
        available: true,
    },
    {
        icon: "▤",
        title: "Top Slot Listing For",
        description: "5x More Visibility",
        available: true,
    },
    {
        icon: "▣",
        title: "Photoshoot Of",
        description: "Your Property",
        available: true,
    },
    {
        icon: "f",
        title: "Facebook Marketing Of",
        description: "Your Property",
        available: true,
    },
    {
        icon: "▧",
        title: "Best Rental",
        description: "Consultation",
        available: true,
    },
    {
        icon: "♙",
        title: "Privacy Of Your Phone",
        description: "Number",
        available: true,
    },
];

const testimonials = [
    {
        quote:
            "NoBroker's RM effectively handled tenant inquiries, saving me from unnecessary calls and ensuring a smooth rental process.",
        tag: "#ZeroBrokerage",
    },
    {
        quote:
            "NoBroker's RM expertise and marketing support helped me rent my commercial space with less hassle.",
        tag: "#ZeroBrokerage",
    },
    {
        quote:
            "The team helped me connect with prospective tenants and made the rental process easier to manage.",
        tag: "#ZeroBrokerage",
    },
];

const faqs = [
    {
        question: "What will the Relationship Manager do?",
        answer:
            "The Relationship Manager helps coordinate tenant enquiries and guides you through the rental process.",
    },
    {
        question: "What will happen in case of Social Media Marketing?",
        answer:
            "Social media marketing is included according to the services and eligibility of your selected plan.",
    },
    {
        question: "How will my property get promoted?",
        answer:
            "Property promotion can include online listing visibility and other promotional services provided under your selected plan.",
    },
    {
        question: "Are there any hidden charges?",
        answer:
            "The displayed plan prices are exclusive of 18% GST. Review the plan terms and final payable amount before subscribing.",
    },
    {
        question: "What is the process of making rental agreement?",
        answer:
            "The rental agreement process depends on your rental requirements and the assistance available under your selected service.",
    },
    {
        question: "How will I get faster closures?",
        answer:
            "Relationship manager support, tenant enquiries and additional services can help coordinate the rental process. Results depend on the property and market.",
    },
];

function OwnerPlan() {
    const [selectedPlan, setSelectedPlan] = useState("Super Relax");
    const [gstInfo, setGstInfo] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const formatPrice = (price) =>
        price.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
        });

    const currentTestimonial = testimonials[testimonialIndex];

    return (
        <main className="owner-plans-page">
            {/* INTRODUCTION */}
            <section className="owner-plans-intro">
                <div className="owner-intro-content">
                    <h1>
                        Get Commercial Tenant Quickly.
                        <strong> Save upto 50k</strong> on brokerage.
                    </h1>

                    <div className="owner-trust-row">
                        <span className="owner-stars" aria-label="5 stars">
                            ★★★★★
                        </span>

                        <span>
                            Trusted by <strong>3 Lacs+</strong> People like you!
                        </span>
                    </div>
                </div>

                <a
                    className="owner-tenant-link"
                    href="https://www.nobroker.in/commercial/tenant/plans"
                    target="_blank"
                    rel="noreferrer"
                >
                    Click here for Commercial Tenant Plans
                </a>
            </section>

            {/* FOUR COMMERCIAL OWNER PLANS */}
            <section className="owner-pricing-section">
                <div className="owner-plan-grid">
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`owner-plan-card ${
                                plan.popular ? "owner-plan-popular" : ""
                            } ${
                                selectedPlan === plan.name
                                    ? "owner-plan-selected"
                                    : ""
                            }`}
                            onClick={() => setSelectedPlan(plan.name)}
                        >
                            <span className="owner-plan-badge">
                                {plan.badge}
                            </span>

                            <div className="owner-plan-card-content">
                                <h2>{plan.name}</h2>

                                <div className="owner-price-row">
                                    <strong>
                                        ₹{formatPrice(plan.price)}
                                    </strong>

                                    <button
                                        type="button"
                                        className="owner-gst-button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            setGstInfo(
                                                gstInfo === plan.name
                                                    ? null
                                                    : plan.name
                                            );
                                        }}
                                        aria-expanded={gstInfo === plan.name}
                                    >
                                        +18% GST ⓘ
                                    </button>
                                </div>

                                {gstInfo === plan.name && (
                                    <div className="owner-gst-details">
                                        <p>
                                            Plan Price
                                            <strong>
                                                ₹{formatPrice(plan.price)}
                                            </strong>
                                        </p>

                                        <p>
                                            GST (18%)
                                            <strong>
                                                ₹
                                                {formatPrice(
                                                    plan.price * 0.18
                                                )}
                                            </strong>
                                        </p>

                                        <p>
                                            Total
                                            <strong>
                                                ₹
                                                {formatPrice(
                                                    plan.price * 1.18
                                                )}
                                            </strong>
                                        </p>
                                    </div>
                                )}

                                <p className="owner-plan-description">
                                    {plan.description}
                                </p>

                                <button
                                    type="button"
                                    className="owner-subscribe-button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setSelectedPlan(plan.name);
                                        alert(
                                            `${plan.name} selected. Payment integration can be added later.`
                                        );
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* BENEFITS PANEL */}
                <section className="owner-benefits-panel">
                    <div className="owner-benefits-pointer" />

                    <div className="owner-benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div
                                className={`owner-benefit-item ${
                                    !benefit.available
                                        ? "owner-benefit-muted"
                                        : ""
                                }`}
                                key={`${benefit.title}-${index}`}
                            >
                                <div className="owner-benefit-icon">
                                    {benefit.icon}
                                </div>

                                <div className="owner-benefit-text">
                                    <strong>{benefit.title}</strong>
                                    <span>{benefit.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="owner-benefits-footer">
                        <p>
                            For assistance call us at:
                            <a href="tel:+918905999888">
                                +91-89-059-998-88
                            </a>
                        </p>

                        <a
                            href="https://www.nobroker.in/terms-and-conditions"
                            target="_blank"
                            rel="noreferrer"
                            className="owner-terms-link"
                        >
                            Terms &amp; Conditions Apply
                        </a>
                    </div>
                </section>
            </section>

            {/* TESTIMONIAL */}
            <section className="owner-testimonial-section">
                <div className="owner-testimonial-card">
                    <div className="owner-testimonial-avatar">
                        <span>NB</span>
                    </div>

                    <blockquote>
                        {currentTestimonial.quote}
                    </blockquote>

                    <p className="owner-testimonial-tag">
                        {currentTestimonial.tag}
                    </p>

                    <div className="owner-testimonial-controls">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.tag + index}
                                type="button"
                                className={
                                    testimonialIndex === index
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setTestimonialIndex(index)}
                                aria-label={`Show testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="owner-faq-section">
                <h2>Frequently Asked Questions</h2>

                <div className="owner-faq-list">
                    {faqs.map((faq, index) => (
                        <article
                            className="owner-faq-item"
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

                                <span className="owner-faq-symbol">
                                    {openFaq === index ? "−" : "+"}
                                </span>
                            </button>

                            {openFaq === index && (
                                <p>{faq.answer}</p>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default OwnerPlan;
