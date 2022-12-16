import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Arrow from 'public/images/icons/arrow-right.svg';
import Title from 'src/components/common/Title';
import styles from './Calculator.module.scss';
import { useForm } from 'react-hook-form';
import { calculate } from 'src/utils/helpers';
import ReferencePopUp from '../ReferencePopUp';

export default function Calculator({ content }) {
  const [result, setResult] = useState('');

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function onSubmit(data) {
    const result = calculate(data);
    setResult(result + 'mL/min/1.73m²')
  }

  return (
    <div className={styles.section}>
      <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div className={styles.decoration} />
        <div className="row">
          <div className="col-12 col-lg-9 mx-auto">
            <div className={styles.calc}>
              <Title content={{ title: 'Calculadora de Função Renal', overline: 'Calculadora Nefrologica CKD-EPI 2021' }} variant="dark" />
              <p>
                É fundamental que o resultado seja avaliado por um especialista da área para garantir o melhor uso dessa informação.&nbsp;
                <Link href="/contato">
                  <a>Fale Conosco <Arrow /></a>
                </Link>
              </p>

              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input type="number" step="0.01" placeholder="Creatinina" {...register('creatinina', { required: true })} />

                <input type="number" placeholder="Idade" {...register('idade', { required: true })} />

                <select {...register('sexo', { required: true })}>
                  <option value="">Selecione seu Sexo</option>
                  <option value="f">Feminino</option>
                  <option value="m">Masculino</option>
                </select>

                <button className="btn pink icon" type="submit">Calcular Valores</button>

                <div className={styles.result}>
                  <span key={result}>
                    Resultado: <span data-result={result}>{result}</span>
                  </span>
                </div>
              </form>
              
              <ReferencePopUp content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
