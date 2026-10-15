
import { useParams, Link } from "react-router-dom";

function PropertyDetails() {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">

                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                    Property Details
                </h1>

                <p className="mb-6 text-gray-600">
                    Property ID: {id}
                </p>

                <p className="mb-6 text-gray-500">
                    Property information will be displayed here.
                </p>

                <Link
                    to="/properties"
                    className="inline-block rounded-lg bg-red-600 px-5 py-3 text-white no-underline hover:bg-red-700"
                >
                    Back to Properties
                </Link>

            </div>
        </div>
    );
}

export default PropertyDetails;
