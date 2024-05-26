import { openAPI } from '@/utils/json.builder';
import useSwaggerState from '@/utils/state/state';
import { useCallback, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const SwaggerResult: React.FC = () => {
  const [jsonString, setJsonString] = useState(`
  {"openapi": "3.0.3",
  "info": {
    "title": "Lorem Ipsum",
    "description": "Lorem Ipsum",
    "license": {
      "name": "Apache License 2.0",
      "url": "https://apache"
    },
    "version": "0.0.0"
  },
  "servers": [
    {
      "url": "https://url"
    }
  ]}
  `);
  const onChange = useCallback((val: string) => {
    console.log('val:', val);
    setJsonString(val);
  }, []);

  const { setBasic, setSchema, setPath, clearState, ...value } =
    useSwaggerState();
  const data = openAPI(value);

  useEffect(() => {
    console.log('Value on state:', data);
  }, [data]);

  const jsonToString = JSON.stringify(data, null, 2);
  const jsonParse = JSON.parse(jsonString);

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
              value={jsonToString}
              height="450px"
              theme={'dark'}
              basicSetup
              autoFocus
              editable
              extensions={[json(), linter(jsonParseLinter())]}
              onChange={onChange}
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
            <SwaggerUI spec={jsonParse} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SwaggerResult;
