export function getExcerpt(string, wordLimit = 24) {
  let cleanText = string.replace(/(<([^>]+)>)/gi, "").split(' ').slice(0, wordLimit).join(' ').replaceAll('&nbsp;', '');
  const lastChar = cleanText.at(-1);
  switch (lastChar) {
    case '.':
    case ',':
    case '!':
    case '?':
      cleanText = cleanText.slice(0, -1);
  }
  cleanText += '…';
  return cleanText;
}

export const hasCategory = (post, category = '') => !!post.attributes.categories.data.filter(cat => cat.attributes.slug === category).length;

export function calculate(data) {
  let { creatinina, idade } = data;
  let result;

  if (data.sexo === 'm') {
    let pow1 = Math.pow(Math.min((creatinina / 0.9), 1), -0.302);
    let pow2 = Math.pow(Math.max((creatinina / 0.9), 1), -1.200);
    let pow3 = Math.pow(0.9938, idade);
    let rfg = 142 * pow1 * pow2 * pow3;
    result = rfg.toFixed(0);
  }

  else if (data.sexo === 'f') {
    let pot1 = Math.pow(Math.min((creatinina / 0.7), 1), -0.241);
    let pot2 = Math.pow(Math.max((creatinina / 0.7), 1), -1.200);
    let pot3 = Math.pow(0.9938, idade);
    let rfg = 142 * pot1 * pot2 * pot3 * 1.012;
    result = rfg.toFixed(0)
  }

  return result;
}