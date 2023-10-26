const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function Insert(req, res) {
  // console.log(req.query.name);

  // create validation
  const { name, email } = req.body;

  const payload = {
    name,
    email,
  };

  try {
    const user = await prisma.user.create({
      data: payload,
    });

    let resp = ResponseTemplate(user, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Get(req, res) {
  const { name, email } = req.query;

  const payload = {};

  if (name) {
    payload.name = name;
  }

  if (email) {
    payload.email = email;
  }

  try {
    const users = await prisma.user.findMany({
      where: payload,
      include: {
        posts: {
          where: {
            title: "test",
          },
        },
      },
    });

    let resp = ResponseTemplate(users, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

module.exports = {
  Get,
  Insert,
};
