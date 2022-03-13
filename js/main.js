"use strict";

const ready = function (cb) {
    document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", function (e) {
            cb();
        })
        : cb();
};
  
  // Usage
ready( () => {
    //Toggle site-nav on site-header__toggler click
    let menuBtn = document.querySelector('.menu-btn');
    let elSitenav = document.querySelector('.site-nav');
    let menuOpen = false;


    menuBtn.addEventListener('click', () => {
        elSitenav.classList.toggle('sitenav--open');
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    })

    
});
