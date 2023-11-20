import React from "react";

export default function Contact() {
  return (
    <div>
      <div className='section wf-section'>
        <div className='container-large w-container'>
          <h1 className='heading-large'>
            Want to create something great? Shoot me an email
          </h1>
          <div className='w-layout-grid contact-grid'>
            <div
              id='w-node-_8c6cd7fb-ba10-7837-a66d-69cd8c41abf0-102510f3'
              className='content-wrapper'>
              <h2 className='heading-small'>Contact</h2>
            </div>
            <div
              id='w-node-e78e5145-1df7-d2b6-4b48-82cfd797bd0c-102510f3'
              className='content-wrapper'>
              <div className='contact-form w-form'>
                <form
                  id='wf-form-Contact-Form'
                  name='wf-form-Contact-Form'
                  data-name='Contact Form'
                  method='get'
                  aria-label='Contact Form'>
                  <label htmlFor='name' className='field-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='text-field w-input'
                    maxLength={256}
                    name='name'
                    data-name='Name'
                    placeholder="What's your name?"
                    id='name'
                  />
                  <label htmlFor='email' className='field-label'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    className='text-field w-input'
                    maxLength={256}
                    name='email'
                    data-name='Email'
                    placeholder='name@example.com'
                    id='email'
                    required=''
                  />
                  <label htmlFor='Message' className='field-label'>
                    Message
                  </label>
                  <textarea
                    id='Message'
                    name='Message'
                    maxLength={5000}
                    data-name='field'
                    placeholder='How can I help you?'
                    className='textarea w-input'
                    defaultValue={""}
                  />
                  <input
                    type='submit'
                    data-wait='Please wait...'
                    defaultValue='Submit'
                    className='submit-button w-button'
                  />
                </form>
                <div
                  className='success-message w-form-done'
                  tabIndex={-1}
                  role='region'
                  aria-label='Contact Form success'>
                  <div className='text-block-3'>
                    Thank you! Your submission has been received!
                  </div>
                </div>
                <div
                  className='error-message w-form-fail'
                  tabIndex={-1}
                  role='region'
                  aria-label='Contact Form failure'>
                  <div className='text-block-4'>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
