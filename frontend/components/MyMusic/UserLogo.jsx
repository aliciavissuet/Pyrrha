import React, { Component } from 'react';
import cx from 'classnames';

class UserLogo extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     toggled: false
        // };
        this.logoutClick = this.logoutClick.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick (){
        // this.setState({toggled: !this.state.toggled});
        this.props.toggle;
    }
    logoutClick(){
        return this.props.logout();
    }
    render() {
        const dropDown = cx('user-actions', { 'actions-show': this.props.toggled });
        return (
            <div>
                <span onClick={this.props.toggle} className='username-initial'>{this.props.username[0]}</span>
                <ul className={dropDown}>
                    <li>
                        Profile
                    </li>
                    <li>
                        Settings
                    </li>
                    <li onClick={this.logoutClick}>
                        Log Out
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserLogo;