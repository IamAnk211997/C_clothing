import React from 'react';
import DevImg from '../../assets/ank.jpg';
import LinkedIN from '../../assets/linkedin.png';
import './contact.component.scss'

const ContactPage = () => (
  <div className='ContactPage'>
    <h1 className='title'>Devloper's Notes</h1><br/>
    <div className='ImagePart'>
    <a href='https://iamank.ml'><img src={DevImg} alt='test' className='test' /></a>
    </div>
    <div className='TextPart'>
    <p>
      <h3>
        This work is purely for demo and training purpose and does not have full features of stripe or E-commerce.<br/>
        To provide suggestions or feedback please drop a note to patnaik.ankit.97@gmail.com.
      </h3>
      <a href='https://www.linkedin.com/in/ankit-patnaik-28191b164/'><img src={LinkedIN} alt='linkedin' className='linkedin' /></a>
    </p>
    </div>
  </div>

);

export default ContactPage;