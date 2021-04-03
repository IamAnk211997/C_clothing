import React from 'react';
import DevImg from '../../assets/ank.jpg';
import './contact.component.scss'

const ContactPage = () => (
  <div className='ContactPage'>
    <h1 className='title'>Our Devlopers</h1><br/>
    <img src={DevImg} alt='test' className='test' />
  </div>
);

export default ContactPage;