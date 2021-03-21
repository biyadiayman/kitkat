import React from "react";

import workanywhere from "./assets/images/workanywhere.svg";
import coffeebreak from "./assets/images/coffeebreak.svg";
import pilates from "./assets/images/pilates.svg";
import workout from "./assets/images/workout.svg";

const LandingPage = () => {
  return (
    <>
      <nav class="navbar">
        <div class="nav-container">
          <a href="/" class="logo">
            <i class="bx bx-spa"></i> NIRVANA
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a class="nav-links" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-links nav-features" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-links nav-button" href="#">
                Get Started
              </a>
            </li>
          </ul>
          <div class="burger" id="mobile-menu">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
      </nav>

      <section class="hero">
        <div class="hero-container">
          <div class="hero-header">
            <h1 class="hero-title">
              Take a deep <br />
              breath...
            </h1>
            <p class="hero-description">
              Stressed out or just need to take a break? Join us and choose your
              preferred break acitivity.
            </p>
            <a href="#" class="hero-button">
              Get Started
            </a>
          </div>
          <div class="hero-img">
            <img src={workanywhere} alt="work" width="500px" />
          </div>
        </div>
      </section>

      <section class="features">
        <div class="features-container">
          <ul>
            <li class="feature1">
              <div class="img-container one">
                <img src={coffeebreak} alt="coffee break" width="150px" />
              </div>
              <p class="title one">Virtual Coffee Break</p>
              <p class="f1 desc">
                Send invites to your friends and colleagues to meet up virtually
                for chat and a cup of coffee
              </p>
            </li>
            <li class="feature2">
              <div class="img-container two">
                <img src={pilates} alt="pilates" width="150px" />
              </div>
              <p class="title two">Stretch & Exercise</p>
              <p class="f2 desc">
                Stretch out and workout after long hours of sitting down.
              </p>
            </li>
            <li class="feature3">
              <div class="img-container three">
                <img src={workout} alt="workout" width="130px" />
              </div>
              <p class="title three">Focus & Breathe</p>
              <p class="f3 desc">Inhale..... Exhale.....</p>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <div class="footer-wrapper">
          <div class="row">
            <div class="footer-col">
              <h4>Info</h4>
              <ul class="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Follow Us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="copy">Copyright &copy; 2021, NIRVANA.</p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
