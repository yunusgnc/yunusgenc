import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Saat bilgisini oluştur
    const now = new Date();
    const timeString = now.toLocaleString('tr-TR', { hour12: false });

    // Eğer formda zaten time inputu varsa güncelle, yoksa ekle
    let timeInput = form.current.querySelector('input[name="time"]');
    if (!timeInput) {
      timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time';
      form.current.appendChild(timeInput);
    }
    timeInput.value = timeString;

    emailjs.sendForm(
      'service_ux0nc12', // EmailJS'den alacağınız Service ID
      'template_23rguwz', // EmailJS'den alacağınız Template ID
      form.current,
      'G4pJphi8x7tu2P34k' // EmailJS'den alacağınız Public Key
    )
      .then((result) => {
        console.log('Email başarıyla gönderildi:', result.text);
        toast.success('Teşekkürler! Mesajınız başarıyla gönderildi.');
        e.target.reset(); // Formu temizle
      })
      .catch((error) => {
        console.error('Email gönderilirken hata oluştu:', error.text);
        toast.error('Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.');
      });
  };

  return (
    <div>
      <div className='section wf-section'>
        <div className='container-large w-container'>
          <h1 className='heading-large'>
            Harika bir şey mi yaratmak istiyorsunuz? Bana email atın
          </h1>
          <div className='w-layout-grid contact-grid'>
            <div
              id='w-node-_8c6cd7fb-ba10-7837-a66d-69cd8c41abf0-102510f3'
              className='content-wrapper'>
              <h2 className='heading-small'>İletişim</h2>
            </div>
            <div
              id='w-node-e78e5145-1df7-d2b6-4b48-82cfd797bd0c-102510f3'
              className='content-wrapper'>
              <div className='contact-form w-form'>
                <form
                  ref={form}
                  id='wf-form-Contact-Form'
                  name='wf-form-Contact-Form'
                  data-name='Contact Form'
                  method='get'
                  aria-label='Contact Form'
                  onSubmit={handleSubmit}>
                  <label htmlFor='name' className='field-label'>
                    İsim
                  </label>
                  <input
                    type='text'
                    className='text-field w-input'
                    maxLength={256}
                    name='name'
                    data-name='Name'
                    placeholder="İsminiz nedir?"
                    id='name'
                    required
                  />
                  <label htmlFor='email' className='field-label'>
                    Email Adresi
                  </label>
                  <input
                    type='email'
                    className='text-field w-input'
                    maxLength={256}
                    name='email'
                    data-name='Email'
                    placeholder='name@example.com'
                    id='email'
                    required
                  />
                  <label htmlFor='phone' className='field-label'>
                    Telefon Numarası
                  </label>
                  <input
                    type='tel'
                    className='text-field w-input'
                    maxLength={20}
                    name='phone'
                    data-name='Phone'
                    placeholder='05xx xxx xx xx'
                    id='phone'
                    required
                  />
                  <label htmlFor='message' className='field-label'>
                    Mesaj
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    maxLength={5000}
                    data-name='Message'
                    placeholder='Size nasıl yardımcı olabilirim?'
                    className='textarea w-input'
                    required
                  />
                  <input
                    type='submit'
                    data-wait='Lütfen bekleyin...'
                    defaultValue='Gönder'
                    className='submit-button w-button'
                  />
                </form>
                <div
                  className='success-message w-form-done'
                  tabIndex={-1}
                  role='region'
                  aria-label='Contact Form success'>
                  <div className='text-block-3'>
                    Teşekkürler! Mesajınız başarıyla gönderildi!
                  </div>
                </div>
                <div
                  className='error-message w-form-fail'
                  tabIndex={-1}
                  role='region'
                  aria-label='Contact Form failure'>
                  <div className='text-block-4'>
                    Üzgünüz! Form gönderilirken bir hata oluştu.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
