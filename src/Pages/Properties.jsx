
import { useLocation } from "react-router-dom";
import "./Properties.css";

function Properties() {
    const query = new URLSearchParams(useLocation().search);

    const city = query.get("city") || "Bangalore";
    const location = query.get("location") || "";
    const type = query.get("type") || "Buy";

    // Sample properties directly inside this file
    const properties = [
        {
            id: 1,
            title: "2 BHK Flat in Whitefield",
            city: "Bangalore",
            location: "Whitefield",
            type: "Buy",
            price: 4500000,
            bhk: "2 BHK",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
        },
        {
            id: 2,
            title: "3 BHK Apartment in Whitefield",
            city: "Bangalore",
            location: "Whitefield",
            type: "Buy",
            price: 6500000,
            bhk: "3 BHK",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
        },
        {
            id: 3,
            title: "1 BHK Flat in Koramangala",
            city: "Bangalore",
            location: "Koramangala",
            type: "Buy",
            price: 3500000,
            bhk: "1 BHK",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
        }
    ];

    const filteredProperties = properties.filter((property) => {
        const matchesCity =
            property.city.toLowerCase() === city.toLowerCase();

        const matchesLocation =
            !location ||
            property.location.toLowerCase().includes(location.toLowerCase());

        const matchesType =
            property.type.toLowerCase() === type.toLowerCase();

        return matchesCity && matchesLocation && matchesType;
    });

    return (
        <div className="properties-page">
            <h2>Properties for {type} in {location || city}</h2>

            <p>{filteredProperties.length} properties found</p>

            <div className="properties-grid">
                {filteredProperties.map((property) => (
                    <div className="property-card" key={property.id}>
                        <img src={property.image} alt={property.title} />

                        <div className="property-info">
                            <h3>{property.title}</h3>
                            <p>{property.location}, {property.city}</p>
                            <h3>₹{property.price.toLocaleString("en-IN")}</h3>
                            <p>{property.bhk}</p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProperties.length === 0 && (
                <p>No matching properties found. Try another location.</p>
            )}
        </div>
    );
}

export default Properties;
