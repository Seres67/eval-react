import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const authService = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authService.register(
      formData.username,
      formData.email,
      formData.password,
    );
    navigate("/movies", { replace: true });
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
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit} id="register-form">
        <div className={styles["form-group"]}>
          <label htmlFor="nickname">Pseudo</label>
          <input
            onChange={handleChange}
            value={formData.username}
            type="text"
            id="username"
            required
          />
        </div>
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
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterForm;
