import React , { useState , useEffect } from 'react'

export const useProgressNavigationScroll = ( scrollY )=>{

    const [scrollHeight, setScrollHeight] = useState( scrollY );

    const updateScrollHeight = () => {

        setScrollHeight($(document).scrollTop() * 1.8);
    
    }

    useEffect(() => {

        updateScrollHeight();
        document.addEventListener('scroll', updateScrollHeight);
    
        return () => {
          document.removeEventListener('scroll', updateScrollHeight)
        }
    
      }, [ updateScrollHeight, scrollHeight])

    return [ scrollHeight , updateScrollHeight ];

}
