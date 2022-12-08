import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
