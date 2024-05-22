import { z } from 'zod';
import { basicFormSchema, pathFormSchema } from './schema';

export type BasicSwaggerSchema = z.infer<typeof basicFormSchema>;
export type PathSwaggerSchema = z.infer<typeof pathFormSchema>;

export const defaultValuesBasic: Partial<BasicSwaggerSchema> = {
  swagger: '3.0.3',
  title: '',
  description: '',
  version: '0.0.0',
  license: {
    name: 'Apache License 2.0',
    url: '',
  },
  tags: [{ name: '', desc: '' }],
};

export const defaultValuesPath: Partial<PathSwaggerSchema> = {
  method: ['get'],
  endpoint: '',
};
