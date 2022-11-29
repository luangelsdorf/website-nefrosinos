export function getExcerpt(string, wordLimit = 24) {
  let cleanText = string.replace(/(<([^>]+)>)/gi, "").split(' ').slice(0, wordLimit).join(' ');
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

function calcularckdepi() {
  var cr = document.getElementById("creatinina").value;
  var idade = document.getElementById("idade").value;

  if (document.getElementById('masculino').checked) {
    var pot1 = Math.pow(Math.min((cr / 0.9), 1), -0.302);
    var pot2 = Math.pow(Math.max((cr / 0.9), 1), -1.200);
    var pot3 = Math.pow(0.9938, idade);
    var rfg = 142 * pot1 * pot2 * pot3;
    resultado = rfg.toFixed(0);
  }

  else if (document.getElementById('feminino').checked) {
    var pot1 = Math.pow(Math.min((cr / 0.7), 1), -0.241);
    var pot2 = Math.pow(Math.max((cr / 0.7), 1), -1.200);
    var pot3 = Math.pow(0.9938, idade);
    var rfg = 142 * pot1 * pot2 * pot3 * 1.012;
    resultado = rfg.toFixed(0)
  }

  if (cr && idade) {
    document.getElementById("resultado").innerHTML = "<div style='border: 1px solid #c0c0c0; padding: 10px 20px;'>Resultado:<b> " + resultado + "</b>mL/min/1.73m2</div>"
  } else {
    document.getElementById("resultado").innerHTML = "<div style='border: 1px solid #c0c0c0; padding: 10px 20px;'>Informe todos os dados solicitados.</div>"
  }
}