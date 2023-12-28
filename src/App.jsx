// HOOKS
import React, { useEffect, useState , useCallback } from 'react';

import scrollreveal from 'scrollreveal'; 

// COMPONENTS
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm'; 

// CSS
import "./Header.css";
import "./AboutMe.css";
import "./Projects.css";
import "./ContactForm.css";
import { useScrollSpy } from './Hooks/useScrollSpy';
import { useLanguage } from './Hooks/useLanguage';
import { useLoadDescriptionText } from './Hooks/useLoadDescriptionText';
import { useResizeWindow } from './Hooks/useResizeWindow';

export default function App() {

  const [currentSelector, setCurrentSelector] = useState('#section_start');

  const [scrollHeight, setScrollHeight] = useState(window.scrollY); // For scroll event
  const [message,setMessage] = useState(''); // For form validation
  const [loading, setLoading] = useState(false);
  const [contentTexarea, setContentTextarea] = useState('');

  
  // CUSTOM HOOKS

  const [ formatedMessage , changeLanguage ] = useLanguage();

  useScrollSpy( document.querySelectorAll('.header__main .main__nav ul li span') );

  useLoadDescriptionText( formatedMessage );

  const [ headerWidth ] = useResizeWindow();

  const updateScrollHeight = () => {

    setScrollHeight($(document).scrollTop() * 1.8);

  }
  
  // Functions and Events scroll
  const scrollTo = (selector) => {

    setCurrentSelector(selector);

    console.log(selector);

    $('html,body').animate({
      scrollTop: $(selector).offset().top
    }, 0);

  }

  // Web services requestes functions
  const downloadCV = async () => {

    // Store the current value after using
    let currentValue = $('#buttons__btn-downloadcv').val();

    $('#buttons__btn-downloadcv').val('DOWNLOADING...');

    const response = await fetch('https://igvdeveloper-ws-com.onrender.com/download/rnd_n8GiDBzS6xnXLrk11SEbQ7l85hrw', {
      method: 'GET',
      mode: 'cors',
    });

    if (!response.ok) {
      if (response.status === 401) throw new Error(`No autorized service`);
      if (response.status === 404) throw new Error(`No found request path service`);
    }

    try {

      const blob = await response.blob();

      // Create an <a> element to trigger the download
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'cv.pdf'; // Specify the filename for download
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      console.log('File downloaded successfully');

      // Once downloaded cv, retrieve the source value
      $('#buttons__btn-downloadcv').val(currentValue);

    } catch (Error) {

      console.log(Error);

    }

  }

  // Handle message slide of article contact me
  useEffect(()=>{
      if ( message != '' ){
        $('#contact__notice-message').slideDown();
        if ( !loading ){
          setTimeout(()=>{
            $('#contact__notice-message').slideUp();
            setMessage('');
          },3000);
        }
      } else {
        $('#contact__notice-message').slideUp();   
      }
  },[message,loading]);

  // Handle events of contact form
  const handleOnchangeTextarea = (e)=>{

    setContentTextarea( e.target.value );

  }
  const handleSubmitForm = async (event) => {
    event.preventDefault();
  
    if (
      !event.target.fullname.value ||
      !event.target.from.value ||
      !event.target.subject.value ||
      !event.target.message.value
    ) {
      setMessage('Complete required fields');
      return false;
    }
  
    setMessage('Sending message...');
    setLoading(true);
  
    const data = {
      fullname: event.target.fullname.value,
      from: event.target.from.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
  
    // var url = 'http://localhost:3000/sendemail';
    var url = 'https://igvdeveloper-ws-com.onrender.com/sendemail';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
  
      console.log(response);
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized service');
        } else if (response.status === 404) {
          throw new Error('Not found request path service');
        }
      }
  
      const json_response = await response.json();
  
      console.log(json_response);
  
      setMessage('Email successfully sent');
      setLoading(false);

    } catch (error) {
      console.log(error.message); // Log the error
      if ( error.message == 'Failed to fetch'){
        setMessage('Email could not be sent due to conection server. Contact with owner'); // Set the error message
      }
      setLoading(false);
    }
  };
  

  const contactMe = () => {
    scrollTo('#section__contact');
  }


  // EVENTS SCROLL
  useEffect(() => {

    updateScrollHeight();
    document.addEventListener('scroll', updateScrollHeight);

    return () => {
      document.removeEventListener('scroll', updateScrollHeight)
    }

  }, [updateScrollHeight, scrollHeight])

  return (
    <>

        <Header headerWidth={headerWidth}  formatedMessage={formatedMessage} changeLanguage={changeLanguage} scrollHeight={scrollHeight} scrollTo={scrollTo} contactMe={contactMe} downloadCV={downloadCV} />

        <AboutMe headerWidth={headerWidth} formatedMessage={formatedMessage} />

        <Projects headerWidth={headerWidth} formatedMessage={formatedMessage} />

        <ContactForm headerWidth={headerWidth} formatedMessage={formatedMessage} handleSubmitForm={handleSubmitForm} message={message} handleOnchangeTextarea={handleOnchangeTextarea} contentTexarea={contentTexarea} />

    </>

  )

}