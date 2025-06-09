import User from '../assets/user.png'


export default function Header(props){
    return(
        <div className='container'>
            <div className='user'>
                <img src={User} alt="user icon" className='user-icon' />

                <p className='username'>{props.userName}</p>
            </div>
        </div>
    )
}