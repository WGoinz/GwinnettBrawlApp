import React from 'react';
import LoggedIn from './LoggedIn';

function Nav(props) {
    const logged_out_nav = (
        <ul>
            <li onClick={() => props.display_form('login')}>login</li>
            <li onClick={() => props.display_form('signup')}>signup</li>
        </ul>
    );

    const logged_in_nav = (
        <div>
            <ul>
                <li onClick={props.handle_logout}>logout</li>
            </ul>
            <LoggedIn />
        </div>
    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;
