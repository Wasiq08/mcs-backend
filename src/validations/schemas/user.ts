import * as Joi from '@hapi/joi';

export const userType: Joi.SchemaMap = {
    name: Joi.string().required(),
};
