const Forgot = () => {
    return (
        <div>


            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6 ">

                    <form className="forgot rounded">
                        <h3 className=" text-center pb-4" >Forgot Your Password</h3>
                        <p className="small"> Having trouble logging in?</p>
                        <ul>
                            <li className="small">Usernames are in the form of an email address.</li>
                            <li className="small">Passwords are case sensitive</li>
                            <li className="small"><a href="#" className="text-decoration-none">Sendbox Login</a></li>
                        </ul>
                        <p className="small">To reset your password, enter your Salesforce username.</p>
                        <div className="mb-3">
                            <label htmlFor="username" className=" text-muted label-form mb-1">Username</label>
                            <input type="text" id="username" className="form-control " />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-2">

                            <u><button type="submit" className="btn btn-outline-secondary">Cancel</button></u>

                            <u> <button type="submit" className="btn btn-primary " >Continue</button></u>

                        </div>
                        <br />
                        <p className="small">Video:<a href="#" className=" text-decoration-none">Need Help Logging In? </a></p>
                    </form>
                </div>
            </div >
        </div >



    )
}
export default Forgot