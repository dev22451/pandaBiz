const LoginForm = () => {
    return (
        <div class="row h-100 justify-content-center align-items-center">
            <h5 className="text-center display-5">Pandabiz</h5>
            <form className="login">
                <div className="mb-3">
                    <label htmlFor="username" className="label-form mb-1 text-muted ">Username</label>
                    <input type="text" id="username" class="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="label-form mb-1 text-muted">Password</label>
                    <input type="password" id="password" class="form-control" />
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Log In</button>
                </div>
                <br />

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                    />
                    <label htmlFor="checkbox" className="form-check-label try-btn" > Remember me </label>
                    <a href="#" className="link-size link-right text-decoration-none">Forget Your Password?</a>
                </div>




                <hr className="new1" />
            </form>
            <footer>
                <div class="text-center">
                    <p className="terms text-muted">© 2021 hangingpanda.com, inc. All rights reserved. | <a href="" className="text-decoration-none">Privacy</a> </p>
                </div>
            </footer>
        </div>
    )
}
export default LoginForm