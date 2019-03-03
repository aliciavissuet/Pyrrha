import React from 'react';
import cx from 'classnames'
import ModalContentsContainer from './ModalContentsContainer';
const SearchModal = ({ handleClose, show, id, children }) => {
    const showHideClassname = cx("modal display-none", { "modal display-block": show });

    return (
        <div className={showHideClassname}>
            <section className="modal-main">
                <button className='modal-button' onClick={handleClose}>close</button>
                <br/>
                {children}
                {/* <input type="text" placeholder='Search for song, artist or album' onChange={search}/> */}
                <br/>
                {/* <ModalContentsContainer id={id}/> */}
            </section>
        </div>
    );
};
export default SearchModal