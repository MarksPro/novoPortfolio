import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

const NavLink = () => {
  return ( 
      <ul>
        <HashLink>Home</HashLink>
        <HashLink>Portfólio</HashLink>
        <Link>Perfil</Link>
        <Link>Blog</Link>
        <HashLink>Home</HashLink>
      </ul>
   );
}
 
export default NavLink;