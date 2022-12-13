const prompt = require("prompt");
const colors = require("@colors/colors/safe");

const schema = {
  properties: {
    name: {
      description: colors.magenta("Informe seu nome?"),
      message: "Utilize apenas letras",
      pattern: /^[a-zA-Z\s\-]+$/,
      required: true,
    },
    lastname: {
      description: colors.blue("Informe seu sobrenome?"),
      message: "Utilize apenas letras",
      pattern: /^[a-zA-Z\s\-]+$/,
      required: true,
    },
    email: {
      description: colors.green("Informe seu email?"),
      message: "Preencha um email válido",
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      required: true,
    },
    cpf: {
      description: colors.yellow("Informe seu CPF?"),
      message: "Preencha um CPF válido",
      pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      required: true,
    },
  },
};
prompt.start();

prompt.get(schema, function (err, result) {
  console.log("Recebendo informações:");
  console.log("  Nome: " + result.name);
  console.log("  Sobrenome: " + result.lastname);
  console.log("  E-mail: " + result.email);
  console.log("  CPF: " + result.cpf);
});
