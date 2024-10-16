const CVLayout = ({ personalData, expirienceData }) => {
    console.log(personalData)
    return(
        <div className="container p-2 m-3">
            <h1>Name</h1>
            <p>{personalData.name}</p>
            <p>{personalData.phone}</p>
        </div>
    )
}

export default CVLayout ;