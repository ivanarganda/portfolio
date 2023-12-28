export const useNavigationScroll = ()=> {

    // Functions and Events scroll
    const scrollTo = (selector) => {

        $('html,body').animate({
        scrollTop: $(selector).offset().top
        }, 0);

    }

    return [ scrollTo ];

}
