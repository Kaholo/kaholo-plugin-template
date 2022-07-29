async function hello(action, settings) {
  const name = action.params.helloName || "there";
  const saySecret = action.params.saySecret || undefined;
  const secret = action.params.secret || undefined;

  let greeting = `Hello ${name}!`;

  if (saySecret && !secret) {
    throw new Error("No secret was provided to say. Please provide a secret or uncheck \"Say Secret\".");
  }

  if (saySecret) {
    greeting += `\nHere is the secret: ${secret}`;
  }

  return greeting;
}

module.exports = {
  hello,
};
