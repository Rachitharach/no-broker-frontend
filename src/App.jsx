import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import BuyerPlan from "./components/Navbar/BuyerPlan";
import OwnerPlan from "./components/Navbar/OwnerPlan";
import Home from "./components/Home/Home";
import Login from "./Pages/Login";
import PostProperty from "./Pages/PostProperty";
import PayTuitionFee from "./Pages/PayTuitionFee";
import Properties from "./Pages/Properties";
import BuildersEnquire from "./components/Services/BildersEnquire";
import Testimonials from "./components/Services/Testimonials";
import InfoPage from "./components/Services/InfoPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pages that need the main navbar */}
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <>
                            <Navbar />
                            <Login />
                        </>
                    }
                />

                <Route
                    path="/post-property"
                    element={
                        <>
                            <Navbar />
                            <PostProperty />
                        </>
                    }
                />
                <Route
                    path="/buyer-plans"
                    element={
                        <>
                            <Navbar />
                            <BuyerPlan />
                        </>
                    }
                />
                        <Route path="/owner-plans" element={
                                <>
                                    <Navbar /> <OwnerPlan /> 
                                </> 
                        } />


                        {/* Separate header inside PayTuitionFee */}
                        <Route path="/pay-tuition-fee" element={<PayTuitionFee />}/>

                        <Route path="/properties" element={<Properties />} />

                        <Route  path="/builder-enquiry"element={<BuildersEnquire />}/>

                        <Route
                            path="/testimonials"
                            element={<Testimonials />}
                        />

                    {/* Footer information pages */}
                        <Route path="/info/:slug" element={
                            <>
                            <Navbar/>
                            <InfoPage/>
                            </>
                    } />
                        


            </Routes>
        </BrowserRouter>
    );
}

export default App;