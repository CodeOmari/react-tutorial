export default function Content(props){
    return(
        <div className="welcome-cont">
            <h1 className="welcome">Welcome Back, {props.userName}!</h1>
        </div>
    )
}