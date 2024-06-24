import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import FaqAccordion from './faq-body/faq-accordion';
import Changelog from './faq-body/changelog';

const FAQPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate('/')}
        variant={'destructive'}
        className="right-3 bottom-3 z-10 fixed"
      >
        Back
      </Button>
      <div className="w-full flex flex-row">
        <Changelog />
        <FaqAccordion />
      </div>
    </>
  );
};

export default FAQPage;
