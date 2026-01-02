import React from "react";
import "./Scaling-Burger.css";
import gsap from "gsap";
import { useEffect } from "react";

export default function ScalingNav() {
  useEffect(() => {
    function initScalingHamburgerNavigation ( ) {
        // Toggle Navigation
        document .querySelectorAll( '[data-navigation-toggle="toggle"]' ).forEach( toggleBtn => {
          toggleBtn.addEventListener( 'click' , () => {
            const navStatusEl = document .querySelector( '[data-navigation-status]' );
            if (!navStatusEl) return ;
            if (navStatusEl.getAttribute( 'data-navigation-status' ) === 'not-active' ) {   
              navStatusEl.setAttribute( 'data-navigation-status' , 'active' );
              // If you use Lenis you can 'stop' Lenis here: Example Lenis.stop();
            } else {
              navStatusEl.setAttribute( 'data-navigation-status' , 'not-active' );
              // If you use Lenis you can 'start' Lenis here: Example Lenis.start();
            }
          });
        });
      
        // Close Navigation
        document .querySelectorAll( '[data-navigation-toggle="close"]' ).forEach( closeBtn => {
          closeBtn.addEventListener( 'click' , () => {
            const navStatusEl = document .querySelector( '[data-navigation-status]' );
            if (!navStatusEl) return ;
            navStatusEl.setAttribute( 'data-navigation-status' , 'not-active' );
            // If you use Lenis you can 'start' Lenis here: Example Lenis.start();
          });
        });
      
        // Key ESC - Close Navigation
        document .addEventListener( 'keydown' , e => {
          if (e.keyCode === 27 ) {
            const navStatusEl = document .querySelector( '[data-navigation-status]' );
            if (!navStatusEl) return ;
            if (navStatusEl.getAttribute( 'data-navigation-status' ) === 'active' ) {
              navStatusEl.setAttribute( 'data-navigation-status' , 'not-active' );
              // If you use Lenis you can 'start' Lenis here: Example Lenis.start();
            }
          }
        });
      }
      
      // Initialize Scaling Hamburger Navigation
      document .addEventListener( 'DOMContentLoaded' , function ( ) {
        initScalingHamburgerNavigation();
      });
  }, []);
  return (
    <nav data-navigation-status="not-active" className="navigation">
    <div data-navigation-toggle="close" className="navigation__dark-bg"></div>
    <div className="hamburger-nav">
      <div className="hamburger-nav__bg"></div>
      <div className="hamburger-nav__group">
        <p className="hamburger-nav__menu-p">Menu</p>
        <ul className="hamburger-nav__ul">
          <div className="hamburger-nav__li">
            <a href="index.html" aria-current="page" className="hamburger-nav__a">
              <p className="hamburger-nav__p">Home</p>
              <div className="hamburger-nav__dot"></div>
            </a>
          </div>
          <div className="hamburger-nav__li">
            <a href="#" className="hamburger-nav__a">
              <p className="hamburger-nav__p">Portfolio</p>
              <div className="hamburger-nav__dot"></div>
            </a>
          </div>
          <div className="hamburger-nav__li">
            <a href="#" className="hamburger-nav__a">
              <p className="hamburger-nav__p">Our Expertises</p>
              <div className="hamburger-nav__dot"></div>
            </a>
          </div>
          <div className="hamburger-nav__li">
            <a href="#" className="hamburger-nav__a">
              <p className="hamburger-nav__p">Services</p>
              <div className="hamburger-nav__dot"></div>
            </a>
          </div>
          <div className="hamburger-nav__li">
            <a href="#" className="hamburger-nav__a">
              <p className="hamburger-nav__p">About</p>
              <div className="hamburger-nav__dot"></div>
            </a>
          </div>
          <div className="hamburger-nav__li">
            <a href="#" className="hamburger-nav__a">
              <p className="hamburger-nav__p">Contact</p>
              <div className="hamburger-nav__dot"></div>
            </a>
          </div>
        </ul>
      </div>
      <div data-navigation-toggle="toggle" className="hamburger-nav__toggle">
        <div className="hamburger-nav__toggle-bar"></div>
        <div className="hamburger-nav__toggle-bar"></div>
      </div>
    </div>
  </nav>
  
  );
}

