import React from 'react';
import {Link} from 'react-router-dom';
import './Intro.scss';

/**
 * Calculator component
 */
const Intro = () => {

    return (
      <form className="input-container panel">
        <Link to="/steps/1">Yes I agreext</Link>
      </form>
    );
}

export default Intro;