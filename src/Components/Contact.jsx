import React from 'react'
import Footer from './footer'

export const Contact = () => {
  return (
    <>
      <div className="contact_main_div">
        <h2>Contact Us</h2>
        <div className='location_map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27858.72712168858!2d79.49755991797421!3d29.21352597252394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86d1%3A0x6793e360cb3d930f!2sHaldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1718694243356!5m2!1sen!2sin"
          width="100%" height="250" style={{ border: 0 }} title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className="Contact_form">

          <form method="POST" action="https://formspree.io/f/moqggzoy">

            <input type="text" placeholder='Your Name' name='Username' required />

            <input type="text" placeholder='Your Email' name='Email' required />

            <textarea type="text" placeholder='Your Message' rows="5" name='Message' required />
            <button>Send</button>

          </form>
        </div>

      </div>


    </>

  )
}

export default Contact