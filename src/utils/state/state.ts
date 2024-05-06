import { create } from 'zustand';
import { Basic, ClearState, Path, SchemaState } from './types';

const useSgaggerState = create<Basic & Path & SchemaState & ClearState>()(
  (set) => ({
    swagger: '',
    title: '',
    description: '',
    version: '',
    license: {
      name: '',
      url: '',
    },
    tags: [{ name: '', desc: '' }],
    paths: [
      {
        method: ['post', 'get'],
        endpoint: '',
        parameters: [
          { name: '', in: '', required: true, description: '', type: '' },
        ],
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
      })),
    setPath: (state: Path) =>
      set(() => ({
        paths: state.paths,
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
      })),
  })
);

export default useSgaggerState;
