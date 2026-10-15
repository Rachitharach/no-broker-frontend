
import React, { useState } from "react";
import "./Services.css";

const cities = [
    {
        name: "Bangalore",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=120&h=120&fit=crop",
    },
    {
        name: "Mumbai",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=120&h=120&fit=crop",
    },
    {
        name: "Chennai",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=120&h=120&fit=crop",
    },
    {
        name: "Pune",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=120&h=120&fit=crop",
    },
    {
        name: "Hyderabad",
        image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=120&h=120&fit=crop",
    },
    {
        name: "Gurgaon",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=120&fit=crop",
    },
    {
        name: "Noida",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=120&h=120&fit=crop",
    },
];

function BuildersEnquire() {
    const [searchType, setSearchType] = useState("locality");
    const [locality, setLocality] = useState("");
    const [projectName, setProjectName] = useState("");
    const [possession, setPossession] = useState("");

    const [selectedCity, setSelectedCity] = useState("Bangalore");
    const [cityModalOpen, setCityModalOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();

        const value =
            searchType === "locality"
                ? locality.trim()
                : projectName.trim();

        if (!value) {
            alert(
                searchType === "locality"
                    ? "Please enter a locality."
                    : "Please enter a project name."
            );
            return;
        }

        alert(
            `City: ${selectedCity}\nSearch: ${value}\nPossession: ${
                possession || "Any time"
            }`
        );
    };

    return (
        <div className="builder-page">
            {/* INVESTMENT SEARCH BANNER */}
            <section className="investment-banner">
                <div className="investment-header">
                    <a href="/" className="investment-logo">
                        <img
                            src="https://assets.nobroker.in/nob-merchandise/NobrokerIconWhite.svg"
                            alt=""
                        />
                        {/* <span>NOBROKER</span> */}
                    </a>

                    <div className="investment-header-actions">
                        <button
                            type="button"
                            className="investment-city"
                            onClick={() => setCityModalOpen(true)}
                            aria-haspopup="dialog"
                            aria-expanded={cityModalOpen}
                        >
                            {selectedCity}
                            <span>⌄</span>
                        </button>

                        <button
                            type="button"
                            className="investment-login"
                            onClick={() => {
                                window.location.href = "/login";
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>

                <h1 className="investment-title">
                    Properties For Investment in {selectedCity}
                </h1>

                <div className="investment-stats">
                    <span>5,200 + Projects</span>
                    <i />
                    <span>1,700 + Developers</span>
                    <i />
                    <span>9,000 + Customers</span>
                </div>

                <form
                    className={`investment-search ${
                        searchType === "project"
                            ? "project-search-mode"
                            : ""
                    }`}
                    onSubmit={handleSearch}
                >
                    <div className="investment-tabs">
                        <button
                            type="button"
                            className={
                                searchType === "locality"
                                    ? "investment-tab active"
                                    : "investment-tab"
                            }
                            onClick={() => setSearchType("locality")}
                        >
                            Search by locality
                        </button>

                        <button
                            type="button"
                            className={
                                searchType === "project"
                                    ? "investment-tab active"
                                    : "investment-tab"
                            }
                            onClick={() => setSearchType("project")}
                        >
                            Search by project name
                        </button>
                    </div>

                    <div className="investment-search-fields">
                        <div className="investment-field">
                            <label
                                htmlFor={
                                    searchType === "locality"
                                        ? "investment-location"
                                        : "propertyName"
                                }
                            >
                                {searchType === "project" ? (
                                    <img
                                        src="https://assets.nobroker.in/nob-common/pi-builder-office.webp"
                                        alt=""
                                        className="project-name-icon"
                                    />
                                ) : (
                                    <span>⌖</span>
                                )}

                                {searchType === "locality"
                                    ? "LOCATION"
                                    : "Project Name"}
                            </label>

                            <input
                                id={
                                    searchType === "locality"
                                        ? "investment-location"
                                        : "propertyName"
                                }
                                type="text"
                                placeholder={
                                    searchType === "locality"
                                        ? "Select Locality"
                                        : "Search by project name"
                                }
                                autoComplete="off"
                                value={
                                    searchType === "locality"
                                        ? locality
                                        : projectName
                                }
                                onChange={(e) => {
                                    if (searchType === "locality") {
                                        setLocality(e.target.value);
                                    } else {
                                        setProjectName(e.target.value);
                                    }
                                }}
                            />
                        </div>

                        {searchType === "locality" && (
                            <div className="investment-field">
                                <label htmlFor="investment-possession">
                                    <span>⚿</span> POSSESSION
                                </label>

                                <select
                                    id="investment-possession"
                                    value={possession}
                                    onChange={(e) =>
                                        setPossession(e.target.value)
                                    }
                                >
                                    <option value="">Select Time</option>
                                    <option value="Ready to Move">
                                        Ready to Move
                                    </option>
                                    <option value="Under Construction">
                                        Under Construction
                                    </option>
                                </select>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="investment-submit"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </section>

            {/* CITY SELECTION MODAL */}
            {cityModalOpen && (
                <div
                    className="city-modal-overlay"
                    onClick={() => setCityModalOpen(false)}
                >
                    <div
                        className="city-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="city-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="city-modal-header">
                            <h2 id="city-modal-title">
                                Select Your City
                            </h2>

                            <button
                                type="button"
                                className="city-modal-close"
                                aria-label="Close city selection"
                                onClick={() => setCityModalOpen(false)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="city-grid">
                            {cities.map((city) => (
                                <button
                                    type="button"
                                    key={city.name}
                                    className={`city-option ${
                                        selectedCity === city.name
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedCity(city.name);
                                        setCityModalOpen(false);
                                    }}
                                >
                                    <img
                                        src={city.image}
                                        alt=""
                                    />
                                    <span>{city.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* BUILDER ENQUIRY SECTION */}
            <section className="builder-enquiry-section">
                <div className="builder-enquiry-banner">
                    <div className="builder-enquiry-image">
                        <img
                            src="https://assets.nobroker.in/nob-merchandise/image_200_1-optimized.webp"
                            alt="NoBroker expert helping a customer"
                        />
                    </div>

                    <div className="builder-enquiry-content">
                        <h2>
                            Get in touch with us to Sell or Rent Your Projects
                        </h2>

                        <p className="builder-enquiry-benefits">
                            Best price guarantee <span>|</span>
                            Zero Brokerage <span>|</span>
                            Locality experts
                        </p>

                        <form
                            className="builder-enquiry-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert(
                                    "Your enquiry has been submitted!"
                                );
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                aria-label="Name"
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Enter Mobile Number"
                                aria-label="Mobile Number"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                required
                            />

                            <button type="submit">Connect</button>
                        </form>

                        <div className="builder-enquiry-contact">
                            <p>
                                For Builder Enquiries: +91 91080 50400
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BuildersEnquire;
