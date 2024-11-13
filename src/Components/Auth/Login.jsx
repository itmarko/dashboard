import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Widget/Context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    // const user = sessionStorage.getItem("user");
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!formData.username || !formData.password) {
      setError("Please fill in both fields.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/cities/login",
        formData,
        { withCredentials: true }
      );
      console.log("Login successful:", response.data);
      login();
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setError("Invalid username/email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-14">
          <div className="max-w-md mx-auto">
            {/* <h1 className="text-2xl font-bold text-center">LOG IN</h1> */}

            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                LOG IN
              </span>
            </h1>
            <p className="text-center text-gray-600 text-lg mb-6">
              Welcome back! Please log in to continue.
            </p>

            <form onSubmit={handleLogin}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Email Address"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      placeholder="Password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 text-white rounded-full transition duration-300 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-br from-teal-500 to-blue-600 hover:from-pink-500 hover:to-orange-500"
                    }`}
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>
              </div>
              {/* {error && <p className="text-red-700 py-1">{error}</p>} */}
            </form>
            <div className="text-center text-gray-600">
              New User?{" "}
              <Link
                to="/create-user-account"
                className="text-blue-500 hover:underline"
              >
                Create Account
              </Link>
            </div>
            <div className="w-full flex justify-center mt-3">
              <button className="flex items-center justify-center w-fit bg-white border border-gray-300 rounded-lg shadow px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 transition duration-200">
                {/* Google SVG icon */}
                <svg
                  className="h-6 w-6 mr-3 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="w-full flex justify-center mt-1">
              <button className="flex items-center justify-center w-fit bg-white border border-gray-300 rounded-lg shadow px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 transition duration-200">
                {/* Facebook SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  className="h-6 w-6 mr-2"
                >
                  <path
                    fill="#4267B2"
                    d="M22,12C22,6.5,17.5,2,12,2S2,6.5,2,12c0,5,3.7,9.1,8.5,9.9v-7H8v-3h2.5V9.7c0-2.5,1.5-3.9,3.7-3.9c1.1,0,2,0.1,2.3,0.1v2.6h-1.6c-1.3,0-1.6,0.8-1.6,1.5v1.8h3.1l-0.5,3H14.3v7C19.3,21.1,22,17,22,12z"
                  />
                </svg>
                <span className="text-center">Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
