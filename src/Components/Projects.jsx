import React  from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { images } from './dataImagesSliderProjects';  
import { GoEye , GoRepo } from "react-icons/go";
 

export default function Projects(props) { 

  const { headerWidth , formatedMessage } = props; 

  return (
    <section style={{ width:'100%' , minWidth:headerWidth }} id='section__projects' className="sections section__projects">
        {images.map((i, idx) => (
            
            <figure key={idx} style={{backgroundImage:i.img}}>
                <figcaption className='slider___caption'>
                    <h2>{i.title}</h2>
                    <p>{formatedMessage.projects.description_projects === 'eng' ? i.descriptionENG : i.descriptionES }</p> 
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
            
        ))}
    </section>
  );
}
