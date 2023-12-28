import React from 'react'

export default function ButtonsHeader( props ) {

  const { formatedMessage , downloadCV } = props;

  return (
    <>
        <div className="aboutme__buttons">
            <input type="button" id="buttons__btn-readmore" onClick={()=>{
              $('html,body').animate({
                scrollTop: $('#section__contact').offset().top
                }, 0);
            }} value={formatedMessage.button_left} />
            <input type="button" id="buttons__btn-downloadcv" onClick={downloadCV} value={formatedMessage.button_right} />
        </div>
    </>
  )
}
