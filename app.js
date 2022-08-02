const { bootstrap } = require("@kaholo/plugin-library");

async function hello(params) {

  const {
    helloName,
    saySecret,
    secret,
  } = params;

  let greeting = `Hello ${helloName}!`;

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
