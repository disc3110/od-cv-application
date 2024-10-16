
const PersonalForm = ({ questions }) => {
    return(
        <form>
            <div class="mb-3">
                {questions.map((question, idx) => (
                    <>
                    <label for={question.id} className="form-label">{question.label}</label>
                    <input type={question.type} className="form-control" id={question.id} />
                    </>
                ))}

            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button">Next</button>
            </div>
        </form>
    )
}

export default PersonalForm