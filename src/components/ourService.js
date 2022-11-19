import React from 'react'
import { NavLink } from 'react-router-dom'

const OurService = () => {
  return (
    <div>
        <h2 className='display-4 fw-bolder text-center my-4'>OUR SERVICE</h2>
        
        <div className="row ">
            <div className="col parentoic">
                <img src="/photos/serwel.jpg" className="tarkone" alt="background" ></img>
                <img src="/photos/alien.jpg" className="tarktwo" alt="background" ></img>
            </div>
            <div className="col">
                <div className='divaouiii'>
                    <h5>Online Shopping</h5>
                    <p className='textOS'>lorem Reet rt ee SRM er ae adie bt eS ests elit. Nemo molestiae earum rem doloremque, nihil delectus non see lel um ad eo la SRM er ae adie bt eS ests elit SRM er ae adie bt eS ests elit SRM er ae adie bt eS ests elit SRM er ae adie bt eS ests elit nihil delectus ullam error consectetur? Dicta, non see lel nihil delectus ullam error consectetur? Dicta, non see lel</p>
                </div>
                <div className="row ">
                    <div className="col fircol">
                        
                            <li>lorem Reet SRM er</li>
                            <li>lorem Reet rt ee SRM er</li>
                            <li>lorem Reet rt ee SRM </li>
                            <li>lornson  rt ee SRM er</li>
                            <li>lorem Reet r SRM er</li>
                       
                    </div>
                    <div className="col seccol">
                        
                            <li> Reet rt ee SRM njser</li>
                            <li>lorem Reetl rtndn jdozjer</li>
                            <li>lorem Reet rt  SRM er</li>
                            <li>lorem Reet rt ee  erjeo</li>
                            <li>lorem Reet rt ee jzondsqker</li>
                       
                    </div>
                    <div>
                        <NavLink to="/Products" className="btn btn-dark px-3 morourserv">MORE</NavLink>
                    </div>
              </div>
            </div>
        </div>



        <div className="row secone ">
            <div className="col boxcont ">
                <div className='civdue'>
                    <h5>Online Shopping</h5>
                    <p > Nemo molestiae earum rem doloremque, nihil delectus non see lel um ad eo la SRM er ae adie bt eS ests elit SRM er ae adie bt eS ests elit SRM er ae adie bt eS ests elit SRM er ae adie bt eS ests elit nihil delectus ullam error consectetur? Dicta, non see lel nihil delectus ullam error consectetur? Dicta, non see lel</p>
                </div>
                <div className="row ">
                    <div className="col">
                        
                            <li>lorem Reet SRM er</li>
                            <li>lorem Reet rt ee SRM er</li>
                            <li>lorem Reet rt ee SRM </li>
                            <li>lornson  rt ee SRM er</li>
                            <li>lorem Reet r SRM er</li>
                       
                    </div>
                    <div className="col">
                        
                            <li> Reet rt ee SRM njser</li>
                            <li>lorem Reetl rtndn jdozjer</li>
                            <li>lorem Reet rt  SRM er</li>
                            <li>lorem Reet rt ee  erjeo</li>
                            <li>lorem Reet rt ee jzondsqker</li>
                       
                    </div>
                    <div>
                        <NavLink to="/Products" className="btn btn-dark px-3 morourserv">MORE</NavLink>
                    </div>
              </div>
            </div>
            <div className="col parentoictwo">
                <img src="/photos/homephoto3.jpg" className="tarkone" alt="background" ></img>
                <img src="/photos/pic2.jpg" className="tarktwo" alt="background" ></img>
            </div>
        </div>




    </div>
  )
}

export default OurService