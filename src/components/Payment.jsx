import React, { useState } from "react";
import axios from "axios";

function Payment({ booking, onPaymentSuccess, onBack }) {

    const [paymentMethod, setPaymentMethod] = useState("");
    const [isPaying, setIsPaying] = useState(false);

    const handlePayment = async () => {

        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        setIsPaying(true);

        try {

            console.log("Booking being sent:", booking);

            // Save booking in backend
            const response = await axios.post(
                "http://localhost:8080/movies",
                booking
            );

            console.log(
                "Booking saved successfully:",
                response.data
            );

            setIsPaying(false);

            /*
             * Payment is successful and booking is saved.
             * Send the saved booking to DigitalTicket.jsx
             */
            onPaymentSuccess(response.data);

        } catch (error) {

            console.error(
                "Error saving booking:",
                error
            );

            setIsPaying(false);

            alert(
                "Payment was successful, but booking could not be saved. Please try again."
            );
        }
    };


    if (!booking) {

        return (
            <div className="container text-center mt-5">

                <h2>
                    No booking information available.
                </h2>

                <button
                    className="btn btn-danger mt-3"
                    onClick={onBack}
                >
                    Back
                </button>

            </div>
        );
    }


    return (

        <div
            className="container py-5"
            style={{
                minHeight: "100vh"
            }}
        >

            {/* PAGE TITLE */}

            <div className="text-center mb-4">

                <h1
                    style={{
                        color: "#65000a",
                        fontWeight: "bold"
                    }}
                >
                    💳 Payment
                </h1>

                <p className="text-muted">
                    Complete your payment to confirm your movie ticket.
                </p>

            </div>


            <div className="row justify-content-center">

                {/* PAYMENT CARD */}

                <div className="col-md-7 col-lg-6">

                    <div
                        className="card"
                        style={{
                            padding: "25px",
                            borderRadius: "18px"
                        }}
                    >

                        {/* BOOKING SUMMARY */}

                        <h4
                            style={{
                                color: "#65000a",
                                fontWeight: "bold",
                                marginBottom: "20px"
                            }}
                        >
                            🎬 Booking Summary
                        </h4>


                        <div
                            style={{
                                background: "#fff7ed",
                                padding: "18px",
                                borderRadius: "12px",
                                marginBottom: "25px"
                            }}
                        >

                            <div className="d-flex justify-content-between mb-2">

                                <strong>
                                    Movie
                                </strong>

                                <span>
                                    {booking.movieName}
                                </span>

                            </div>


                            <div className="d-flex justify-content-between mb-2">

                                <strong>
                                    Customer
                                </strong>
                                <span>
                                    {booking.customerName}
                                </span>

                            </div>


                            <div className="d-flex justify-content-between mb-2">

                                <strong>
                                    Show Time
                                </strong>

                                <span>
                                    {booking.showTime}
                                </span>

                            </div>


                            <div className="d-flex justify-content-between mb-2">

                                <strong>
                                    Seats
                                </strong>

                                <span>
                                    🪑 {booking.seats}
                                </span>

                            </div>


                            <hr />


                            <div className="d-flex justify-content-between">

                                <strong
                                    style={{
                                        fontSize: "18px"
                                    }}
                                >
                                    Total Amount
                                </strong>

                                <strong
                                    style={{
                                        color: "#9f0d19",
                                        fontSize: "20px"
                                    }}
                                >
                                    ₹{booking.totalAmount}
                                </strong>

                            </div>

                        </div>


                        {/* PAYMENT OPTIONS */}

                        <h5
                            style={{
                                color: "#65000a",
                                fontWeight: "bold",
                                marginBottom: "15px"
                            }}
                        >
                            Select Payment Method
                        </h5>


                        {/* UPI */}

                        <div
                            onClick={() => setPaymentMethod("UPI")}
                            style={{
                                border:
                                    paymentMethod === "UPI"
                                        ? "2px solid #9f0d19"
                                        : "1px solid #ddd",

                                borderRadius: "12px",
                                padding: "15px",
                                marginBottom: "12px",
                                cursor: "pointer",
                                background:
                                    paymentMethod === "UPI"
                                        ? "#fff5f5"
                                        : "white"
                            }}
                        >

                            <div className="d-flex align-items-center">

                                <span
                                    style={{
                                        fontSize: "28px",
                                        marginRight: "12px"
                                    }}
                                >
                                    📱
                                </span>

                                <div>

                                    <strong>
                                        UPI
                                    </strong>

                                    <div
                                        className="text-muted"
                                        style={{
                                            fontSize: "13px"
                                        }}
                                    >
                                        Google Pay • PhonePe • Paytm
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* CARD */}

                        <div
                            onClick={() => setPaymentMethod("CARD")}
                            style={{
                                border:
                                    paymentMethod === "CARD"
                                        ? "2px solid #9f0d19"
                                        : "1px solid #ddd",

                                borderRadius: "12px",
                                padding: "15px",
                                marginBottom: "12px",
                                cursor: "pointer",
                                background:
                                    paymentMethod === "CARD"
                                        ? "#fff5f5"
                                        : "white"
                            }}
                        >

                            <div className="d-flex align-items-center">

                                <span
                                    style={{
                                        fontSize: "28px",
                                        marginRight: "12px"
                                    }}
                                >
                                    💳
                                </span>

                                <div>

                                    <strong>
                                        Credit / Debit Card
                                    </strong>

                                    <div
                                        className="text-muted"
                                        style={{
                                            fontSize: "13px"
                                        }}
                                    >
                                        Visa • Mastercard • RuPay
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* NET BANKING */}

                        <div
                            onClick={() =>
                                setPaymentMethod("NET BANKING")
                            }
                            style={{
                                border:
                                    paymentMethod === "NET BANKING"
                                        ? "2px solid #9f0d19"
                                        : "1px solid #ddd",

                                borderRadius: "12px",
                                padding: "15px",
                                marginBottom: "12px",
                                cursor: "pointer",
                                background:
                                    paymentMethod === "NET BANKING"
                                        ? "#fff5f5"
                                        : "white"
                            }}
                        >

                            <div className="d-flex align-items-center">

                                <span
                                    style={{
                                        fontSize: "28px",
                                        marginRight: "12px"
                                    }}
                                >
                                    🏦
                                </span>

                                <div>

                                    <strong>
                                        Net Banking
                                    </strong>

                                    <div
                                        className="text-muted"
                                        style={{
                                            fontSize: "13px"
                                        }}
                                    >
                                        Pay securely using your bank
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* WALLET */}

                        <div
                            onClick={() =>
                                setPaymentMethod("WALLET")
                            }
                            style={{
                                border:
                                    paymentMethod === "WALLET"
                                        ? "2px solid #9f0d19"
                                        : "1px solid #ddd",

                                borderRadius: "12px",
                                padding: "15px",
                                marginBottom: "20px",
                                cursor: "pointer",
                                background:
                                    paymentMethod === "WALLET"
                                        ? "#fff5f5"
                                        : "white"
                            }}
                        >

                            <div className="d-flex align-items-center">

                                <span
                                    style={{
                                        fontSize: "28px",
                                        marginRight: "12px"
                                    }}
                                >
                                    👛
                                </span>

                                <div>

                                    <strong>
                                        Wallet
                                    </strong>

                                    <div
                                        className="text-muted"
                                        style={{
                                            fontSize: "13px"
                                        }}
                                    >
                                        Pay using your digital wallet
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* SELECTED PAYMENT */}

                        {paymentMethod && (

                            <div
                                style={{
                                    background: "#f8f8f8",
                                    borderRadius: "10px",
                                    padding: "12px",
                                    marginBottom: "20px",
                                    textAlign: "center"
                                }}
                            >

                                Selected:

                                <strong
                                    style={{
                                        color: "#9f0d19",
                                        marginLeft: "5px"
                                    }}
                                >
                                    {paymentMethod}
                                </strong>

                            </div>

                        )}


                        {/* PAY BUTTON */}

                        <button
                            className="btn btn-danger w-100"
                            onClick={handlePayment}
                            disabled={isPaying}
                            style={{
                                padding: "12px",
                                fontSize: "17px"
                            }}
                        >

                            {isPaying
                                ? "Processing Payment..."
                                : `Pay ₹${booking.totalAmount}`
                            }

                        </button>


                        {/* BACK BUTTON */}
                        <button
                            className="btn btn-outline-secondary w-100 mt-2"
                            onClick={onBack}
                            disabled={isPaying}
                        >
                            ← Back
                        </button>


                        {/* SECURITY MESSAGE */}

                        <div
                            className="text-center mt-3"
                            style={{
                                fontSize: "13px",
                                color: "#777"
                            }}
                        >
                            🔒 Your payment information is secure.
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Payment;