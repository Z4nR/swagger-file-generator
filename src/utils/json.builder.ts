import { CombinedState } from './state/types';

export const openAPI = (value: CombinedState) => {
  const paths = value.paths.map((item) => {
    const method = item.method.map((http) => {
      return {
        [http]: {
          parameters: item.parameters,
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
      paths: paths,
    };
  } else {
    console.log('Coming Soon');
  }
};
