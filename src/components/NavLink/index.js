import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

const NavLink = () => {
  return ( 
      <ul className="navlink">
        <HashLink className="navlink__item">Home</HashLink>
        <HashLink className="navlink__item">Portfólio</HashLink>
        <Link className="navlink__item">Perfil</Link>
        <Link className="navlink__item">Blog</Link>
        <HashLink className="navlink__item">Home</HashLink>
      </ul>
   );
}
 
export default NavLink;