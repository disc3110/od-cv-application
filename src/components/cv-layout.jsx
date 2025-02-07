const CVLayout = ({ cvData }) => {
    console.log(cvData)
    return(
        <div className="container p-2 m-3">
            <h1>Name</h1>
            <p>{cvData.name}</p>
            <p>{cvData.phone}</p>
            <p>{cvData.email}</p>
            <p>{cvData.linkedIn}</p>
            <p>{cvData.skills}</p>
            <p>{cvData.profile}</p>
            {cvData.jobs && cvData.jobs.map((job, index) => (
                <div key={index}>
                    <p>Job Title: {job.job}</p>
                    <p>Company: {job.company}</p>
                    <p>Years: {job.jobDuration}</p>
                </div>
            ))}
            
        </div>
    )
}

export default CVLayout ;