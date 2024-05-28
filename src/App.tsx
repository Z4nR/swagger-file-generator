import { Separator } from './components/ui/separator';
import SwaggerForm from './pages/form-pages';
import './styles/index.css';
import SwaggerResult from './pages/form-result';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <h3 className="mt-6 text-2xl font-semibold text-center">
        Generate Your Swagger Spec
      </h3>
      <h4 className="mt-2 text-sm font-semibold text-center">
        Create by WhatNext
      </h4>
      <Separator className="my-4" />
      <div className="flex gap-3">
        <div className="flex-1 p-4">
          <SwaggerForm />
        </div>
        <div className="flex-1">
          <SwaggerResult />
        </div>
      </div>
    </div>
  );
};

export default App;
