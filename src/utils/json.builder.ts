import { CombinedState } from './state/types';

const validateExampleParam = (
  type: string,
  example: string
): string | number | boolean => {
  let exampleData: string | number | boolean;
  const regexInt = /^\d+$/;

  switch (true) {
    case type === 'integer' && regexInt.test(example):
      exampleData = parseInt(example, 10);
      break;

    case type === 'integer' && !regexInt.test(example):
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'boolean' && example === 'true':
      exampleData = true;
      break;

    case type === 'boolean' && example === 'false':
      exampleData = false;
      break;

    case type === 'boolean':
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'string':
      exampleData = example;
      break;

    default:
      exampleData = 'Type is unknown';
      break;
  }

  return exampleData;
};

const validateExampleProp = (
  type: string,
  example: string
): string | number | boolean => {
  let exampleData: string | number | boolean;
  const regexInt = /^\d+$/;

  switch (true) {
    case type === 'integer' || (type === 'number' && regexInt.test(example)):
      exampleData = parseInt(example, 10);
      break;

    case type === 'integer' || (type === 'number' && !regexInt.test(example)):
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'boolean' && example === 'true':
      exampleData = true;
      break;

    case type === 'boolean' && example === 'false':
      exampleData = false;
      break;

    case type === 'boolean':
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'string':
      exampleData = example;
      break;

    default:
      exampleData = 'Type is unknown';
      break;
  }

  return exampleData;
};

export const openAPI = (value: CombinedState) => {
  const paths = value.paths.map((item) => {
    const param = item.parameters.map((param) => {
      const exampleData = validateExampleParam(param.type, param.example);

      return {
        name: param.name,
        in: param.in,
        description: param.description,
        required: param.required,
        schema: {
          type: param.type,
          example: exampleData,
        },
      };
    });

    const method = item.method.map((http) => {
      return {
        [http]: {
          tags: [item.tags],
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

  const schema = value.schema.map((item) => {
    const prop = item.properties.map((prop) => {
      const exampleData = validateExampleProp(prop.type, prop.example);

      return {
        name: prop.name,
        type: prop.type,
        example: exampleData,
      };
    });

    return {
      [item.name]: {
        type: 'object',
        properties: {
          ...prop,
        },
      },
    };
  });

  if (value.swagger !== '2.0') {
    return {
      openapi: value.swagger,
      info: {
        title: value.title,
        description: value.description,
        license: value.license,
        version: value.version,
      },
      servers: [
        {
          url: value.api,
        },
      ],
      tags: value.tags,
      paths: paths,
      components: {
        schemas: {
          ...schema,
        },
      },
    };
  } else {
    return {
      swagger: value.swagger,
      info: {
        title: value.title,
        description: value.description,
        license: value.license,
        version: value.version,
      },
      host: value.api,
      tags: value.tags,
      paths: paths,
      components: {
        schemas: {
          ...schema,
        },
      },
    };
  }
};
