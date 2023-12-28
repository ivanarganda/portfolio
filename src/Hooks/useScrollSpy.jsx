import React,{ useState , useEffect } from 'react'

export const useScrollSpy = ( optionLinks )=>{
  // Scroll spy, take an observ on each section to as user scrolls a section, mark his correspond icon of navbar header
  useEffect(() => {

    const options_links = optionLinks;

    const observation = new IntersectionObserver((entries) => {
      entries.forEach((entrie) => {
        if (entrie.isIntersecting) {
          options_links.forEach((icon) => {
            $(icon).removeClass('active');
            const currentId = '#' + entrie.target.id;
            if ($(icon).prop("id") === currentId) {
              $(icon).addClass('active');
            }
          })
        }
      })
    }, {
      threshold: 0.2,
      root: null,
      rootMargin: '100px 0px -200px 0px'
    });

    document.querySelectorAll('.sections').forEach((header) => {
      observation.observe(header);
    })

    return () => {
      observation.disconnect();
    }

  }, [ optionLinks ])
  
}
