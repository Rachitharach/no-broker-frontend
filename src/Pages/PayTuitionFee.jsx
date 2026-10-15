import React, { useState } from "react";
import "./PayTuitionFee.css";

const ASSETS = "https://assets.nobroker.in/nob-merchandise/";

const paymentMethods = [
  {
    title: "to Contact",
    icon: "web1spriteRent.svg",
    className: "contact-icon",
  },
  {
    title: "to UPI",
    icon: "web1spriteRent.svg",
    className: "upi-icon",
  },
  {
    title: "to Bank Account",
    icon: "web1spriteRent.svg",
    className: "bank-icon",
  },
];

const expenseOptions = [
  {
    title: "Tuition Fee",
    subtitle: "Instant Pay",
    image: `${ASSETS}tutionFee1.png`,
  },
  {
    title: "Rent Payment",
    subtitle: "Instant Pay",
    image: `${ASSETS}renticon1.png`,
  },
  {
    title: "Utility Bills",
    subtitle: "Pay Now",
    image: `${ASSETS}utilityBills1.png`,
  },
];

const benefits = [
  {
    title: "Instant transfer to bank accounts",
    description: "Get 45 days of interest-free credit",
    icon: "⚡",
  },
  {
    title: "Keep more money in your bank account",
    description: "And get 45 days interest-free credit",
    icon: "💸",
  },
  {
    title: "Doorway to increase your credit score",
    description: "And get 45 days interest-free credit",
    icon: "📊",
  },
];

const reviews = [
  {
    name: "Jyothi Dave",
    image:
      "https://assets.nobroker.in/nb-new/public/RentoPay/testimonial_jyothi_img.jpg",
    review:
      "I am really excited about using NoBroker Pay. I had paid my house rent through my credit card. The entire process is so seamless. My landlord too got an instant notification. The payment experience was convenient and simple.",
  },
  {
    name: "Arjun Santosh",
    image:
      "https://assets.nobroker.in/nob-merchandise/testimonial_arjun_img_new.png",
    review:
      "NoBroker Pay has helped me immensely to manage my finances better. You can earn reward points or cashback depending on your card's reward scheme.",
  },
  {
    name: "Karthik Kulkarni",
    image:
      "https://assets.nobroker.in/nb-new/public/RentoPay/testimonial_kartik.jpg",
    review:
      "Paying through NoBroker Pay gives me more flexibility in managing my monthly expenses. The online process is easy to use.",
  },
];

const faqs = [
  {
    question: "How secure is NoBroker Pay?",
    answer:
      "Security is important when making payments online. NoBroker uses security measures to help protect your information. This clone is a frontend demonstration and does not process real payments.",
  },
  {
    question: "How to contact NoBroker?",
    answer:
      "For the original service, use the official NoBroker website to find its current customer support contact details.",
  },
  {
    question: "What are the benefits of using NoBroker Pay?",
    answer:
      "NoBroker Pay supports payment flows for eligible expenses. Depending on the payment type and card, you may earn reward points or cashback from your card issuer.",
  },
  {
    question: "What are the fees/charges for using NoBroker Pay?",
    answer:
      "Any applicable charges should be reviewed on the official payment page before confirming a transaction.",
  },
  {
    question: "How do I make my Tuition fee payment on NoBroker Pay?",
    answer:
      "The original service asks users to provide the required tutor and payment details, then select a payment method. This frontend clone does not submit payments.",
  },
  {
    question: "How do I earn cashback/rewards with NoBroker Pay?",
    answer:
      "Rewards depend on the terms of your credit or debit card. Check with your card issuer for eligibility and reward conditions.",
  },
  {
    question: "How does NoBroker pay my Tutor?",
    answer:
      "The original service describes transferring eligible tuition payments to the tutor after the necessary details and onboarding have been completed.",
  },
  {
    question:
      "I made a payment but my transaction was put on hold. What should I do?",
    answer:
      "For a real transaction, contact the official support team and follow the status shown in your account. This demo does not create transactions.",
  },
  {
    question: "What is Tutor's Onboarding?",
    answer:
      "Tutor onboarding is a process for collecting and verifying the information needed to settle a tuition payment.",
  },
  {
    question:
      "If I have made the Tuition fee payment now, when will my Tutor get the amount?",
    answer:
      "Actual settlement time depends on the original service's verification and payment process. Check the official service for the latest information.",
  },
  {
    question: "Does NoBroker provide any cashback/rewards?",
    answer:
      "Card rewards and cashback depend on the applicable card issuer's terms and conditions.",
  },
  {
    question:
      "My Tutor is not onboarded on NoBroker. Can I still pay my tuition fee?",
    answer:
      "Check the original service's current tutor eligibility and onboarding requirements before making a payment.",
  },
  {
    question: "What happens if Tutor's Onboarding is not completed?",
    answer:
      "For a real payment, contact official support to understand the payment status and any applicable refund conditions.",
  },
  {
    question:
      "How can I change the tutor's phone number if it's entered incorrectly?",
    answer:
      "For an actual payment, contact official support promptly. Do not assume details can be edited after a payment has been submitted.",
  },
  {
    question: "Will I get a full refund if my payment is not valid?",
    answer:
      "Refund eligibility and any applicable charges depend on the original service's current terms. Confirm the details with official support.",
  },
];

function PayTuitionFee() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState("Tuition Fee");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notice, setNotice] = useState("");

  const handleExpenseClick = (expense) => {
    setSelectedExpense(expense);

    if (expense !== "Tuition Fee") {
      setNotice(`${expense} selected. This is a frontend demonstration.`);
    } else {
      setNotice("");
    }
  };

  const handlePaymentMethodClick = (method) => {
    setNotice(
      `${method} selected. Payment processing is not connected in this demo.`
    );
  };

  const handleGetOtp = (event) => {
    event.preventDefault();

    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      setNotice("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setNotice(
      "Demo only: OTP delivery is not connected. No OTP has been sent."
    );
  };

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
    <main className="tuition-page">
      {/* HEADER */}
      <header className="tuition-header">
        <a className="tuition-logo" href="/" aria-label="NoBroker home">
          <img
            src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
            alt="NoBroker"
          />
        </a>

        <button
          className="tuition-login-button"
          onClick={() => setShowLoginModal(true)}
        >
          LogIn/SignUp
        </button>
      </header>

      {/* BLUE BANNER */}
      <section className="tuition-banner">
        <div className="tuition-banner-inner">
          <h1>Payments via Credit Card</h1>

          <p className="tuition-banner-subtitle">
            START NEW PAYMENT FOR <strong>Tuition Fee</strong>
          </p>
        </div>
      </section>

      {/* MAIN PAGE LAYOUT */}
      <div className="tuition-layout">
        <div className="tuition-main-content">
          {/* PAYMENT METHOD CARDS */}
          <section className="payment-methods">
            {paymentMethods.map((method) => (
              <button
                type="button"
                className="payment-method-card"
                key={method.title}
                onClick={() => handlePaymentMethodClick(method.title)}
              >
                <div className="payment-method-inner">
                  <span
                    className={`payment-method-icon ${method.className}`}
                    aria-hidden="true"
                  ></span>

                  <span>{method.title}</span>
                </div>
              </button>
            ))}
          </section>

          {/* PAY YOUR EXPENSES */}
          <section className="expenses-section">
            <div className="tuition-section-heading">
              <h2>Pay Your Expenses</h2>
              <span></span>
            </div>

            <div className="expense-cards">
              {expenseOptions.map((expense) => (
                <button
                  type="button"
                  className={`expense-card ${
                    selectedExpense === expense.title ? "selected" : ""
                  }`}
                  key={expense.title}
                  onClick={() => handleExpenseClick(expense.title)}
                >
                  <img src={expense.image} alt="" />

                  <span className="expense-card-text">
                    <strong>{expense.title}</strong>
                    <small>{expense.subtitle}</small>
                  </span>

                  <span className="expense-arrow" aria-hidden="true">
                    ›
                  </span>
                </button>
              ))}
            </div>

            {notice && (
              <p className="tuition-notice" role="status">
                {notice}
              </p>
            )}
          </section>

          {/* CREDIT CARD BENEFITS */}
          <section className="benefits-section">
            <div className="benefits-intro">
              <img src={`${ASSETS}tutionFee1.png`} alt="" />
              <h2>Why pay via credit card?</h2>
            </div>

            <div className="benefit-cards">
              {benefits.map((benefit) => (
                <article className="benefit-card" key={benefit.title}>
                  <div className="benefit-icon" aria-hidden="true">
                    {benefit.icon}
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* CUSTOMER REVIEWS */}
          <section className="customer-reviews-section">
            <div className="reviews-heading">
              <h2>Customer Reviews</h2>
              <p>4.5 rating out of 4,500 Reviews</p>
            </div>

            <div className="reviews-list">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>

                  <p className="review-text">{review.review}</p>

                  <div className="review-author">
                    <img
                      src={review.image}
                      alt=""
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />
                    <span>{review.name}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <article className="faq-item" key={faq.question}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        {/* RIGHT-SIDE ADVERTISEMENT */}
        <aside className="tuition-sidebar">
          <img
            src={`${ASSETS}DeskInstacash.png`}
            alt="NoBroker Instant Cash promotion"
          />
        </aside>
      </div>

      {/* LOGIN / SIGNUP MODAL */}
      {showLoginModal && (
        <div
          className="tuition-modal-overlay"
          onClick={() => setShowLoginModal(false)}
        >
          <section
            className="tuition-login-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tuition-login-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="tuition-modal-close"
              aria-label="Close login modal"
              onClick={() => setShowLoginModal(false)}
            >
              ×
            </button>

            <h2 id="tuition-login-title">Sign in to complete the payment</h2>

            <div className="tuition-login-tip">
              💡 Pro tip: Use the phone number associated with your account.
            </div>

            <form onSubmit={handleGetOtp}>
              <label htmlFor="tuition-phone">Enter phone number</label>

              <div className="tuition-phone-input">
                <span>+91</span>
                <input
                  id="tuition-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  placeholder="Enter 10-digit number"
                  value={phoneNumber}
                  onChange={(event) =>
                    setPhoneNumber(
                      event.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  required
                />
              </div>

              <button type="submit" className="tuition-otp-button">
                Get OTP
              </button>
            </form>

            <p className="tuition-demo-note">
              Demo only: this form does not send an OTP or authenticate users.
            </p>

            {notice && (
              <p className="tuition-modal-notice" role="status">
                {notice}
              </p>
            )}
          </section>
        </div>
      )}
         </main>

    
    </>
  );
}

export default PayTuitionFee;