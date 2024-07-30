import { CombinedState } from '../state/types';

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
  if (value.swagger !== '2.0') {
    return oasThreeAbove(value);
  } else {
    return oasTwo(value);
  }
};

const oasTwo = (value: CombinedState) => {
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

    const body = value.body
      .filter((req) => req.endpoint === item.endpoint)
      .map((req) => {
        return {
          in: 'body',
          name: 'body',
          description: 'Add your description here',
          required: true,
          schema: {
            $ref: `#/definitions/${req.ref}`,
          },
        };
      });

    const res = value.res
      .filter((res) => res.endpoint === item.endpoint)
      .map((res) => {
        if (res.ref === '') {
          return {
            [res.status]: {
              default: {
                description: res.description,
              },
            },
          };
        }

        return {
          [res.status]: {
            description: res.description,
            content: {
              'application/json': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
              'application/xml': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
            },
          },
        };
      });

    const method = item.method.map((http) => {
      if (['put', 'post', 'patch'].includes(http)) {
        return {
          [http]: {
            tags: [item.tags],
            description: 'Add your description here',
            parameters: [...param, ...body],
            responses: { ...res },
          },
        };
      }

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

  const schema = value.schema.map((item) => {
    const prop = item.properties.map((prop) => {
      const exampleData = validateExampleProp(prop.type, prop.example);

      return {
        [prop.name]: {
          type: prop.type,
          example: exampleData,
        },
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
    paths: { ...paths },
    definitions: {
      ...schema,
    },
  };
};

const oasThreeAbove = (value: CombinedState) => {
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

    const body = value.body
      .filter((req) => req.endpoint === item.endpoint)
      .map((req) => {
        return {
          description: 'Add your description here',
          content: {
            'application/json': {
              schema: {
                $ref: `#/components/schemas/${req.ref}`,
              },
            },
            'application/xml': {
              schema: {
                $ref: `#/components/schemas/${req.ref}`,
              },
            },
            'application/x-www-form-urlencoded': {
              schema: {
                $ref: `#/components/schemas/${req.ref}`,
              },
            },
          },
        };
      });

    const res = value.res
      .filter((res) => res.endpoint === item.endpoint)
      .map((res) => {
        if (res.ref === '') {
          return {
            [res.status]: {
              default: {
                description: res.description,
              },
            },
          };
        }

        return {
          [res.status]: {
            description: res.description,
            content: {
              'application/json': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
              'application/xml': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
            },
          },
        };
      });

    const method = item.method.map((http) => {
      if (['put', 'post', 'patch'].includes(http)) {
        return {
          [http]: {
            tags: [item.tags],
            description: 'Add your description here',
            parameters: param,
            requestBody: { ...body },
            responses: { ...res },
          },
        };
      }

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

  const schema = value.schema.map((item) => {
    const prop = item.properties.map((prop) => {
      const exampleData = validateExampleProp(prop.type, prop.example);

      return {
        [prop.name]: {
          type: prop.type,
          example: exampleData,
        },
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
    paths: { ...paths },
    components: {
      schemas: {
        ...schema,
      },
    },
  };
};
