import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SchemaSwaggerSchema } from '@/utils/form/form.helper';
import { SchemaData, SchemaParam } from '@/utils/form/form.types';
import { Schema } from '@/utils/state/types';
import { useEffect, useState } from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';

interface SetValue {
  form: UseFormReturn<SchemaSwaggerSchema>;
  setSchema: React.Dispatch<React.SetStateAction<Schema | undefined>>;
}

const SchemaPartForm: React.FC<SetValue> = ({ form, setSchema }) => {
  const [schemasData, setSchemas] = useState<SchemaSwaggerSchema[]>([]);
  const {
    fields: properties,
    append: appendProperty,
    remove: removeProperty,
  } = useFieldArray({
    name: 'properties',
    control: form.control,
  });

  const onReset = () => {
    form.reset();
  };

  const onSubmit = (values: SchemaSwaggerSchema) => {
    setSchemas((prevSchemas: SchemaSwaggerSchema[]) => [
      ...prevSchemas,
      values,
    ]);
    onReset();
  };

  useEffect(() => {
    const transformedSchemas: Schema = {
      schema: schemasData.map((scheme: SchemaData) => ({
        name: scheme.name || '',
        properties: scheme.properties.map((prop: SchemaParam) => ({
          name: prop.name || '',
          type: prop.type || '',
          example: prop.example || '',
        })),
      })),
    };
    setSchema(transformedSchemas);
  }, [schemasData, setSchema]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Card className="space-y-4 p-2">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Schema Name
            </h4>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Add schema name" {...field} />
                  </FormControl>
                  <FormDescription>Set your schema name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Properties of Schema
            </h4>
            {properties.map((_, propertyIndex) => (
              <Card className="px-2 pb-1" key={propertyIndex}>
                <div className="gap-2 grid grid-cols-2">
                  <FormField
                    control={form.control}
                    name={`properties.${propertyIndex}.type`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="string">String</SelectItem>
                            <SelectItem value="integer">Integer</SelectItem>
                            <SelectItem value="number">Number</SelectItem>
                            <SelectItem value="boolean">Boolean</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the type of schema property.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`properties.${propertyIndex}.name`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter property name" {...field} />
                        </FormControl>
                        <FormDescription>
                          Add the name of schema property name
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`properties.${propertyIndex}.example`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Example</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter property example value"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Add some property example value
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}
            <div className="flex flex-row gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() =>
                  appendProperty({
                    name: '',
                    type: '',
                    example: '',
                  })
                }
              >
                Add Property
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 ml-1 bg-red-300 hover:bg-red-500 hover:text-white"
                onClick={() => {
                  if (properties.length > 1) {
                    removeProperty(properties.length - 1);
                  }
                }}
                disabled={properties.length === 1}
              >
                Remove Property
              </Button>
            </div>
            <div className="flex flex-row mt-3">
              <h5 className="flex-1 font-medium">
                Endpoint Added: {schemasData.length}
              </h5>
              <div className="flex justify-end gap-2">
                <Button
                  type="reset"
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => onReset()}
                >
                  Reset Data
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  type="submit"
                  disabled={!form.formState.isValid}
                >
                  Save Schema
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </form>
    </Form>
  );
};

export default SchemaPartForm;
