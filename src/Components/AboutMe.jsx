import React from 'react'
import BNP from './../assets/images/BNP.jpg';
import GP from './../assets/images/grupoBackup.jpeg';
import PRE from './../assets/images/Previlabor.jpg';
import CircularProgressBar from './CircleProgress';
import ReactApexChart from "react-apexcharts";
import Text from './Text';
export default function AboutMe( props ) {

  const { headerWidth , formatedMessage } = props;

  return (
    <section id='section__aboutme' style={{ width:'100%' , minWidth:headerWidth }} className='sections section__aboutme'>
        <article className='aboutme_content'>
            <div className='content__paragrah'>
              <h3>{ formatedMessage.aboutme.title_aboutme }</h3>
              <span>
                <Text formatedMessage={ formatedMessage.aboutme.text_aboutme } type={'aboutme'} />
              </span>
            </div>
            <div className='content__experience'>
              <div className='experience__highlights'>
                  <div className='highlights__circles'>
                      <div>
                        <h3>{formatedMessage.aboutme.title_circles.first_circle}</h3>
                        <CircularProgressBar radius={50} strokeWidth={3} percentage={15} text={'+15%'}/>
                      
                      </div>
                      <div>
                        <h3>{formatedMessage.aboutme.title_circles.second_circle}</h3>
                        <CircularProgressBar radius={50} strokeWidth={3} percentage={5} text={'+5%'}/>
                      </div>
                      <div>
                        <h3>{formatedMessage.aboutme.title_circles.third_circle}</h3>
                        <CircularProgressBar radius={50} strokeWidth={3} percentage={90} text={'+90%'}/>
                      </div>
                  </div>
                  {/* Timeline */}
                  <div className='highlights__content'>
                      <div className='content__timeline'>
                          <ul className='timeline__list'>
                            <li className='list__options list-grupobackup'>
                              <div className='list__content'>
                                <img width='200' height='200' src={GP} alt="grupo backup" />
                                <div className='content__text'>
                                  <h4>{formatedMessage.aboutme.timeline.timeline_experiences.experiences_title.first}</h4>
                                  <ul className='text__list-tasks'>
                                     { formatedMessage.aboutme.timeline.timeline_experiences.experiences_taskes.first.map(( l , idx )=>{
                                        return <li key={idx}>{l}</li> 
                                     }) }
                                  </ul>
                                  <ul className='text__list-aptitudes'>
                                  { formatedMessage.aboutme.timeline.timeline_experiences.experiences_aptitudes.first.map(( l , idx )=>{
                                        return <li key={idx}>{l}</li> 
                                     }) }
                                  </ul>
                                </div>
                              </div>
                              <div className='date-start'>
                                  <h4>{formatedMessage.aboutme.timeline.timeline_dates.first}</h4>
                              </div>
                              <div className='point'>
                                &nbsp;
                              </div>     
                            </li>
                            <li className='list__options list-bnp'>
                              <div className='point'>
                                &nbsp; 
                              </div>
                              <div className='date-start'>
                              <h4>{formatedMessage.aboutme.timeline.timeline_dates.second}</h4>
                              </div>
                              <div className='list__content'>
                                <img width='200' height='200' src={BNP} alt="bnp paribas" />
                                <div className='content__text'>
                                <h4>{formatedMessage.aboutme.timeline.timeline_experiences.experiences_title.second}</h4>
                                  <ul className='text__list-tasks'>
                                     { formatedMessage.aboutme.timeline.timeline_experiences.experiences_taskes.second.map(( l , idx )=>{
                                        return <li key={idx}>{l}</li> 
                                     }) }
                                  </ul>
                                  <ul className='text__list-aptitudes'>
                                  { formatedMessage.aboutme.timeline.timeline_experiences.experiences_aptitudes.second.map(( l , idx )=>{
                                        return <li key={idx}>{l}</li> 
                                     }) }
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li className='list__options list-previlabor'>
                              <div className='list__content'>
                                <img width='200' height='200' src={PRE} alt="previlabor" />
                                <div className='content__text'>
                                  <h4>{formatedMessage.aboutme.timeline.timeline_experiences.experiences_title.third}</h4>
                                  <ul className='text__list-tasks'>
                                     { formatedMessage.aboutme.timeline.timeline_experiences.experiences_taskes.third.map(( l , idx )=>{
                                        return <li key={idx}>{l}</li> 
                                     }) }
                                  </ul>
                                  <ul className='text__list-aptitudes'>
                                  { formatedMessage.aboutme.timeline.timeline_experiences.experiences_aptitudes.third.map(( l , idx )=>{
                                        return <li key={idx}>{l}</li> 
                                     }) }
                                  </ul>
                                </div> 
                              </div>
                              <div className='date-start'>
                                <h4>{formatedMessage.aboutme.timeline.timeline_dates.third}</h4>
                              </div>
                              <div className='point'>
                                &nbsp;
                              </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
            
        </article>
    </section>
  )
}
