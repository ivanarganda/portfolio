import slider1 from "./../assets/images/projects.jpg";
import me from "./../assets/images/me.jpg";
import { navbar } from "./dataNavbar";
import Text from './Text';
import ButtonsHeader from './ButtonsHeader'; 
import es from './../assets/images/es.svg';
import gb from './../assets/images/gb.svg';
import fr from './../assets/images/fr.svg';

export default function Header( props ){

    const links =  navbar;
    const { headerWidth , formatedMessage , changeLanguage , scrollHeight  , scrollTo , contactMe , downloadCV } = props; 

    return (
        <>
            <header style={{ width:'100%' , minWidth:headerWidth }} className="sections" id="section_start">
                <main className="header__aside">
                    <h2 className="aside__title">{formatedMessage.header.title}</h2>
                    <div style={{color:'white',display:'flex',flexDirection:'row',justifyContent:'center',gap:'1rem',alignItems:'center',margin:'0 auto'}} className="aside__language">
                        <img onClick={()=>changeLanguage('es')} width={'40'} height={'30'} src={es} alt="es" className="language__button"></img>
                        <img onClick={()=>changeLanguage('en')} width={'40'} height={'30'} src={gb} alt="gb" className="language__button"></img> 
                        <img onClick={()=>changeLanguage('fr')} width={'40'} height={'30'} src={fr} alt="fr" className="language__button"></img>
                    </div>
                </main>
                <main className="header__main">
                    <nav className="main__nav">
                        <ul>
                            {links.map(( li )=>{ return <li className="nav__options__li" key={li.li}>
                                <a id={li.link}>{li.li}</a>
                                <span id={li.link } onClick={()=>scrollTo(li.link)}>{li.icon}</span>
                            </li> })}
                            
                        </ul>
                        <div className="progress-container">
                            <div className="progress-bar" id="my-progress-bar" style={{width:
                                    
                                    scrollHeight != 0 ? ((( scrollHeight/$('body').height())*100) + '%') : 0 + '%'
                                
                                }}></div>
                        </div>
                    </nav>
                    <img width='600' height='800' src={slider1} title="slider"/>
                </main>
                <div className="overflow-description">
                    <img className="overflow overflow__image__me" src={me} alt=""/>
                    <h2 className="overflow-title aside__description__me">{formatedMessage.header.title_description}</h2>
                    <h4 className="overflow-title aside__description__job name"></h4>
                </div>

                <div className="overflow-aboutme">
                    <h3 className="overflow aboutme__title">{formatedMessage.header.title_header}</h3>
                    <p className="overflow aboutme__text">
                        <Text formatedMessage={[formatedMessage.header.text_header,formatedMessage.header.button_read_more]} type='header'/> 
                    </p>
                    <ButtonsHeader formatedMessage={formatedMessage.header} contactMe={contactMe} downloadCV={downloadCV}/>
                </div>
            </header>
            <div className="overflow-aboutme-mobile">
                <h3 className="overflow aboutme__title">{formatedMessage.header.title_header}</h3>
                <p className="overflow aboutme__text">
                    <Text formatedMessage={[formatedMessage.header.text_header,formatedMessage.header.button_read_more]} type='header'/>
                </p>
                <ButtonsHeader formatedMessage={formatedMessage.header} downloadCV={downloadCV}/>
            </div>
        </>
        
    )

}