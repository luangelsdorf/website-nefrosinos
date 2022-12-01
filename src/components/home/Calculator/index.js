import Link from 'next/link';
import React from 'react';
import Arrow from 'public/images/icons/arrow-right.svg';
import Title from 'src/components/common/Title';
import styles from './Calculator.module.scss';

export default function Calculator() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  const result = '90ml/min x 1,73m 2'

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9 mx-auto">
            <div className={styles.calc}>
              <Title content={{ title: 'Calculadora de Função Renal', overline: 'Calculadora Nefrologica CKD-EPI 2021' }} />
              <p>
                É fundamental que o resultado seja avaliado por um especialista da área para garantir o melhor uso dessa informação.&nbsp;
                <Link href="/contato">
                  <a>Fale Conosco <Arrow /></a>
                </Link>
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <input placeholder="Creatinina" type="number" />
                <input placeholder="Idade" type="number" />
                <select>
                  <option value="">Selecione seu Sexo</option>
                  <option value="f">Feminino</option>
                  <option value="m">Masculino</option>
                </select>
                <button className="btn" type="submit">Calcular Valores <Arrow /></button>
                <div className={styles.result}>
                  <span>Resultado: <span>{result}</span></span>
                </div>
              </form>

              <a href="#">Confira aqui a tabela completa com valores de referência.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
