import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import AddMovie from "./pages/AddMovie/AddMovie.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { MessageProvider } from "./context/MessageContext/MessageContext.jsx";
import EditMovie from "./pages/EditMovie/EditMovie.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/movies"
            element={
              <Layout>
                <Movies />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/add-movie"
            element={
              <Layout>
                <AddMovie />
              </Layout>
            }
          />
          <Route
            path="/movie-details"
            element={
              <Layout>
                <MovieDetails />
              </Layout>
            }
          />
          <Route
            path="/edit-movie"
            element={
              <Layout>
                <EditMovie />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </MessageProvider>
  </StrictMode>,
);
