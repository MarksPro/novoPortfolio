import React from 'react';
import NavLink from '../NavLink';

const SectionContato = () => {
  return ( 
    <section>
      <NavLink/>
      <div>
        <form>
          <h3>Entre em contato</h3>
          <span></span>

          <label>Nome:</label>
          <input type="text"/>

          <label>Telefone:</label>
          <input type="text"/>

          <label>Endereço:</label>
          <input type="text"/>

          <label>E-mail:</label>
          <input type="text"/>

          <label>Mensagem:</label>
          <textarea></textarea>

          <button type="submit">Enviar</button>
        </form>

        <div>
          <h3>#Rede sociais</h3>
          <ul>
            <a href="#">iconSocial</a>
          </ul>
          <h3>Outros contatos</h3>
          <p>marcosfsprivado@gmail.com</p>
          <p>(024)99249-5302</p>
          <p>Petrópolis/Rio de Janeiro - Brasil</p>
        </div>
      </div>
    </section>
   );
}
 
export default SectionContato;