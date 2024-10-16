
const PersonalForm = ({ questions, onInputChange }) => {
    const handleChange = (e) => {
        const { id, value } = e.target;
        onInputChange(id, value);  // Pass the input ID and value to the parent
      };
    return(
        <form>
            {questions.map(question => (
                <div key={question.id}>
                    <label className="form-label">{question.label}</label>
                    <input
                    className="form-control"
                    id={question.id}
                    type={question.type}
                    onChange={handleChange}  // Call handleChange on input change
                    />
                </div>
            ))}
    </form>
  );
    
}

export default PersonalForm