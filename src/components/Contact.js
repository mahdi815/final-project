import React from "react";


const Contact = () => {
    return (
        <div>           

            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/photos/contact.jpg" alt="Contac tUs" height="400px" width="500px"></img>
                    </div>
                    <div className="col-md-6">
                        <form>

                            <div className="mb-3">
                                <label for="exapmleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exapmleForm" placeholder="name..."></input>
                            </div>

                            <div className="mb-3">
                                <label for="exapmleFormControlInput1" className="form-label">Email adress</label>
                                <input type="email" className="form-control" id="exapmleFormControlInput1" placeholder="name@example.com"></input>
                            </div>

                            <div className="mb-3">
                                <label for="exapmleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exapmleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-dark">Send Message</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact