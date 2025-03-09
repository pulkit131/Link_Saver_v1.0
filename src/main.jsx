import { StrictMode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='467479247193-a74jua9hateevea47i154feekf1o5926.apps.googleusercontent.com'>
  <StrictMode>
    <App />
  </StrictMode>
  </GoogleOAuthProvider>,
)
