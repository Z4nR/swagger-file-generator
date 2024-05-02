import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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

const formSchema = z.object({
  openapi: z.string({ required_error: 'OpenAPI is required' }),
  title: z
    .string()
    .min(10, {
      message: 'Title must be at least 10 characters.',
    })
    .max(20, {
      message: 'Title maximal 20 characters.',
    }),
  description: z.string().max(255, {
    message: 'Description maximal 255 characters.',
  }),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, {
    message: 'Version must be format like: x.x.x',
  }),
  licenseName: z.string({ required_error: 'License Name is required' }),
  licenseUrl: z.string().url({ message: 'License URL is required' }),
});

const SwaggerForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      openapi: '3.0.3',
      title: '',
      description: '',
      version: '0.0.0',
      licenseName: '',
      licenseUrl: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Info
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
                name="licenseName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OpenAPI License</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please insert your OpenAPI License Name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your swagger license.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="licenseUrl"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>License URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please insert your OpenAPI Url"
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
        </div>
        <Button className="mt-6" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SwaggerForm;
