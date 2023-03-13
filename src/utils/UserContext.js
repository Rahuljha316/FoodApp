import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: 'dummy name',
        email: 'dummy@dummy.com'
    }
})


export default UserContext;