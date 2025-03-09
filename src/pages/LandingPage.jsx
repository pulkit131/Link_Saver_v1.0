import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    // Load Google API script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleLogin = () => {
    window.google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      callback: (response) => console.log("Google Login Response:", response),
    });

    window.google.accounts.id.prompt();
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My Website</h1>
      <p>This is a simple landing page. Customization coming soon!</p>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Log in with Google
      </button>
    </div>
  );
};

export default LandingPage;
