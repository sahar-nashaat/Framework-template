import React from 'react'

export default function Contact() {
  return <>
   <div className="contact mb-5 p-5 darkstar bg-white w-50 mx-auto ">
<h2 className='text-center h1 mb-3 fs-1 fw-bolder'>CONTACT SECTION</h2>
<div className="darkstar d-flex  align-items-center justify-content-center mb-3">
  <div className="line me-3 " ></div>
  <i class="fa-solid fa-star "></i>
  <div className="line ms-3 " ></div>
</div>
<form>
  <input className='form-control mb-5 border-top-0 border-start-0 border-end-0  border-bottom-1' name='userName' type="text" placeholder='Enter your name' />
  <input className='form-control mb-5 border-top-0 border-start-0 border-end-0  border-bottom-1' name='userAge' type="number" placeholder='Enter your age' />
  <input className='form-control mb-5 border-top-0 border-start-0 border-end-0  border-bottom-1' name='userEmail' type="email" placeholder='Enter your email' />
  <input className='form-control mb-5 border-top-0 border-start-0 border-end-0  border-bottom-1' name='userPass' type="password" placeholder='Enter your password' />
  <button className='btn  text-white '>Send Message</button>
</form>
</div>
  </>
}
