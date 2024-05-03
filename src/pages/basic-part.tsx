import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
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
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { formSchema } from '@/utils/schema';

type SwaggerSchema = z.infer<typeof formSchema>;

const defaultValues: Partial<SwaggerSchema> = {
  swagger: '3.0.3',
  title: '',
  description: '',
  version: '0.0.0',
  license: {
    name: 'Apache License 2.0',
    url: '',
  },
  tags: [{ name: '', desc: '' }],
};

const BasicPartForm: React.FC = () => {
  const form = useForm<SwaggerSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  });

  const tagsArray = useFieldArray({
    name: 'tags',
    control: form.control,
  });

  const onSubmit = (values: SwaggerSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            OpenAPI Specs Version
          </h4>
          <FormField
            control={form.control}
            name="swagger"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a OpenAPI Specs" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2.0.0">2.0.0</SelectItem>
                    <SelectItem value="3.0.1">3.0.1</SelectItem>
                    <SelectItem value="3.0.2">3.0.2</SelectItem>
                    <SelectItem value="3.0.3">3.0.3</SelectItem>
                    <SelectItem value="3.1.0">3.1.0</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This is your swagger OpenAPI Specs.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            API/Server URL
          </h4>
          <FormField
            control={form.control}
            name="api"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Please insert your API/Server Url"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your swagger license url.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Information API Docs
          </h4>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please insert your swagger title"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your swagger file title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about your API"
                      className=" resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your swagger description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Version</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please insert your API version"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your API versioning.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name={`license.name`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>OpenAPI License</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a OpenAPI License" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="GNU AGPLv3">GNU AGPLv3</SelectItem>
                        <SelectItem value="GNU GPLv3">GNU GPLv3</SelectItem>
                        <SelectItem value="GNU LGPLv3">GNU LGPLv3</SelectItem>
                        <SelectItem value="Mozilla Public License 2.0">
                          Mozilla Public License 2.0
                        </SelectItem>
                        <SelectItem value="Apache License 2.0">
                          Apache License 2.0
                        </SelectItem>
                        <SelectItem value="MIT License">MIT License</SelectItem>
                        <SelectItem value="Boost Software License 1.0">
                          Boost Software License 1.0
                        </SelectItem>
                        <SelectItem value="The Unlicense">
                          The Unlicense
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This is your swagger license.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`license.url`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>License URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please insert your license url"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your swagger license url.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Tags
          </h4>
          <div>
            {tagsArray.fields.map((field, index) => (
              <div className="flex gap-2" key={field.id}>
                <FormField
                  control={form.control}
                  name={`tags.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className={cn(index !== 0 && 'sr-only')}>
                        Tag Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Add tag name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`tags.${index}.desc`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className={cn(index !== 0 && 'sr-only')}>
                        Tag Description
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Add tag description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => tagsArray.append({ name: '', desc: '' })}
            >
              Add Tag
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 ml-1 bg-red-300 hover:bg-red-500 hover:text-white"
              onClick={() => {
                if (tagsArray.fields.length > 1) {
                  tagsArray.remove(tagsArray.fields.length - 1);
                }
              }}
              disabled={tagsArray.fields.length === 1}
            >
              Remove Tag
            </Button>
          </div>
        </div>
        <Button className="mt-6" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default BasicPartForm;
