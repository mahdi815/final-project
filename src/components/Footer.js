import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer () {
    return (
        
        <div className="footercnt" >
            
            
            <div className="container footercntmg ">
                <div className="row">

                    <div className="col-sm">
                        <h5 className="text-white">ABOUT STORE</h5>
                        <p className="text-white">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti.
                        </p>

                        <p className="text-white">
                            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias.
                        </p>


                    </div>

                    <div className="col-sm">
                        <h5 className="text-white">SEARCH SOMETHING </h5>
                        <div className="form-outline form-white mb-4">
                            <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder="search" />
                        </div>
                        <ul className="text-white">
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                            <li className="mb-3"><span className="ms-2">Warsaw, 00-967, Poland</span></li>
                            <li className="mb-3"><span className="ms-2">contact@example.com</span></li>
                            <li className="mb-3"><span className="ms-2">+ 48 234 567 88</span></li>
                        </ul>
                    </div>

                    <div className="col-sm">
                        <table className="table text-center text-white">
                            <tbody className="fw-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1am</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>

        
        </div>
        
    )
}

export default Footer;