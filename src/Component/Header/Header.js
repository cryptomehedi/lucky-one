import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div className="text-center">
            <h1 className="text-red-700 text-4xl font-extrabold">hi this is mehedi  ?</h1>
            <h4 className="text-green-800 text-3xl font-semibold">Choose 4 Items <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon> </h4>
        </div>
    );
};

export default Header;