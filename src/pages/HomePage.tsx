import { Button } from '@/components/ui/button';
import SwaggerForm from './form-body/form-pages';
import SwaggerResult from './form-body/form-result';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate('/faq')}
        variant={'destructive'}
        className="right-3 bottom-3 z-10 fixed"
      >
        Anything Else?
      </Button>
      <div className="flex gap-3 lg:flex-row flex-col">
        <div className="flex-1 p-4">
          <SwaggerForm />
        </div>
        <div className="flex-1">
          <SwaggerResult />
        </div>
      </div>
    </>
  );
};

export default HomePage;
