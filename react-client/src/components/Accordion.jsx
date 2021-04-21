


const Accordion = ({name}) => {
    return(
        <div id="shopCartAccordion" className="accordion rounded mb-5">
        {/* Card */}
        <div className="card border-0">
          
          <div id="shopCartHeadingOne" className="alert alert-primary mb-0" role="alert">
            Returning customer? <a href="#" className="alert-link" data-toggle="collapse" data-target={`#${name}`} aria-expanded="false" aria-controls="shopCartOne">Click here to login</a>
          </div>

          <div id={name} className="collapse border border-top-0" aria-labelledby="shopCartHeadingOne" data-parent="#shopCartAccordion" style={{}}>
            {/* Form */}
            <form className="js-validate p-5">
              {/* Title */}
              <div className="mb-5">
                <p className="text-gray-90 mb-2">Welcome back! Sign in to your account.</p>
                <p className="text-gray-90">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
              </div>
              {/* End Title */}
              <div className="row">
                <div className="col-lg-6">
                  {/* Form Group */}
                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="signinSrEmailExample3">Email address</label>
                    <input type="email" className="form-control" name="email" id="signinSrEmailExample3" placeholder="Email address" aria-label="Email address" required data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                  </div>
                  {/* End Form Group */}
                </div>
                <div className="col-lg-6">
                  {/* Form Group */}
                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="signinSrPasswordExample2">Password</label>
                    <input type="password" className="form-control" name="password" id="signinSrPasswordExample2" placeholder="********" aria-label="********" required data-msg="Your password is invalid. Please try again." data-error-class="u-has-error" data-success-class="u-has-success" />
                  </div>
                  {/* End Form Group */}
                </div>
              </div>
              {/* Checkbox */}
              <div className="js-form-message mb-3">
                <div className="custom-control custom-checkbox d-flex align-items-center">
                  <input type="checkbox" className="custom-control-input" id="rememberCheckbox" name="rememberCheckbox" required data-error-class="u-has-error" data-success-class="u-has-success" />
                  <label className="custom-control-label form-label" htmlFor="rememberCheckbox">
                    Remember me
                  </label>
                </div>
              </div>
              {/* End Checkbox */}
              {/* Button */}
              <div className="mb-1">
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary-dark-w px-5">Login</button>
                </div>
                <div className="mb-2">
                  <a className="text-blue" href="#">Lost your password?</a>
                </div>
              </div>
              {/* End Button */}
            </form>
            {/* End Form */}
          </div>
        </div>
        {/* End Card */}
      </div>
    )
}


export default Accordion




