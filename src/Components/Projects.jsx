import React  from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { images } from './dataImagesSliderProjects';  
import { GoEye , GoRepo } from "react-icons/go";
 

export default function Projects(props) { 

  const { headerWidth , formatedMessage } = props;

  return (
    <section style={{ width:'100%' , minWidth:headerWidth }} id='section__projects' className="sections section__projects">
        {images.map((i, idx) => {
            let description = ``;
            if ( formatedMessage.projects.description_projects == 'eng' ){ description = i.descriptionENG }
            if ( formatedMessage.projects.description_projects == 'es' ){ description = i.descriptionES }
            if ( formatedMessage.projects.description_projects == 'fr' ){ description = i.descriptionFR }
            return <figure key={idx} style={{backgroundImage:i.img}}>
                <figcaption className='slider___caption'>
                    <h2>{i.title}</h2>
                    <p>{ description }</p> 
                    <ul>
                      {
                        i.languages.map((l)=> { return <li key={l.name}>{l.name}</li> })
                      }
                    </ul>
                    <ul className='caption__links-projects'>
                      {
                        i.linksProjects.map((l , index )=>{
                          return ( <div key={index}><li><a href={l.webpage} target='_blank'><GoEye />{formatedMessage.projects.links_projects.first_link}</a></li><li><a href={l.github} target='_blank'><GoRepo />{formatedMessage.projects.links_projects.second_link}</a></li></div> )
                        })
                      }
                        
                    </ul>
                </figcaption>
            </figure> 
            
        })}
    </section>
  );
}
