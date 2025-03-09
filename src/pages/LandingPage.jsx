import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const responseMessage = (response) => {
    console.log("Google Login Success:", response);
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  const errorMessage = (error) => {
    console.log("Google Login Failed:", error);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #1E1E2A, #2D2D44)",
      color: "#FFFFFF",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
        Welcome to My Website
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px", marginBottom: "20px" }}>
        This is a beautifully styled landing page. Sign in with Google to explore more!
      </p>
      <div style={{
        background: "#F47D4A",
        padding: "10px 20px",
        borderRadius: "8px",
      }}>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </div>
  );
};

export default LandingPage;
