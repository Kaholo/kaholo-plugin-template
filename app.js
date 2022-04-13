function hello(action, settings) {
  return new Promise((resolve, reject) => {
    const name = action.params.helloName || settings.helloName;
    const saySecret = (action.params.saySecret && action.params.secret);
    const secret = saySecret ? action.params.secret : undefined;
    if (!name) {
      reject(new Error("No name was given."));
    }
    let greeting = `Hello ${name}.`;
    if (secret) {
      greeting += ` Here is the secret: ${secret}`;
    }
    resolve(greeting);
  });
}

module.exports = {
  hello,
};
