async function hello(action, settings) {
  const name = action.params.helloName || settings.helloName;
  const saySecret = action.params.saySecret || undefined;
  const secret = action.params.secret || undefined;
  if (!name) {
    throw new Error("No name was given.");
  }
  let greeting = `Hello ${name}.`;
  if (saySecret) {
    if (!secret) {
      throw new Error("No secret was provided to say. Please provide a secret or uncheck \"Say Secret\".");
    }
    greeting += ` Here is the secret: ${secret}`;
  }
  return greeting;
}

module.exports = {
  hello,
};
