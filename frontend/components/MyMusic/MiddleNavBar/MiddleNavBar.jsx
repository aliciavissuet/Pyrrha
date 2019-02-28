import React from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import {linksEnum} from './middle_nav_enum';

const MiddleNavBar = (props) => {
    const links = Object.values(linksEnum).map((linkType, i) => (
         <Link
            key={i} 
            to={`/my-music/${linkType}`}
            className={cx('my-music-header-link', { 'selected-link': props.location.pathname === `/my-music/${linkType}`})}
        >
            {linkType}
        </Link>
    ));
    // const linkClass = cx('middle-nav-link', {'current-link': props.location.pathname === })
    return (
        <div className='middle-nav'>
            <h1 className='my-music-component-header'>Added</h1>
            <div className='middle-nav-links'>
                {links}
            </div>
        </div>
    );
};

export default MiddleNavBar;