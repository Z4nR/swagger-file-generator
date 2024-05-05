import { create } from 'zustand';
import { Basic, BasicState, ClearState } from './types';

const useSgaggerState = create<BasicState & ClearState>()((set) => ({
  swagger: '',
  title: '',
  description: '',
  version: '',
  license: {
    name: '',
    url: '',
  },
  tags: [{ name: '', desc: '' }],
  setBasic: (state: Basic) =>
    set(() => ({
      swagger: state.swagger,
      title: state.title,
      description: state.description,
      version: state.version,
      license: state.license,
      tags: state.tags,
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
}));

export default useSgaggerState;
