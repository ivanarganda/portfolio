import React , { useEffect , useCallback } from 'react'

export const useLoadDescriptionText = ( formatedMessage )=>{
    const textLoad = useCallback(()=>{

        const description_job = $('.overflow-description .aside__description__job');
  
        description_job.text( "" ); 
  
        setTimeout(()=>{
  
            description_job.text( "" ); 
  
            description_job.removeClass("profession").addClass("name");
  
            description_job.text( formatedMessage.header.description_me ); 
  
        },0);
  
        setTimeout(()=>{
  
            description_job.text( "" ); 
  
            description_job.removeClass("name").addClass("profession");
  
            description_job.text( formatedMessage.header.description_job );
  
        },2000);
  
    },[formatedMessage])
  
    useEffect(()=>{
      
      textLoad();
      const loadText = setInterval(textLoad(),6000);
  
    },[ textLoad() ])

}
