import React from "react";
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


const CreatePoint = function () {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Logo" />
        <Link to={'/'}>
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>
      <form>
        <h1>Cadastro do <br />Ponto de Coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da Entidade</label>
            <input
              type="text"
              name="name"
              id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione um endereço no mapa</span>
          </legend>
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">UF</label>
              <select name="uf" id="uf">
                <option value="0"> Selecione uma UF</option>
              </select>
            </div>


            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0"> Selecione uma Cidade</option>
              </select>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítems de Coleta</h2>
            <span>Selecione um ou mais items abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Oleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="" />
              <span>Oleo de Cozinha</span>
            </li>
            <li className="selected">
              <img src="http://localhost:3333/uploads/baterias.svg" alt="" />
              <span>Oleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Oleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="" />
              <span>Oleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/baterias.svg" alt="" />
              <span>Oleo de Cozinha</span>
            </li>
          </ul>

        </fieldset>

        <button type="submit">
          Cadastrar Ponto de Coleta
        </button>
      </form>
    </div >

  );
}
export default CreatePoint;