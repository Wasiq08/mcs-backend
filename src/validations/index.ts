import { SchemaLike, validate as joiValidate } from '@hapi/joi';


export const validate = <T>(payload: T, schema: SchemaLike): T => {
    const { error, value } = joiValidate(payload, schema);
    if (error) {
        throw error;
    }
    return value;
};