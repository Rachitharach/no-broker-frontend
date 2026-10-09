import "./Home.css";
import Services from "../Services/Services";

function Home() {
    return (
        <>
        {/* Search*/}
        <main className="home">

            <h1>
                World's largest NoBrokerage Property Site
            </h1>

            <div className="guarantee">
                <span>🏠 Home Interiors</span>
                <span>|</span>
                <span>🤝 45-Days Guarantee</span>
            </div>

            <div className="property-search">

                <div className="property-tabs">
                    <button className="active">Buy</button>
                    <button>Rent</button>
                    <button>Commercial</button>
                </div>

                <div className="search-row">

                    <select>
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Search upto 3 localities, societies or landmarks"
                    />

                    <button className="search-btn">
                        🔍 Search
                    </button>

                </div>

                <div className="filter-row">

                    <label>
                        <input type="radio" defaultChecked />
                        Full House
                    </label>

                    <label>
                        <input type="radio" />
                        Land/Plot
                    </label>

                    <select>
                        <option>BHK Type</option>
                    </select>

                    <select>
                        <option>Property Status</option>
                    </select>

                    <label>
                        <input type="checkbox" />
                        New Builder Projects
                    </label>

                </div>

            </div>

            <div className="owner-section">

                <p>Are you a Property Owner?</p>

                <button>
                    Post Free Property Ad
                </button>

            </div>
        </main>

        {/* Loan + services */}
        <Services />
        </>
    );
}

export default Home;