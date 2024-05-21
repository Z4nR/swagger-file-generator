import { useEffect } from 'react';
import { Separator } from './components/ui/separator';
import SwaggerForm from './pages/form-pages';
import './styles/index.css';
import useSwaggerState from './utils/state/state';

const App: React.FC = () => {
  const { setBasic, setPath, clearState, ...value } = useSwaggerState(); // Replace valueOnState with the actual value you want to check

  useEffect(() => {
    console.log('Value on state:', value);
  }, [value]);

  return (
    <div className="w-full">
      <div className="max-w-xl my-0 mx-auto py-2">
        <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"'>
          Generate Your Swagger Spec
        </h3>
        <Separator className="my-4" />
        <SwaggerForm />
      </div>
    </div>
  );
};

export default App;
