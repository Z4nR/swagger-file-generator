import { CombinedState } from './state/types';

export const openAPI = (value: CombinedState) => {
  const paths = value.paths.map((item) => {
    const param = item.parameters.map((param) => {
      return {
        name: param.name,
        in: param.in,
        description: param.description,
        required: param.required,
        schema: {
          type: param.type,
          example: param.example,
        },
      };
    });
    const method = item.method.map((http) => {
      return {
        [http]: {
          description: 'Add your description here',
          parameters: param,
        },
      };
    });
    return {
      [item.endpoint]: {
        ...method,
      },
    };
  });
  console.log(paths);

  if (value.title !== '2.0.0') {
    return {
      openapi: value.swagger,
      info: {
        title: value.title,
        description: value.description,
        license: value.license,
        version: value.version,
        [value.title]: 'Lorem',
      },
      tags: value.tags,
      servers: [
        {
          url: value.api,
        },
      ],
      paths: paths,
    };
  } else {
    console.log('Coming Soon');
  }
};
