import React, { Component } from 'react';
import Navbar from './Navbar.js'
import FormField from './FormField'
import CoolButton from './CoolButton'


class SignUp extends Component {
    render() {
        return (
            <div>
                <Navbar />
                
                
                <FormField  label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField  label="Email" type="email" placeholder="ASmith8888@gmail.com" />
                <FormField  label="Password" type="password"  />

                <CoolButton style="is-success button" text="submit" />
            </div>
        );
    }
}

export default SignUp;