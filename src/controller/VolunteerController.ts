import { Handler } from "express";
import { safeParse, to } from "../errors/HttpError";
import { prisma } from "../database";
import { CreateVolunteerRequestSchema } from "./schemas/VolunteerRequestSchema";
import logger from "../logger";

export class VolunteerController {
  create: Handler = async (req, res, next) => {
    const [parseErr, body] = safeParse (CreateVolunteerRequestSchema, req.body);
    if (parseErr) {
    logger.error(`Erro de validação: ${parseErr.stack || parseErr.message}`);
    return next(parseErr);
  }

    const [err, newVolunteer] = await to(prisma.volunteer.create({ data: body! }));

    if (err) {
      logger.error(`Erro ao criar voluntário: ${err.stack || err.message}`);
      return next(err);
    }

    if (newVolunteer !== null)logger.info(`Voluntário criado: ${newVolunteer.name}`);
    res.status(201).json(newVolunteer);
}
}

