import React, { useState , useCallback } from 'react'
import englishMessages from './../lang/en-UK.json';
import spanishMessages from './../lang/es-ES.json';
import frenchMessages from './../lang/fr-FR.json'; 

export const useLanguage = ()=>{

    const [ language , setLanguage ] = useState(englishMessages);

    const changeLanguage = useCallback(( lang )=>{
    
        let languages = {
          "es":spanishMessages,
          "en":englishMessages,
          "fr":frenchMessages
        }
    
        setLanguage( languages[lang] );
        
      },[ language ])

      return [ language , changeLanguage ];
    
}
