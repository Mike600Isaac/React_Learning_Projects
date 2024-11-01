function Names() {
    let names = ["Solomon", "Webbers", "Benjamine"]
    return (
       <ul className="welcome-heading"> 
        {names.map((name) => {
            return <li>{name}</li>
        })}
       </ul>
    )
}

export default Names;