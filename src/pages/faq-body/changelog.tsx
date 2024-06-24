import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { versioningLog } from '@/utils/versioning';

const Changelog: React.FC = () => {
  return (
    <div className="flex-[4] p-4">
      <h2 className="text-xl font-semibold">Changelog</h2>
      <Accordion type="single" collapsible>
        {versioningLog.map((item, index) => (
          <AccordionItem key={index + 1} value={item.version}>
            <AccordionTrigger>
              {item.version} - {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Changelog;
