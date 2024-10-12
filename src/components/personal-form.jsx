
const PersonalForm = () => {
    return(
        <form>
            <div class="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" />
                <label for="phone" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone" />
                <label for="email" className="form-label">Email Address</label>
                <input type="text" className="form-control" id="email" />
                <label for="linkedIn" className="form-label">LinkedIn Profile</label>
                <input type="text" className="form-control" id="linkedIn" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button">Next</button>
            </div>
        </form>
    )
}

export default PersonalForm