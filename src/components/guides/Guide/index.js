import { useMemo } from 'react';
import styles from './Guide.module.scss';

export default function Guide({ content }) {

  const finalUrl = useMemo(() => {
    if (!content.text) return null;

    // Caso 1: É um código de iframe completo?
    if (content.text.includes('<iframe')) {
      // Regex para capturar o conteúdo dentro do atributo src="..."
      const match = content.text.match(/src=["']([^"']+)["']/i);
      return match ? match[1] : null;
    }

    // Caso 2: Já é uma URL direta
    return content.text;
  }, [content.text]);

  if (!finalUrl) return null;

  return (
    <div className={styles.wrapper}>
      <h2>{content.title}</h2>
      <div className="container">
        <iframe src={finalUrl} frameborder="0" />
      </div>
    </div>
  )
}
