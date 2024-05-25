import { openAPI } from '@/utils/json.builder';
import useSwaggerState from '@/utils/state/state';
import { useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import SwaggerUI from 'swagger-ui-react';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const SwaggerResult: React.FC = () => {
  const { setBasic, setSchema, setPath, clearState, ...value } =
    useSwaggerState();

  useEffect(() => {
    console.log('Value on state:', value);
  }, [value]);

  const data = openAPI(value);
  console.log(data);

  const jsonData = JSON.stringify(data, null, 2);
  console.log(jsonData);

  return (
    <Tabs defaultValue="code" className="w-full p-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="code">JSON Result</TabsTrigger>
        <TabsTrigger value="swagger">Swagger View</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        <Card>
          <CardContent className="space-y-2">
            <CodeMirror
              className="pt-6"
              value={jsonData}
              height="450px"
              theme={'dark'}
              basicSetup
              autoFocus
              editable
              extensions={[json(), linter(jsonParseLinter())]}
            />
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="swagger">
        <Card>
          <CardContent>
            <SwaggerUI spec={data} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SwaggerResult;
