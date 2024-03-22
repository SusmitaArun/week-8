import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS for styling

const LoginPage = ({ redirectToEventPage }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (isLogin) {
      // Login logic
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        if (response.ok) {
          console.log('Login successful');
          // Redirect to dashboard upon successful login
          redirectToDashboard();
        } else {
          console.error('Login failed');
          // Handle login failure here
        }
      } catch (error) {
        console.error('Error occurred during login:', error);
        // Handle network errors or other errors here
      }
    } else {
      // Registration logic
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        if (response.ok) {
          console.log('Registration successful');
          // Optionally, you can redirect the user to login after registration
          setIsLogin(true);
        } else {
          console.error('Registration failed');
          // Handle registration failure here
        }
      } catch (error) {
        console.error('Error occurred during registration:', error);
        // Handle network errors or other errors here
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          {!isLogin && (
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </label>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p>{isLogin ? "Don't have an account?" : "Already have an account?"} <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Register' : 'Login'}</button></p>
      </div>
    </div>
  );
};

export default LoginPage;
LoginPage.jsx
LoginPage.jsx
