import React from 'react'
import '../Section/Section.css'
export default function Section() {
  return (
    <div>
      <section>
        <div className='container_text_frontend'>
            <h1>Frontend</h1>
            <div className='container_text_frontend_parg'>
            <p>JavaScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI</p>
            </div>
        </div>
        <div className='container_text_frontend'>
            <h1>Backend</h1>
            <div className='container_text_frontend_parg'>
            <p>NodeJS, SQLite, Python, Django</p>
            </div>
        </div>
      </section>
    </div>
  )
}
