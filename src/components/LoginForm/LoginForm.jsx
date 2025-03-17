import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const authService = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(formData.email, formData.password);
      navigate("/movies", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className={styles["auth-form"]}>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} id="login-form">
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            id="email"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Mot de passe</label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            id="password"
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
