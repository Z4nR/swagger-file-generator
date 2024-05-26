import { z } from 'zod';
import { basicFormSchema, pathFormSchema, schemaFormSchema } from './schema';

export type BasicSwaggerSchema = z.infer<typeof basicFormSchema>;
export type SchemaSwaggerSchema = z.infer<typeof schemaFormSchema>;
export type PathSwaggerSchema = z.infer<typeof pathFormSchema>;

export const defaultValuesBasic: Partial<BasicSwaggerSchema> = {
  swagger: '3.0.3',
  description: '',
  version: '0.0.0',
  license: {
    name: '',
    url: '',
  },
  tags: [{ name: '', desc: '' }],
};

export const defaultValueSchema: Partial<SchemaSwaggerSchema> = {
  properties: [
    {
      name: '',
      type: '',
      example: '',
    },
  ],
};

export const defaultValuesPath: Partial<PathSwaggerSchema> = {
  method: ['get'],
  endpoint: '',
  tags: 'Lorem',
};
