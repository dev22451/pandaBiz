const ChangePassword = () => {
    return (
        <div>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <form className="ChangePassword rounded ">
                        <h5 className="text-center display-6 pb-4">PandaBiz</h5>

                        <div className="mb-3">
                            <label htmlFor="password" className="label-form mb-2 text-muted">New Password</label>
                            <input type="password" id="password" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="conpassword" className="label-form mb-2 text-muted">Confirm New Password</label>
                            <input type="password" id="conpassword" className="form-control" />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-2">

                            <u><button type="submit" className="btn btn-outline-secondary">Cancel</button></u>

                            <u> <button type="submit" className="btn btn-primary " >Next</button></u>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword