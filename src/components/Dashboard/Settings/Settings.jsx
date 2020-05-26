import React, { useContext } from 'react'

import {
    AuthUserContext,
} from '../../Auth/Session';
import PasswordChangeForm from '../../Auth/PasswordChange'

const Projects = () => {

    const authUser = useContext(AuthUserContext);

    return (
            <>
                        <h3>I am the settings component</h3>
                        <h3>Account: {authUser.email} </h3>
                        <PasswordChangeForm />
            </>
    )
}

export default Projects;