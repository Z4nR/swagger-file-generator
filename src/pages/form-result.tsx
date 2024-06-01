import { useCallback, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';
import { openAPI } from '@/utils/form/json.builder';
import { useSwaggerState } from '@/utils/state/state';

const SwaggerResult: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setBasic, setSchema, setPath, setReq, clearState, ...value } =
    useSwaggerState();
  const data = openAPI(value);
  const initialJsonString = JSON.stringify(data, null, 2);
  console.log(initialJsonString);

  const [jsonString, setJsonString] = useState(initialJsonString);

  useEffect(() => {
    setJsonString(initialJsonString);
  }, [initialJsonString]);

  const onChange = useCallback((val: string) => {
    console.log('val:', val);
    setJsonString(val);
  }, []);

  let jsonParse;
  try {
    jsonParse = JSON.parse(jsonString);
  } catch (e) {
    console.error('Invalid JSON:', e);
    jsonParse = {};
  }

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
              value={jsonString}
              height="450px"
              theme={'dark'}
              basicSetup
              autoFocus
              editable
              extensions={[json(), linter(jsonParseLinter())]}
              onChange={onChange}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="swagger">
        <Card>
          <CardContent>
            <SwaggerUI spec={jsonParse} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SwaggerResult;
