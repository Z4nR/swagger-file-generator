import { Separator } from './components/ui/separator';
import { SwaggerForm } from './pages/form-pages';
import './styles/index.css';

function App() {
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
}

export default App;
