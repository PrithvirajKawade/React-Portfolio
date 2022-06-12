import { useRef } from 'react'
import React from 'react'
import LogoS from '../../../assets/images/logo-s.png'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import gsap from 'gsap-trial'
import './index.scss'
import Loader from 'react-loaders'

const Logo = () => {
  const bgRef = useRef()
  //   const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  //   useEffect(() => {
  //     gsap.registerPlugin(DrawSVGPlugin)

  //     gsap
  //       .timeline()
  //       .to(bgRef.current, {
  //         duration: 1,
  //         opacity: 1,
  //       })
  //       .from(outlineLogoRef.current, {
  //         drawSVG: 0,
  //         duration: 20,
  //       })

  //     gsap.fromTo(
  //       solidLogoRef.current,
  //       {
  //         opacity: 0,
  //       },
  //       {
  //         opacity: 1,
  //         delay: 4,
  //         duration: 4,
  //       }
  //     )
  //   }, [])

  return (
    <>
      <div className="logo-container" ref={bgRef}>
        <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
        <svg
          width="559pt"
          height="897pt"
          version="1.0"
          viewBox="0 0 559 897"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
      <Loader type="pacman"></Loader>
    </>
  )
}

export default Logo
