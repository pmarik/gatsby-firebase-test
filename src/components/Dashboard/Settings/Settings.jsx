import React from 'react'

import {
    AuthUserContext,
} from '../../Auth/Session';
import PasswordChangeForm from '../../Auth/PasswordChange'

const Projects = () => {
    return (
            <AuthUserContext.consumer>
                {authUser => (
                    <>
                        <h3>I am the settings component</h3>
                        <h3>Account: {authUser.email} </h3>
                        <PasswordChangeForm />
                    </>
                )}
            </AuthUserContext.consumer>
    )
}

export default Projects;