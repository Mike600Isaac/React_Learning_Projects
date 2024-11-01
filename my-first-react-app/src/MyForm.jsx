function MyForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted sucessfully!")
    };

    const handleClick = (e) => {
        console.log(e.target.value);
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input onChange={handleClick} type="text" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;