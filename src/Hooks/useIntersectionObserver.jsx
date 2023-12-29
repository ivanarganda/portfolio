import React, { useState, useEffect } from 'react';

export const useIntersectionObserver = (sections) => {
  useEffect(() => {
    // Show elements initially
    $('.header__aside').animate({ 'opacity': 1 }, 1000);
    $('.header__main').animate({ 'opacity': 1 }, 2000);
    $('.overflow-description').animate({ 'opacity': 1 }, 1000);
    $('.overflow-aboutme').animate({ 'opacity': 1 }, 1000);


    $('.content__paragrah').css('opacity',0);
    $('.highlights__circles').css('opacity',0);
    $('.highlights__content').css('opacity',0);
    $('.section__projects').css('opacity',0);
    $('.section__contact').css('opacity',0);
    $('.contact__image-footer').css('opacity',0);


  }, []);

  useEffect(() => {
    const observation = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Handle intersection logic here
            $(entry.target).animate({
                'opacity':'1'
            },1000);
        } else {
            $(entry.target).animate({
                'opacity':'0'
            },1000);
        }
      });
    }, {
        threshold: 0.2,
        root: null,
        rootMargin: '100px 0px -200px 0px'
    });

    // Ensure that each section is a valid DOM element before observing
    sections.forEach(( element )=>{
        observation.observe(document.querySelector('.' + element ));
    })
    
  }, []);
};
