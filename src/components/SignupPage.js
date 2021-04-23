import device from '../Images/device.png'
import icon1 from '../Images/trial-icon-1.png'

function SignupPage() {
    return (
        <div className="row">
            <div className="col-md-6">

                {/* head-info */}

                <div className="head">
                    <h2 className="headfirst">Get Your FREE 30-Days Trial Now!</h2>
                    <h3 className="headsecond">Sales Cloud - Professional Edition</h3>
                    <p className="headpara">Experience why over 2 million customers choose Salesforce CRM</p>
                    <img src={device} width="250px" />
                </div>

                {/* features */}

                <div className="features">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <p>Absolutely FREE</p>
                                <p>No hidden charges, No credit card required</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <p>Absolutely FREE</p>
                                <p>No hidden charges, No credit card required</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <p>Absolutely FREE</p>
                                <p>No hidden charges, No credit card required</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="icons-info d-flex">
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <p>Absolutely FREE</p>
                                <p>No hidden charges, No credit card required</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact */}

                <div className="contact">
                    <p>DO YOU PREFER TALKING TO A REPRESENTATIVE?</p>
                    <p>Call us at <b>000 800 001 6000</b></p>
                </div>
            </div>
            <div className="col-md-6"></div>
        </div>
    )

}

export default SignupPage