import React from 'react'

export default function Text( props ) {

  const { formatedMessage , type } = props;

  var typeTexts = {
    'header': formatedMessage, 
    'aboutme': formatedMessage
  }

  return (

    <>
        {typeTexts[ type ]}
    </>

  )
}
