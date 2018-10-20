// see the readme for todos

module.exports = args => {
  // using an objects because we will need to return an object in future additions
  const parsed = {};
  parsed.seconds = Number(args[2]);
  return parsed;
};
