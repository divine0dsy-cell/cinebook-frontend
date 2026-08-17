import { useState } from "react";
import logo from "../assets/cinebook-logo.jpg";

function Login({ onLogin }) {

    const [role, setRole] = useState("customer");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        // ==============================
        // ADMIN LOGIN
        // ==============================

        if (role === "admin") {

            if (
                email.trim() === "divya@gmail.com" &&
                password === "divine0dsy"
            ) {

                onLogin({
                    role: "admin",
                    email: email.trim()
                });

            } else {

                alert("Invalid Admin Email or Password");

            }

            return;
        }


        // ==============================
        // CUSTOMER LOGIN
        // ==============================

        if (email.trim() === "") {

            alert("Please enter your email.");
            return;

        }


        // Gmail validation

        const gmailPattern =
            /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@gmail\.com$/;


        if (!gmailPattern.test(email.trim())) {

            alert(
                "Please enter a valid Gmail address, for example: example@gmail.com"
            );

            return;

        }


        // Password validation

        if (password.trim() === "") {

            alert("Please enter your password.");
            return;

        }


        if (password.length < 8) {

            alert(
                "Password must be at least 8 characters long."
            );

            return;

        }


        // ==============================
        // CUSTOMER LOGIN SUCCESS
        // ==============================

        onLogin({
            role: "customer",
            email: email.trim()
        });

    };


    return (

        <div className="login-page">

            <div className="container mt-5">

                <div
                    className="card shadow-lg p-4 mx-auto"
                    style={{
                        maxWidth: "450px"
                    }}
                >

                    {/* BRAND */}

                    <div className="text-center mb-3">

                        <img
                            src={logo}
                            alt="CineBook Logo"
                            style={{
                                width: "180px",
                                height: "auto",
                                objectFit: "contain"
                            }}
                        />

                        <p
                            style={{
                                color: "#665555",
                                marginTop: "5px",
                                marginBottom: "5px",
                                fontWeight: "500"
                            }}
                        >
                            Movie Ticket Booking System
                        </p>

                    </div>


                    <h2 className="text-center mb-4">
                        Login
                    </h2>


                    {/* LOGIN AS */}

                    <div className="mb-3">

                        <label className="form-label">
                            Login As
                        </label>

                        <select
                            className="form-select"
                            value={role}
                            onChange={(e) =>
                                setRole(e.target.value)
                            }
                        >

                            <option value="customer">
                                Customer
                            </option>

                            <option value="admin">
                                Admin
                            </option>

                        </select>

                    </div>


                    {/* EMAIL */}

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter Gmail"
                        />

                    </div>


                    {/* PASSWORD */}

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter Password"
                        />

                    </div>


                    {/* LOGIN BUTTON */}

                    <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={handleLogin}
                    >
                        🎟 Login
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Login;