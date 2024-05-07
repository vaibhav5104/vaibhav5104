import React, { useEffect } from 'react';
import Nav from './components/Navbar';
import Home from './components/Home';
import Event from './components/Events';
import Explore from './components/Explore';
import City from './components/City';
import {
    handleSectionClick,
    handleAboutMouseOver,
    handleInputChange,
    toggleDarkMode,
    scrollFunction,
    scrollToTop,
    updateNavbar
} from './utils';

function App() {
    useEffect(() => {
        if (window.screen.width <= 1130) {
            const sections = document.querySelectorAll("#sec, #pri, #tri, #quad, #quint, #hex, #hept");
            sections.forEach(section => {
                section.addEventListener("click", () => handleSectionClick(section.id));
            });
        }

        const about = document.getElementById("about");
        if (about) {
            about.addEventListener("mouseover", handleAboutMouseOver);
        }

        const input = document.querySelector("input");
        if (input) {
            input.addEventListener("change", handleInputChange);
        }

        window.addEventListener("scroll", scrollFunction);

        // Light/Dark toggle
        const checkbox = document.getElementById("checkbox");
        if (checkbox) {
            checkbox.addEventListener("change", toggleDarkMode);
        }

        return () => {
            // Cleanup event listeners
            const sections = document.querySelectorAll("#sec, #pri, #tri, #quad, #quint, #hex, #hept");
            sections.forEach(section => {
                section.removeEventListener("click", () => handleSectionClick(section.id));
            });

            if (about) {
                about.removeEventListener("mouseover", handleAboutMouseOver);
            }
            if (input) {
                input.removeEventListener("change", handleInputChange);
            }
            window.removeEventListener("scroll", scrollFunction);
            if (checkbox) {
                checkbox.removeEventListener("change", toggleDarkMode);
            }
        };
    }, []); // Run once on component mount

    return (
        <>
            <Nav />
            

        </>
    );
}

export default App;
