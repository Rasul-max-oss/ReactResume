import React from 'react'
import '../SectionContact/SectionContact.css'
export default function SectionContact() {
  return (
    <div>
      <h1 className='contacts_title'>Contacts</h1>
      <div className='contact_info'>
         <h3 className='contact_info_title'>Location</h3>
         <p className='contact_info_parg'>Irkutsk, Russia</p>
      </div>
      <div className='contact_info'>
         <h3 className='contact_info_title'>Telegram / WhatsApp</h3>
         <p className='contact_info_parg'>+7 (914) 915-16-39</p>
      </div>
      <div className='contact_info'>
         <h3 className='contact_info_title'>Email</h3>
         <p className='contact_info_parg'>kopyloff.danil2017@yandex.ru</p>
      </div>
    </div>
  )
}
