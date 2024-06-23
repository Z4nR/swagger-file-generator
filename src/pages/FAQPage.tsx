import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate('/')}
        variant={'destructive'}
        className="right-3 bottom-3 z-10 fixed"
      >
        Kembali
      </Button>
    </>
  );
};

export default FAQPage;
