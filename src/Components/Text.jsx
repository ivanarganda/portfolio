import React from 'react'

export default function Text( props ) {

  const { formatedMessage , type } = props;

  var typeTexts = {
    'header': formatedMessage[0], 
    'aboutme': formatedMessage
  }

  return (

    <>
        {typeTexts[ type ]}
        {type=='header' && ( 
          <span onClick={()=>{
            $('html,body').animate({
              scrollTop: $('#section__aboutme').offset().top
              }, 0);
          }} style={{color:'rgb(165, 199, 28)',textTransform:'uppercase',cursor:'pointer'}} >....{formatedMessage[1]}</span>
        )}
    </>

  )
}
