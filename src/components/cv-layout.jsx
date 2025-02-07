const CVLayout = ({ cvData }) => {
    return(
        <div className="container p-2 m-3 border border-black border-4">
        <h1 className="text-center">{cvData.name || "Name"}</h1>

        <div className="d-flex">
            <p className="fw-bold me-2">Phone number:</p>
            <p>{cvData.phone || "5555555555"}</p>
        </div>

        <div className="d-flex">
            <p className="fw-bold me-2">Email:</p>
            <p>{cvData.email || "user@example.com"}</p>
        </div>

        <div className="d-flex">
            <p className="fw-bold me-2">LinkedIn:</p>
            <p>{cvData.linkedIn || "linkedin.com/in/your-profile"}</p>
        </div>

        <div className="d-flex">
            <p className="fw-bold me-2">Skills:</p>
            <p>{cvData.skills || "Skills go here"}</p>
        </div>

        <div className="d-flex">
            <p className="fw-bold me-2">Profile:</p>
            <p>{cvData.profile || "Short profile summary"}</p>
        </div>

        <h2>Expirience</h2>
        {cvData.jobs && cvData.jobs.map((job, index) => (
            <div key={index}>
            <div className="d-flex">
                <p className="fw-bold me-2">Job Title:</p>
                <p>{job.job || "No job title"}</p>
            </div>
            <div className="d-flex">
                <p className="fw-bold me-2">Company:</p>
                <p>{job.company || "No company"}</p>
            </div>
            <div className="d-flex">
                <p className="fw-bold me-2">Years:</p>
                <p>{job.jobDuration || "0"}</p>
            </div>
            </div>
        ))}

        <h2>Education</h2>
        {cvData.educations && cvData.educations.map((edu, idx) => (
        <div key={idx}>
            <p>Degree: {edu.eduDegree || "N/A"}</p>
            <p>School: {edu.school || "N/A"}</p>
            <p>Duration: {edu.schoolDuration || "N/A"}</p>
            <p>Skills Obtained: {edu.eduDescription || "N/A"}</p>
        </div>
        ))}
        </div>
    )
}

export default CVLayout ;