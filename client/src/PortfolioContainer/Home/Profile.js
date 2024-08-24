import React from 'react'
import "./Profile.css";
import Typical from 'react-typical'
export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
      <div className='profile-details'>
      <div className='colz'>
        <div className='colz-icon'>
         <a href='https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit'>
          <i className="fa fa-facebook-square"></i>
         </a>
         <a href='#'>
          <i className="fa fa-google-plus-square"></i>
         </a>
         <a href='#'>
          <i className="fa fa-facebook-square"></i>
         </a>
         <a href='#'>
          <i className="fa fa-google-square"></i>
         </a>
         <a href='#'>
          <i className="fa fa-instagram"></i>
         </a>
         <a href='#'>
          <i className="fa fa-youtube-square"></i>
         </a>
         <a href='#'>
          <i className="fa fa-twitter"></i>
         </a>
         </div>
        </div>
        <div className="profile-details-name">
         <span className="primary-text">    
         {" "}
              Hello,I'M <span className="highlighted-text">Vikas Sastiya</span>
            </span>  
            <div className='profile-details-role'>
              <span className='profile-text'>
                {" "}
                <h1>
                   {" "}
                   <Typical
                   loop={Infinity}
                   steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Mern Stack Dev",
                    1000,
                    "Cross Platform v",
                    1000,
                    "React/React Native Dev",
                    1000,
                   ]}
                   />
                </h1>
                <span className='profile-role-tagline'>
                  Knack of building applications with front and back end operations
                </span>
              </span>
              </div> 
              <div className='profile-options'>
                <button className='btn primary-btn'>
                  {""}
                  Hire Me{" "}
                </button>
                <a href='resume_2.pdf' download='Vikas resume.pdf'>
                  <button className='btn highlighted-btn'>resume</button>  
                  </a>
              </div>
        </div>
       
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"> </div>
        </div>
    </div>

      </div>
    
  )
}
