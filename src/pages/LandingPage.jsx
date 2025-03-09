import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // Check if user is already logged in
  const checkUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  };

  const responseMessage = (response) => {
    console.log("Google Login Success:", response);

    // Save user info in localStorage
    localStorage.setItem("user", JSON.stringify(response));

    navigate("/dashboard"); // Redirect after login
  };

  const errorMessage = (error) => {
    console.log("Google Login Failed:", error);
  };

  // Run checkUser when component mounts
  checkUser();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #1E1E2A, #2D2D44)",
        color: "#FFFFFF",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
        Welcome to My Website
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px", marginBottom: "20px" }}>
        Sign in with Google to explore more!
      </p>
      {/* Google Button Wrapper */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </div>
  );
};

export default LandingPage;
