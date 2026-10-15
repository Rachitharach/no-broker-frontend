
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();

    const [step, setStep] = useState("phone");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const [whatsapp, setWhatsapp] = useState(true);

    // Validate mobile number
    function handlePhoneSubmit(e) {
        e.preventDefault();
        setError("");

        if (!/^[6-9]\d{9}$/.test(mobile)) {
            setError("Enter a valid 10-digit mobile number.");
            return;
        }

        setStep("otp");
    }

    // Update OTP digits
    function handleOtpChange(index, value) {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError("");
    }

    // Submit OTP
    function handleOtpSubmit(e) {
        e.preventDefault();

        if (otp.join("").length !== 6) {
            setError("Please enter all 6 digits.");
        } else {
            setError("Real OTP verification needs a backend.");
        }
    }

    // Change mobile number
    function changePhone() {
        setStep("phone");
        setOtp(["", "", "", "", "", ""]);
        setError("");
    }

    // WhatsApp toggle
    function WhatsAppOption() {
        return (
            <div className="flex h-[44px] items-center justify-between border border-gray-200 bg-[#fafafa] px-3">
                <span className="flex items-center gap-1 text-sm text-[#333]">
                    Get updates on
                    <FaWhatsapp className="ml-0.5 text-[17px] text-[#25D366]" />
                    WhatsApp
                </span>

                <label className="relative inline-flex cursor-pointer items-center">
                    <input
                        type="checkbox"
                        checked={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.checked)}
                        className="peer sr-only"
                    />

                    <span className="h-[18px] w-[30px] rounded-full bg-gray-300 transition-colors peer-checked:bg-[#009688]"></span>

                    <span className="absolute left-[2px] h-[14px] w-[14px] rounded-full bg-white shadow transition-transform peer-checked:translate-x-3"></span>
                </label>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-3 py-5 font-sans">

            {/* Login modal */}
            <div className="relative grid min-h-[550px] w-full max-w-[735px] grid-cols-1 overflow-hidden bg-white md:grid-cols-[40%_60%] mt-6">

                {/* Close button */}
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    aria-label="Close login"
                    className="absolute right-5 top-5 z-20 text-black"
                >
                    <X size={23} strokeWidth={2.5} />
                </button>

                {/* LEFT PANEL */}
                <div className="flex flex-col justify-center bg-[#f8f8f8] px-[30px] py-8">

                    {/* NoBroker illustration */}
                    <div className="mb-5 flex justify-start">
                        <img
                            src="/signupHome.png"
                            alt="NoBroker house illustration"
                            className="h-[105px] w-[110px] object-contain"
                        />
                    </div>

                    <h2 className="mb-3 text-[18px] font-semibold text-[#292929]">
                        Login / Sign up
                    </h2>

                    <ul className="space-y-3 text-[14px] text-[#555]">
                        <li className="flex items-center gap-1.5">
                            <Check size={14} className="text-gray-500" />
                            Zero Brokerage.
                        </li>

                        <li className="flex items-center gap-1.5">
                            <Check size={14} className="text-gray-500" />
                            Thousands of new listings daily.
                        </li>

                        <li className="flex items-center gap-1.5">
                            <Check size={14} className="text-gray-500" />
                            100 Cr+ Brokerage saved monthly.
                        </li>
                    </ul>
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-white px-7 pb-8 pt-[58px] sm:px-11">

                    {step === "phone" ? (
                        <>
                            <h1 className="mb-[21px] text-[18px] font-semibold text-[#292929]">
                                Enter phone to continue
                            </h1>

                            <form onSubmit={handlePhoneSubmit}>

                                {/* Mobile input */}
                                <div className="flex h-[44px] items-center border border-[#ccc] bg-white">
                                    <span className="flex shrink-0 items-center gap-1.5 px-2 text-[13px] text-[#333]">
                                        <span className="text-[18px]">🇮🇳</span>
                                        +91
                                        <span className="text-[10px]">▾</span>
                                    </span>

                                    <input
                                        type="tel"
                                        inputMode="numeric"
                                        maxLength={10}
                                        value={mobile}
                                        onChange={(e) => {
                                            setMobile(
                                                e.target.value.replace(/\D/g, "")
                                            );
                                            setError("");
                                        }}
                                        placeholder="Enter Mobile Number"
                                        className="h-full min-w-0 flex-1 px-2 text-[14px] text-[#333] outline-none"
                                    />
                                </div>

                                {/* WhatsApp option */}
                                <WhatsAppOption />

                                {error && (
                                    <p className="mt-2 text-xs text-red-600">
                                        {error}
                                    </p>
                                )}

                                {/* Continue button */}
                                <button
                                    type="submit"
                                    className="mt-[33px] h-[44px] w-full rounded-[3px] bg-[#ff385c] text-[14px] font-semibold text-white transition-colors hover:bg-[#f3294e]"
                                >
                                    Continue
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <h1 className="mb-[21px] text-[18px] font-semibold text-[#292929]">
                                Enter OTP or Password
                            </h1>

                            {/* Mobile details */}
                            <div className="border border-gray-200 bg-[#fafafa]">
                                <div className="flex h-[44px] items-center justify-between border-b border-gray-200 px-3 text-sm">
                                    <span>+91 {mobile}</span>

                                    <button
                                        type="button"
                                        onClick={changePhone}
                                        className="text-[13px] text-teal-600 underline"
                                    >
                                        Change Phone
                                    </button>
                                </div>

                                <WhatsAppOption />
                            </div>

                            <form onSubmit={handleOtpSubmit}>
                                <p className="mb-8 mt-10 text-[14px] text-[#333]">
                                    Enter OTP here
                                </p>

                                {/* OTP boxes */}
                                <div className="flex justify-between gap-2">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) =>
                                                handleOtpChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            className="h-10 w-full min-w-0 border-b border-gray-300 text-center text-lg outline-none focus:border-teal-600"
                                        />
                                    ))}
                                </div>

                                {error && (
                                    <p className="mt-3 text-xs text-red-600">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="mt-8 h-[44px] w-full rounded-[3px] bg-[#ff385c] text-[14px] font-semibold text-white hover:bg-[#f3294e]"
                                >
                                    Continue
                                </button>
                            </form>
                        </>
                    )}

                    {/* Terms and conditions */}
                    <p className="mt-[14px] text-center text-[10px] leading-[19px] text-[#38445a]">
                        By clicking Continue, you agree to subscribe to NoBroker
                        services, including updates and communications as per
                        our{" "}
                        <span className="font-semibold text-black">
                            Terms &amp; Conditions.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
