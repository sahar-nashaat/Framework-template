import React from 'react'
import '../../App.css'
export default function About() {
  return <>
<div className="about mb-5 p-5 text-white ">
<h2 className='text-center h1 mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
<div className="star d-flex  align-items-center justify-content-center mb-3">
  <div className="line me-3 bg-white" ></div>
  <i class="fa-solid fa-star "></i>
  <div className="line ms-3 bg-white" ></div>
</div>
<div className="container mb-5 py-5">
  <div className="row  d-flex justify-content-center">
    <div className="col-md-5">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className="col-md-5">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
</div>
</div>
  </>
}
