import './Projects.css';

import React from 'react';

const Projects = () => {
  return (
    <div className="CardsCont">
      <div className="cardCont">
        <h3>Mindker</h3>
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1675956560/projects/mindker_sax3eq.jpg"
          alt="imagen del proyecto"
        />
        <p>
          Es una app completa con front y back. Es un juego hecho para el estudio y
          aprendizaje de diversos temas. Las tecnologías utilizadas son: React, HTML, CSS,
          Chakra, Node, JavaSript, Express, MongoDB, Cloudinary.
        </p>
        <section className="links">
          <a className="linkapp" href="https://github.com/mindker" target="blank">
            Ver app
          </a>
          <a className="linkrepo" href="https://github.com/mindker" target="blank">
            Repositorio
          </a>
        </section>
      </div>

      <div className="cardCont">
        <h3>Hub de juegos</h3>
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1675955054/projects/gameshub_c5dxca.jpg"
          alt="imagen del proyecto"
        />
        <p>
          Es una aplicación que consta con dos juegos (Quizz y Mole game) y una página con
          información sobre pokemon. Las tecnologías utilizadas son: JavaScript, HTML y
          CSS.
        </p>
        <section className="links">
          <a
            className="linkapp"
            href="https://gameshub-jt3i.onrender.com/"
            target="blank"
          >
            Ver app
          </a>
          <a className="linkrepo" href="https://github.com/Mamupe/hub_app" target="blank">
            Repositorio
          </a>
        </section>
      </div>
      <div className="cardCont">
        <h3>Series y Películas</h3>
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1675956560/projects/series_ges6id.jpg"
          alt="imagen del proyecto"
        />
        <p>
          Es una aplicación que recrea una plataforma de series y películas en streaming.
          Las tecnologías utilizadas son: React, JavaScript, HTML y CSS.
        </p>
        <section className="links">
          <a className="linkapp" href="https://series-pelis.vercel.app/" target="blank">
            Ver app
          </a>
          <a
            className="linkrepo"
            href="https://github.com/Mamupe/Prueba_tecnica"
            target="blank"
          >
            Repositorio
          </a>
        </section>
      </div>
      <div className="cardCont">
        <h3>Móviles y Tablets </h3>
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1675956560/projects/moviles_q09ahc.jpg"
          alt="imagen del proyecto"
        />
        <p>
          Es una aplicación que recrea una tienda online de móviles y tablets. Las
          tecnologías utilizadas son: React, JavaScript, HTML y CSS.
        </p>
        <section className="links">
          <a
            className="linkapp"
            href="https://phoneshopmamupe.vercel.app/"
            target="blank"
          >
            Ver app
          </a>
          <a
            className="linkrepo"
            href="https://github.com/Mamupe/PT_GuideSmiths"
            target="blank"
          >
            Repositorio
          </a>
        </section>
      </div>
      <div className="cardCont">
        <h3>Music ApiRest</h3>
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1675956560/projects/musicapi_rw0prx.jpg"
          alt="imagen del proyecto"
        />
        <p>
          Es una base de datos sobre música que relaciona bandas, álbumes y canciones. Las
          tecnologías utilizadas son: Node, JavaSript, Express, MongoDB, Cloudinary,
          Swagger.
        </p>
        <section className="links">
          <a
            className="linkrepo1"
            href="https://github.com/Mamupe/Node_final_project"
            target="blank"
          >
            Repositorio
          </a>
        </section>
      </div>
      <div className="cardCont">
        <h3>Países del mundo</h3>
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1675955231/projects/countries_rjpr5n.jpg"
          alt="imagen del proyecto"
        />
        <p>
          Es una aplicación simple sobre países del mundo que obtiene la información de
          los mismos haciendo una petición a una API. Las tecnologías utilizadas son:
          JavaScript, HTML y CSS.
        </p>
        <section className="links">
          <a
            className="linkapp"
            href="https://1-html-css-js-simple.vercel.app/"
            target="blank"
          >
            Ver app
          </a>
          <a
            className="linkrepo"
            href="https://github.com/Mamupe/1.HTML_CSS_JS_Simple/"
            target="blank"
          >
            Repositorio
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;
