const { ResponseTemplate } = require("../helper/template.helper");
const Joi = require("joi");

function CheckPostReq(req, res, next) {
  const schema = Joi.object({
        name: Joi.string().alphanum().max(255).required(),
        email: Joi.string().min(3).required(),
        // password: Joi.string().alphanum().required()
    })

  const { error } = schema.validate(req.body);
  console.log(error)
  if (error) {
    let respErr = ResponseTemplate(
      null,
      "invalid request",
      error.details[0].message,
      400,
    );
    res.json(respErr)
    return;
  }

  next();
}

module.exports = {
  CheckPostReq,
};
