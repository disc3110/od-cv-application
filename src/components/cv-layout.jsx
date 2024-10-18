const CVLayout = ({ cvData }) => {
    return(
        <div className="container p-2 m-3">
            <h1>Name</h1>
            <p>{cvData.name}</p>
            <p>{cvData.phone}</p>
        </div>
    )
}

export default CVLayout ;