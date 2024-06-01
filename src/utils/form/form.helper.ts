import { z } from 'zod';
import {
  basicFormSchema,
  pathFormSchema,
  reqBodySchema,
  responseSchema,
  schemaFormSchema,
} from './schema';

export type BasicSwaggerSchema = z.infer<typeof basicFormSchema>;
export type SchemaSwaggerSchema = z.infer<typeof schemaFormSchema>;
export type PathSwaggerSchema = z.infer<typeof pathFormSchema>;
export type ReqSwaggerSchema = z.infer<typeof reqBodySchema>;
export type ResSwaggerSchema = z.infer<typeof responseSchema>;

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

export const defaultValueReq: Partial<ReqSwaggerSchema> = {
  endpoint: '',
  ref: '',
};

export const defaultValueRes: Partial<ResSwaggerSchema> = {
  endpoint: '',
  res_param: [
    {
      status: '',
      description: '',
      ref: '',
    },
  ],
};
