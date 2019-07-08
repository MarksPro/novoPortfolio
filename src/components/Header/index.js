import React from 'react';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';

const Header = () => {
  return ( 
    <header>
      <HashLink>Logo</HashLink>
      <nav>
        <ul>
          <HashLink>Home</HashLink>
          <HashLink>Portfólio</HashLink>
          <Link>Perfil</Link>
          <Link>Blog</Link>
          <HashLink>Home</HashLink>
        </ul>
      </nav>
    </header>
   );
}
 
export default Header;