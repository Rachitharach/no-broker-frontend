
import { useState } from "react";
import "./Home.css";
import Services from "../Services/Services";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
    const [activeTab, setActiveTab] = useState("Buy");
    const [selectedBhk, setSelectedBhk] = useState([]);
    const navigate = useNavigate();

        const [city, setCity] = useState("Bangalore");
        const [location, setLocation] = useState("");

    const tabContent = {
        Buy: {
            banner: ["Home Interiors", "45-Days Guarantee"],
            options: ["Full House", "Land/Plot"],
            selects: ["BHK Type", "Property Status"],
            checkbox: "New Builder Projects",
        },
        Rent: {
            banner: ["Rental Agreement", "Next Day Delivery"],
            options: ["Full House", "PG/Hostel", "Flatmates"],
            selects: ["BHK Type"],
            checkbox: "",
        },
        Commercial: {
            banner: ["Rental Agreement", "Next Day Delivery"],
            options: ["Rent", "Buy"],
            selects: ["Property Type"],
            checkbox: "",
        },
    };

    const current = tabContent[activeTab];

    return (
        <>
            <main className="home">
                <h1>World's Largest NoBrokerage Property Site</h1>

                {/* Guarantee banner */}


                    <div className="guarantee">
                        <img
                            src={
                                activeTab === "Buy"
                                    ? "https://assets.nobroker.in/nob-common/HomeInteriorHome.svg"
                                    : "https://assets.nobroker.in/nob-common/HomeInteriorDeliveryHome.svg"
                            }
                            alt="announcement"
                            className="guarantee-icon"
                        />

                        <span className="guarantee-text">
                            {current.banner[0]}
                        </span>

                        <span className="guarantee-divider">|</span>

                        <img
                            src={
                                activeTab === "Buy"
                                    ? "https://assets.nobroker.in/nob-common/HomeInteriorDeliveryHome.svg"
                                    : "https://assets.nobroker.in/nob-common/HomeInteriorDeliveryHome.svg"
                            }
                            alt="delivery"
                            className="guarantee-icon"
                        />

                        <span className="guarantee-text">
                            {current.banner[1]}
                        </span>
                    </div>


                {/* Property search */}
                <div className="property-search">
                    <div className="property-tabs">
                        {["Buy", "Rent", "Commercial"].map((tab) => (
                            <button
                                key={tab}
                                className={activeTab === tab ? "active" : ""}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Location and search */}
                    <div className="search-row">
                    <select
                        className="city-select"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Pune</option>
                        <option>Chennai</option>
                        <option>Gurgaon</option>
                        <option>Hyderabad</option>
                        <option>Noida</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Search upto 3 localities, societies or landmarks"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button
                        className="search-btn"
                        onClick={() =>
                            navigate(
                                `/properties?city=${encodeURIComponent(city)}&location=${encodeURIComponent(location)}&type=${encodeURIComponent(activeTab)}`
                            )
                        }
                    >
                        <span>⌕</span> Search
                    </button>
                    </div>

                    {/* Filters */}
                    <div className="filter-row">
                        {current.options.map((option, index) => (
                            <label key={option} className="radio-option">
                                <input
                                    type="radio"
                                    name="propertyOption"
                                    value={option}
                                    defaultChecked={index === 0}
                                    key={`${activeTab}-${option}`}
                                />
                                {option}
                            </label>
                        ))}

                        {current.selects.map((selectName) => (
                            <select key={selectName} defaultValue="">
                                <option value="" disabled>
                                    {selectName}
                                </option>

                                {selectName === "BHK Type" && (
                                    <>
                                        
                                        <option>1RK</option>
                                        <option>1 BHK</option>
                                        <option>2 BHK</option>
                                        <option>3 BHK</option>
                                        <option>4+ BHK</option>
                                    </>
                                )}

                                {selectName === "Property Status" && (
                                    <>
                                        <option>Ready to Move</option>
                                        <option>Under Construction</option>
                                    </>
                                )}

                                {selectName === "Property Type" && (
                                    <>
                                        <option>Office Space</option>
                                        <option>Shop</option>
                                        <option>Showroom</option>
                                    </>
                                )}
                            </select>
                        ))}

                        {current.checkbox && (
                            <label className="builder-option">
                                <input type="checkbox" />
                                {current.checkbox}
                            </label>
                        )}
                    </div>
                </div>

                {/* Property owner section */}
                <div className="owner-section">
                    <div className="owner-title">
                        <span></span>
                        <p>Are you a Property Owner?</p>
                        <span></span>
                    </div>

                    <Link to="/post-property" className="post-btn">
                        <button type="button">
                            Post Free Property Ad
                        </button>
                    </Link>
                </div>
            </main>

            <Services />
        </>
    );
}

export default Home;
