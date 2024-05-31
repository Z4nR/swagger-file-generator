import { create } from 'zustand';
import {
  Basic,
  ClearState,
  CombinedState,
  Path,
  Req,
  Schema,
  SchemaState,
} from './types';

export const useSwaggerState = create<
  CombinedState & SchemaState & ClearState
>()((set) => ({
  swagger: '',
  title: '',
  description: '',
  version: '',
  license: {
    name: '',
    url: '',
  },
  tags: [{ name: '', desc: '' }],
  api: '',
  schema: [
    {
      name: '',
      properties: [
        {
          name: '',
          type: '',
          example: '',
        },
      ],
    },
  ],
  paths: [
    {
      method: ['get'],
      endpoint: '',
      tags: '',
      parameters: [
        {
          name: '',
          in: '',
          required: true,
          description: '',
          type: '',
          example: '',
        },
      ],
    },
  ],
  body: [
    {
      endpoint: '',
      ref: '',
    },
  ],
  setBasic: (state: Basic) =>
    set(() => ({
      swagger: state.swagger,
      title: state.title,
      description: state.description,
      version: state.version,
      license: state.license,
      tags: state.tags,
      api: state.api,
    })),
  setSchema: (state: Schema) =>
    set(() => ({
      schema: state.schema,
    })),
  setPath: (state: Path) =>
    set(() => ({
      paths: state.paths,
    })),
  setReq: (state: Req) =>
    set(() => ({
      body: state.body,
    })),
  clearState: () =>
    set(() => ({
      swagger: '',
      title: '',
      description: '',
      version: '',
      license: {
        name: '',
        url: '',
      },
      tags: [{ name: '', desc: '' }],
      api: '',
      schema: [
        {
          name: '',
          properties: [
            {
              name: '',
              type: '',
              example: '',
            },
          ],
        },
      ],
      paths: [
        {
          method: ['post', 'get'],
          endpoint: '',
          tags: '',
          parameters: [
            {
              name: '',
              in: '',
              required: true,
              description: '',
              type: '',
              example: '',
            },
          ],
        },
      ],
    })),
}));
