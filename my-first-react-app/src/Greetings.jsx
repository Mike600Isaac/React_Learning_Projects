
function Greetings(props) {
    var isLoggedIn =true;

    // if(isLoggedIn) {
    //     return <h1>Welcome to Dashboard</h1>
    // } else {
    //     return <h1>Not Logged In</h1>
    // }

    // using Ternary Operator
    return (
        <div>
    {isLoggedIn ? <h1>Welcome to Dashboard {props.name}</h1> : <h1>Please sign In</h1>}
        </div>
    );
}

export default Greetings;