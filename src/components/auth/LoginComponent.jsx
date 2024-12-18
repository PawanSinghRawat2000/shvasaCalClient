import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";

function LoginComponent({ setShowLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        const response = await postData("emailLogin", data);
        if (response.error) {
            alert(response.error);
            return;
        }
        localStorage.setItem("user", response.user.email);
        navigate("/calendar");

    };

    useEffect(() => {
        if (localStorage.getItem("user")) navigate("/calendar");
    }, [navigate]);
    return (
        <form onSubmit={handleEmailLogin} method="POST">
            <div className="authPopup">
                <div className="authPopupHeading">
                    Sign in to your account
                </div>
                <div className="authSocial">
                    <div className="authInput">
                        <p>Email Address</p>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="authInput">
                        <p>Password</p>
                        <div className="passwordInput">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="Enter your password"
                                style={{
                                    paddingRight: "40px",
                                    width: "100%",
                                }}
                                required
                            />
                            {passwordVisible ? (
                                <svg
                                    onClick={togglePasswordVisibility}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M17.8822 19.297C16.1234 20.4126 14.0829 21.0033 12.0002 21C6.60815 21 2.12215 17.12 1.18115 12C1.61118 9.67072 2.78278 7.5429 4.52115 5.93401L1.39215 2.80801L2.80715 1.39301L22.6062 21.193L21.1912 22.607L17.8822 19.297ZM5.93515 7.35001C4.57615 8.5856 3.62947 10.2088 3.22315 12C3.53544 13.3665 4.16241 14.6411 5.05415 15.7226C5.94589 16.804 7.07778 17.6624 8.3597 18.2293C9.64163 18.7962 11.0382 19.0561 12.4383 18.9881C13.8383 18.9202 15.2032 18.5264 16.4242 17.838L14.3962 15.81C13.5329 16.3538 12.5104 16.5881 11.4964 16.4744C10.4825 16.3608 9.53719 15.9059 8.81572 15.1844C8.09425 14.463 7.63938 13.5177 7.52571 12.5038C7.41205 11.4898 7.64633 10.4673 8.19015 9.604L5.93515 7.35001ZM12.9142 14.328L9.67215 11.086C9.49421 11.5389 9.45234 12.034 9.55166 12.5104C9.65097 12.9867 9.88717 13.4238 10.2313 13.7679C10.5754 14.112 11.0125 14.3482 11.4889 14.4475C11.9652 14.5468 12.4603 14.5049 12.9132 14.327L12.9142 14.328ZM20.8072 16.592L19.3762 15.162C20.0447 14.2093 20.5206 13.1352 20.7772 12C20.5054 10.8097 19.9945 9.68715 19.2753 8.70049C18.5562 7.71384 17.644 6.88373 16.5941 6.26061C15.5442 5.63749 14.3785 5.23437 13.1679 5.07577C11.9574 4.91717 10.7272 5.00638 9.55215 5.33801L7.97415 3.76001C9.22115 3.27001 10.5802 3.00001 12.0002 3.00001C17.3922 3.00001 21.8782 6.88001 22.8192 12C22.5128 13.6657 21.8241 15.2376 20.8072 16.592ZM11.7232 7.50801C12.3597 7.46867 12.9973 7.56507 13.5937 7.79082C14.1902 8.01657 14.7318 8.36652 15.1827 8.81746C15.6337 9.2684 15.9836 9.81003 16.2094 10.4065C16.4351 11.0029 16.5315 11.6405 16.4922 12.277L11.7232 7.50801Z"
                                        fill="#888888"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    onClick={togglePasswordVisibility}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M17.8822 19.297C16.1234 20.4126 14.0829 21.0033 12.0002 21C6.60815 21 2.12215 17.12 1.18115 12C1.61118 9.67072 2.78278 7.5429 4.52115 5.93401L1.39215 2.80801L2.80715 1.39301L22.6062 21.193L21.1912 22.607L17.8822 19.297ZM5.93515 7.35001C4.57615 8.5856 3.62947 10.2088 3.22315 12C3.53544 13.3665 4.16241 14.6411 5.05415 15.7226C5.94589 16.804 7.07778 17.6624 8.3597 18.2293C9.64163 18.7962 11.0382 19.0561 12.4383 18.9881C13.8383 18.9202 15.2032 18.5264 16.4242 17.838L14.3962 15.81C13.5329 16.3538 12.5104 16.5881 11.4964 16.4744C10.4825 16.3608 9.53719 15.9059 8.81572 15.1844C8.09425 14.463 7.63938 13.5177 7.52571 12.5038C7.41205 11.4898 7.64633 10.4673 8.19015 9.604L5.93515 7.35001ZM12.9142 14.328L9.67215 11.086C9.49421 11.5389 9.45234 12.034 9.55166 12.5104C9.65097 12.9867 9.88717 13.4238 10.2313 13.7679C10.5754 14.112 11.0125 14.3482 11.4889 14.4475C11.9652 14.5468 12.4603 14.5049 12.9132 14.327L12.9142 14.328ZM20.8072 16.592L19.3762 15.162C20.0447 14.2093 20.5206 13.1352 20.7772 12C20.5054 10.8097 19.9945 9.68715 19.2753 8.70049C18.5562 7.71384 17.644 6.88373 16.5941 6.26061C15.5442 5.63749 14.3785 5.23437 13.1679 5.07577C11.9574 4.91717 10.7272 5.00638 9.55215 5.33801L7.97415 3.76001C9.22115 3.27001 10.5802 3.00001 12.0002 3.00001C17.3922 3.00001 21.8782 6.88001 22.8192 12C22.5128 13.6657 21.8241 15.2376 20.8072 16.592ZM11.7232 7.50801C12.3597 7.46867 12.9973 7.56507 13.5937 7.79082C14.1902 8.01657 14.7318 8.36652 15.1827 8.81746C15.6337 9.2684 15.9836 9.81003 16.2094 10.4065C16.4351 11.0029 16.5315 11.6405 16.4922 12.277L11.7232 7.50801Z"
                                        fill="#888888"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                <button className="authSignin" type="submit">
                    Sign in
                </button>
                <p className="authNewText">
                    New around here? &nbsp;
                    <span onClick={() => setShowLogin(false)}>
                        Signup for Free
                    </span>
                </p>
            </div>
        </form>
    );
}

export default LoginComponent;
