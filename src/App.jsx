// HOOKS
import React, { useEffect, useState , useCallback } from 'react';

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
import { useNavigationScroll } from './Hooks/useNavigationScroll';
import { useProgressNavigationScroll } from './Hooks/useProgressNavigationScroll';
import { useServices } from './Hooks/useServices';
import { useIntersectionObserver } from './Hooks/useIntersectionObserver';

export default function App() {

   // State hooks for validation form
  const [message,setMessage] = useState(''); // For form validation
  const [loading, setLoading] = useState(false);
  const [contentTexarea, setContentTextarea] = useState('');

  
  // Custom Hooks

  useIntersectionObserver([
    'overflow-description',
    'overflow-aboutme',
    'content__paragrah',
    'highlights__circles',
    'highlights__content',
    'section__projects',
    'section__contact',
    'contact__image-footer'
  ]);

  const [ formatedMessage , changeLanguage ] = useLanguage();

  useScrollSpy( document.querySelectorAll('.header__main .main__nav ul li span') ); // Get icon colored according his section to know position of page where you are

  useLoadDescriptionText( formatedMessage ); // make a transition of description of image about me bellow. Allocated in section header left

  const [ headerWidth ] = useResizeWindow(); // Resize window according manage it both down or up , right of left to keep dimensions and get it responsive

  const [ scrollTo ] = useNavigationScroll() // Click on each icons of navigate, it will scroll to his correspond section

  const [ scrollHeight ] = useProgressNavigationScroll( window.scrollY ); // Checking current height of position of scroll to calculate the progress bottom of page. It shows how long time taken to get to the end of page


  // Web services requestes functions
  const downloadCV = async() => {

    try {

      const blob = await useServices('download');
      // Create an <a> element to trigger the download
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'cv.pdf'; // Specify the filename for download
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      console.log('File downloaded successfully');

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

  return (
    <>

        <Header headerWidth={headerWidth}  formatedMessage={formatedMessage} changeLanguage={changeLanguage} scrollHeight={scrollHeight} scrollTo={scrollTo} downloadCV={downloadCV} />

        <AboutMe headerWidth={headerWidth} formatedMessage={formatedMessage} />

        <Projects headerWidth={headerWidth} formatedMessage={formatedMessage} />

        <ContactForm headerWidth={headerWidth} formatedMessage={formatedMessage} handleSubmitForm={handleSubmitForm} message={message} handleOnchangeTextarea={handleOnchangeTextarea} contentTexarea={contentTexarea} />

    </>

  )

}