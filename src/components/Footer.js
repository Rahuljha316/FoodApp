import  UserContext from '../utils/UserContext'
import { useContext } from 'react';


const Footer = ()=>{
    const { user }  = useContext(UserContext)
    
    return (
        <div>
            
            
            <div>{user.name} - {user.email}</div>    
              
        </div>

    )
}

export default Footer;