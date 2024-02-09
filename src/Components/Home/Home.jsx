import React from 'react'
import '../../App.css'
import yourImage from '../../img/avataaars.png';

export default function Home() {return <>
<div className="home mb-5 p-5">
<header className='  d-flex flex-column align-items-center  text-white'>
<img className='' src={yourImage} alt="guy avatar" />
<h1 className=' mb-3 fs-1 fw-bolder'>START FRAMEWORK</h1>
<div className="star d-flex  align-items-center justify-content-center mb-3">
  <div className="line me-3 bg-white" ></div>
  <i class="fa-solid fa-star"></i>
  <div className="line ms-3 bg-white" ></div>
</div>
<p>Graphic Artist - Web Designer - Illustrator</p>
</header>
</div>
  </>
    
  
}
