const { bootstrap } = require("@kaholo/plugin-library");

async function hello(params) {
  const name = params.helloName || "there";
  const saySecret = params.saySecret || undefined;
  const secret = params.secret || undefined;

  let greeting = `Hello ${name}!`;

  if (saySecret && !secret) {
    throw new Error("No secret was provided to say. Please provide a secret or uncheck \"Say Secret\".");
  }

  if (saySecret) {
    greeting += `\nHere is the secret: ${secret}`;
  }

  return greeting;
}

module.exports = bootstrap({
  hello,
});
