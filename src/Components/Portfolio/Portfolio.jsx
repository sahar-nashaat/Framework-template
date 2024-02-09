import React from 'react'
import '../../App.css'
import house from '../../img/poert1.png';
import cake from '../../img/port2.png';
import tent from '../../img/port3.png';

export default function Portfolio() {
  return <>
  <div className="about mb-5 p-5 darkstar bg-white ">
<h2 className='text-center h1 mb-3 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
<div className="darkstar d-flex  align-items-center justify-content-center mb-3">
  <div className="line me-3 " ></div>
  <i class="fa-solid fa-star "></i>
  <div className="line ms-3 " ></div>
</div>
<div className="container">
  <div className="row g-5  py-3">
    <div className="col-md-4 p-0 px-4 rounded position-relative   overflow-hidden">
      <img className='w-100 rounded portImg ' src={house} alt="house" />
      <div className="portLayer rounded w-100  h-100 position-absolute   d-flex justify-content-center align-items-center  ">
  <i className="text-white fa-solid fa-plus fa-6x"></i>
      </div>
    </div>
    <div className="col-md-4 p-0 px-4 rounded position-relative  overflow-hidden">
      <img className='w-100 rounded portImg ' src={cake} alt="cake" />
      <div className="portLayer rounded w-100  h-100 position-absolute   d-flex justify-content-center align-items-center  ">
      <i className="text-white fa-solid fa-plus fa-6x"></i>

      </div>
    </div>
    <div className="col-md-4 p-0 px-4 rounded position-relative  overflow-hidden">
      <img className='w-100 rounded portImg ' src={tent} alt="tent" />
      <div className="portLayer rounded w-100  h-100 position-absolute  d-flex justify-content-center align-items-center  ">
      <i className="text-white fa-solid fa-plus fa-6x"></i>

      </div>
    </div>
    <div className="col-md-4 p-0 px-4 rounded position-relative   overflow-hidden">
      <img className='w-100 rounded portImg ' src={house} alt="house" />
      <div className="portLayer rounded w-100  h-100 position-absolute   d-flex justify-content-center align-items-center  ">
  <i className="text-white fa-solid fa-plus fa-6x"></i>
      </div>
    </div>
    <div className="col-md-4 p-0 px-4 rounded position-relative  overflow-hidden">
      <img className='w-100 rounded portImg ' src={cake} alt="cake" />
      <div className="portLayer rounded w-100  h-100 position-absolute   d-flex justify-content-center align-items-center  ">
      <i className="text-white fa-solid fa-plus fa-6x"></i>

      </div>
    </div>
    <div className="col-md-4 p-0 px-4 rounded position-relative  overflow-hidden">
      <img className='w-100 rounded portImg ' src={tent} alt="tent" />
      <div className="portLayer rounded w-100  h-100 position-absolute  d-flex justify-content-center align-items-center  ">
      <i className="text-white fa-solid fa-plus fa-6x"></i>

      </div>
    </div>


  </div>
</div>
</div>
  </>
}
