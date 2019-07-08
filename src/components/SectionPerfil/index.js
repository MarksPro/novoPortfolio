import React from 'react';
import {Link} from 'react-router-dom';

const SectionPerfil = () => {
  return ( 
    <section>
      <div>
        <h2>Não só pensando no design, tenho um kit de ferramentas para desenvolver sua aplicação/projeto.</h2>
        <span></span>
        <p>Sempre pensando em melhorar o meu potencial criativo todos os dias, amo tendências e perder horas buscando referencias de projetos que estão sempre no auge, para buscar novas ideias. Acredito que o Front-End é uma das melhores coisas para fazer um profissional completo. Modularização, web design responsivo, guias de estilos, CSS3, Javascript são as ferramentas principais da web. Prezo em manter um código muito bem organizados e semânticos</p>
        <Link>Saiba mais sobre mim</Link>
      </div>
      <Link>Acesse meu blog</Link>
    </section>
   );
}
 
export default SectionPerfil;