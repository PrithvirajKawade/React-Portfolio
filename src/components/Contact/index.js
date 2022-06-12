import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_e30ufzh',
        'template_ywj1fhm',
        refForm.current,
        'BJLL5fSXcJ4_ZmLyD'
      )
      .then(
        () => {
          alert('Message successfully sent!')
        },
        () => {
          alert('Failed to sen the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities which are challenging - especially
            ambitious or large projects. However, if you have other request or
            question, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Prithviraj Kawade
          <br />
          India,
          <br />
          Wagle Estate, Thane <br />
          <span>prithvirajk2013@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[19.193152163437826, 72.94669478808662]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[19.193152163437826, 72.94669478808662]}>
              <Popup>Prithviraj lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  )
}

export default Contact
