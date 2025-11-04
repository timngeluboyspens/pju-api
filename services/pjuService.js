const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const CustomError = require('../utils/customError');

// check if exist
const getPjuById = async (id) => {
  const pju = await prisma.pju.findFirst({
    where: { id: id },
  });

  if (!pju) {
    throw new CustomError('Pju doesnt exist', 400);
  }

  return pju;
};

const setPjuDefault = (pju_id, defaultValue = 1) => {
  if (typeof pju_id === 'undefined') {
    return defaultValue;
  } else if (typeof pju_id === 'string') {
    return parseInt(pju_id, 10);
  } else {
    return pju_id;
  }
};

const createPju = async (data) => {
  const newPju = await prisma.pju.create({
    data: data,
  });
  return newPju;
};

const getAllPju = async () => {
  const pjus = await prisma.pju.findMany();
  return pjus;
};

module.exports = { getPjuById, setPjuDefault, createPju, getAllPju };
