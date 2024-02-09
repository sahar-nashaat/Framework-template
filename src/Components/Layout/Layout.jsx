import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <nav class="navbar navbar-expand-lg  py-4 ">
  <div class="container-fluid px-5 mx-auto">
    <Link class="navbar-brand fw-bolder fs-2 text-white"   to={'/'} >START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-3">
          <Link class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to={"about"}>ABOUT</Link>
        </li>
        <li class="nav-item me-3">
          <Link class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to={"portfolio"}>PORTFOLIO</Link>
        </li>
        <li class="nav-item me-3">
          <Link class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to={"contact"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet></Outlet>
<footer className=''>
    <div className="container text-white  text-center">
        <div className="row  g-5 py-5">
            <div className="col-md-4">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h2>AROUND THE WEB</h2>
                <div className='w-50 mx-auto py-4 d-flex justify-content-between'>
                    <i class="fa-brands fa-facebook mx-1 icon p-2"></i>
                    <i class="fa-brands fa-twitter  mx-1 icon p-2"></i>
                    <i class="fa-brands fa-linkedin-in mx-1 icon p-2"></i>
                    <i class="fa-solid fa-globe mx-1 icon p-2"></i>
                </div>
            </div>
            <div className="col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    <div className='copy py-3'>
        <p className='text-white text-center'>Copyright © Your Website 2021</p>
    </div>
</footer>
    </>
  )
}
