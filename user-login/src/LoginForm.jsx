import {useState} from "react";




function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // function handleChange(evt) {
    //     let newName = evt.target.value;
    //     return setUsername(newName);
    // }
    // function handleChange2(evt) {
    //     let newPassword = evt.target.value;
    //     return setPassword(newPassword);
    // }

    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange={ (evt) => { return setUsername(evt.target.value) }}/>
            <input type="text" placeholder="Password" value={password} onChange={ (evt) => { return setPassword(evt.target.value) }}/>
            <button onClick={() => {return alert((`Welcome ${username} with password ${password}`))}}>Login</button>
        </div>
    );
}


export default LoginForm;