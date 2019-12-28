import * as Joi from '@hapi/joi';

export const HobbyType: Joi.SchemaMap = {
    name: Joi.string().required(),
    passionLevel: Joi.string().required(),
    year: Joi.string(),
    userId: Joi.string().required()
};
