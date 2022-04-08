import React from 'react'
import { postAPI } from '../lib/api';

export const Newsletter = () => {

  const submitEmail = async (event) => {
    event.preventDefault();
    const newsletterEmail = event.target.email.value
    const emailResponse = await postAPI('/newsletters', {email: newsletterEmail});
    console.log(emailResponse)
  }

  return (
    <div>
        <form className='row' onSubmit={submitEmail}>
            <input placeholder='Enter your email to subscribe for our newsletter' name='email' className='col-md-10' type="email" />
            <button className='btn col-md-2' type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}
