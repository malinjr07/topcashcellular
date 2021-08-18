import React from 'react'

function Supports() {
    return (
        <section className="support">
            <div className="container">
                <div className="row border-bottom">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="main-title">
                            <h1>
                                Have Questions?
                            </h1>
                            <h2 className="mini-title">
                                We're Here to Help
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="support-area">
                                    <div className="heading-box">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <h3>ItsWorthMore.com Support</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <p>
                                                    Have questions? Use this page to get answers.
                                                    <br/>
                                                    <br/>
                                                    Can't find the answers you want? Use the contact us form at the bottom of the
                                                    page and we'll get back to you REALLY FAST, at max, within a business day.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="title">
                                                <h3>About ItsWorthMore.com</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="helpdesk">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <button
                                                            className="btn ticketQu"
                                                            type="button"
                                                            data-toggle="collapse"
                                                            data-target="#tickets"
                                                            aria-expanded="false"
                                                            aria-controls="tickets">
                                                            <p>
                                                                <i className="fas fa-info-circle"/>
                                                                How do I ship an item to ItsWorthMore.com?
                                                            </p>
                                                        </button>
                                                        <div className="collapse ticketAns" id="tickets">
                                                            <div className="card card-body">
                                                                <p>
                                                                    Some placeholder content for the collapse component. This panel is hidden by
                                                                    default but revealed when the user activates the relevant trigger.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact">
                                    <div className="contact-details">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <h3>Contact Us</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <p>
                                                    Still have questions? Reach out using the information below and one of our
                                                    representatives would be more than happy to help!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="address border-left">
                                                    <p>
                                                        <strong>
                                                            ItsWorthMore.com LLC
                                                        </strong>
                                                        <br/>
                                                        570 Monroe Rd Ste 1008
                                                        <br/>
                                                        Sanford FL 32771
                                                        <br/>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="address border-left">
                                                    <strong>Email:</strong>
                                                    info@itsworthmore.com
                                                    <br/>
                                                    <strong>Phone:</strong>
                                                    (855) 487-9678
                                                    <br/>
                                                    M - F (10:00AM - 5:00PM EST)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text" className="form-control form-boxes" id="name"/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="mails">Email</label>
                                                        <input type="email" className="form-control form-boxes" id="mails"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="topic">Subject</label>
                                                    <input type="text" className="form-control form-boxes" id="topic"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="messages">Message</label>
                                                    <textarea
                                                        className="form-control form-boxes"
                                                        id="messages"
                                                        rows={3}
                                                        defaultValue={""}/>
                                                </div>
                                                <button type="submit" className="btn green">
                                                    <i className="fas fa-envelope"/>
                                                    Send Mail</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Supports
