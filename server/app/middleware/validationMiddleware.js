const validation = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    next();
  } catch (e) {
    res.status(400).json({ error: e.errors.join(", ") });
  }
};

module.exports = validation;
