import React , { useEffect, useMemo, useState } from 'react'

export default function useNavbar() {
    
    const [ navbar , setNavbar ] = useState(); 

    useEffect(()=>{
        setNavbar([{
            'li':'Inicio',
            'link':'start'
        },
        {
            'li':'Sonre mi',
            'link':'aboutme'
        },
        {
            'li':'Proyectos',
            'link':'projects'
        },
        {
            'li':'Contacto',
            'link':'contact'
        } ]);
           
    },[])

    return [ navbar ];           

}
