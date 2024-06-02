import { z } from 'zod';
import {
  basicFormSchema,
  pathFormSchema,
  reqBodySchema,
  responseSchema,
  schemaFormSchema,
} from './schema';
import { ItemMethod, ItemStatus } from './form.types';

export const methods: ItemMethod[] = [
  { id: 'post', label: 'POST' },
  { id: 'get', label: 'GET' },
  { id: 'put', label: 'PUT' },
  { id: 'patch', label: 'PATCH' },
  { id: 'delete', label: 'DELETE' },
];

export const status: ItemStatus[] = [
  { status: '100', label: 'Continue' },
  { status: '101', label: 'Switching Protocols' },
  { status: '102', label: 'Processing' },
  { status: '103', label: 'Entry Hints' },
  { status: '200', label: 'OK' },
  { status: '201', label: 'Created' },
  { status: '202', label: 'Accepted' },
  { status: '204', label: 'No Content' },
  { status: '206', label: 'Partial Content' },
  { status: '300', label: 'Multiple Choices' },
  { status: '301', label: 'Moved Permanently' },
  { status: '304', label: 'Not Modified' },
  { status: '307', label: 'Temporary Redirect' },
  { status: '308', label: 'Payment Redirect' },
  { status: '400', label: 'Bad Request' },
  { status: '401', label: 'Unauthorized' },
  { status: '403', label: 'Forbidden' },
  { status: '404', label: 'Not Found' },
  { status: '409', label: 'Conflict' },
  { status: '500', label: 'Internal Server Error' },
  { status: '501', label: 'Not Implemented' },
  { status: '502', label: 'Bad Gateway' },
  { status: '503', label: 'Service Unavailable' },
  { status: '504', label: 'Gateway Timeout' },
];

export type BasicSwaggerSchema = z.infer<typeof basicFormSchema>;
export type SchemaSwaggerSchema = z.infer<typeof schemaFormSchema>;
export type PathSwaggerSchema = z.infer<typeof pathFormSchema>;
export type ReqSwaggerSchema = z.infer<typeof reqBodySchema>;
export type ResSwaggerSchema = z.infer<typeof responseSchema>;

export const defaultValuesBasic: Partial<BasicSwaggerSchema> = {
  swagger: '',
  description: '',
  version: '',
  license: {
    name: '',
    url: '',
  },
  tags: [{ name: '', desc: '' }],
};

export const defaultValueSchema: Partial<SchemaSwaggerSchema> = {
  name: '',
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
  tags: '',
};

export const defaultValueReq: Partial<ReqSwaggerSchema> = {
  endpoint: '',
  ref: '',
};

export const defaultValueRes: Partial<ResSwaggerSchema> = {
  endpoint: '',
  status: '',
  description: '',
  ref: '',
};
