import React from 'react'
import img from './../assets/images/projects.jpg';
import Sidebarfooter from './Sidebarfooter';

export default function ContactForm(props) {

  const { headerWidth , formatedMessage , handleSubmitForm , message , handleOnchangeTextarea , contentTexarea } = props;

  return (
    <>
      <section style={{ width:'100%' , minWidth:headerWidth }} className='sections section__contact' id='section__contact'>
        <article className='contact__image'>
          <img src={img} alt="" />
          <Sidebarfooter />
        </article>
        <article className='contact__form'>
          <div className='form__title'>
            <h3>{formatedMessage.contact__form.form_title}</h3>
          </div>
          <form className='form' onSubmit={handleSubmitForm}>
            <div className='form__labels'>
              <label htmlFor="fullname">{formatedMessage.contact__form.form_labels[0].label}</label>
              <input type="text" placeholder={formatedMessage.contact__form.form_labels[0].placeholder} className='labels__input' id='fullname' name='fullname' />
            </div>
            <div className='form__labels'>
              <label htmlFor="email__from">{formatedMessage.contact__form.form_labels[1].label}</label>
              <input type="email" placeholder={formatedMessage.contact__form.form_labels[1].placeholder} className='labels__input' id='email__from' name='from' />
            </div>
            <div className='form__labels'>
              <label htmlFor="subject">{formatedMessage.contact__form.form_labels[2].label}</label>
              <input type="text" placeholder={formatedMessage.contact__form.form_labels[2].placeholder} className='labels__input' id='subject' name='subject' />
            </div>
            <div className='form__labels form__labels-textarea'>
              <label htmlFor="message">{formatedMessage.contact__form.form_textarea.label}</label>
              <textarea id='message' rows='5' onChange={handleOnchangeTextarea} placeholder={formatedMessage.contact__form.form_textarea.placeholder} className='labels__textarea' name='message' />
              <span>{contentTexarea.length}/5000</span>
            </div>
            <div className='form__buttons'>
              <input type="submit" value={formatedMessage.contact__form.form_buttons.first} />
              <input type="reset" value={formatedMessage.contact__form.form_buttons.second} />
            </div>
          </form>
        </article>
        <article className='contact__notice-message' id='contact__notice-message'>
              <div className='notice-message__close'><h4>X</h4></div>
              <h4>{message}</h4>
        </article>
      </section>
      <article style={{ width:'100%' , minWidth:headerWidth }} className='contact__image-footer'>
          <img src={img} alt="" />
          <Sidebarfooter />
      </article>
    </>
  )
}
