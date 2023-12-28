import React , { useState , useCallback , useEffect } from 'react'

export const useResizeWindow = ()=>{

    const [headerWidth, setHeaderWidth] = useState(window.innerWidth);
    const [decrement, setDecrement] = useState(20);
    const [isMobile, setIsMobile] = useState(false);

    const updateHeaderWidth = () => {

        // Check the user agent string for common mobile keywords
        var mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'iemobile', 'opera mini', 'windows phone', 'windows mobile', 'symbian', 'mobile', 'mini', 'palm', 'smartphone'];
        var userAgent = navigator.userAgent.toLowerCase();
    
    
    
        for (var i = 0; i < mobileKeywords.length; i++) {
          if (userAgent.indexOf(mobileKeywords[i]) > -1) {
            setIsMobile(true);
            break;
          }
        }
    
        if (isMobile && window.innerWidth < 700) {
          if (window.innerWidth < 400) {
            setDecrement(0);
          }
        }
    
        setHeaderWidth(window.innerWidth - decrement);
    
      }

      // EVENT RESIZE
        useEffect(() => {
            updateHeaderWidth(); // Set initial header width
            window.addEventListener('resize', updateHeaderWidth);

            // Remove the event listener when the component unmounts
            return () => {
            window.removeEventListener('resize', updateHeaderWidth);
            };

        }, [updateHeaderWidth])

    return [ headerWidth ];

}
