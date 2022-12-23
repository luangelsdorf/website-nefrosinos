export default async function handler(req, res) {
  if (req.method === 'POST') {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      subject: `Nova Mensagem | Website NefroSinos`,
      text: `Mensagem: ${req.body.message} | Enviada de ${req.body.email}`,
      html: `
                <div>Você recebeu uma nova mensagem no seu site. Confira as informações abaixo:</div>
                <p><strong>Nome</strong>: ${req.body.name}</p>
                <p><strong>Telefone</strong>: ${req.body.phone}</p>
                <p><strong>E-mail</strong>: ${req.body.email}</p>
                <p><strong>Mensagem</strong>: ${req.body.message}</p>
              `
    }

    await sgMail.send(message);
    return res.status(200).end();
  }

  return res.status(405).end();
}