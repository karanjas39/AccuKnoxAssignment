import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { categoriesApi } from "@/store/api/categories";
import {
  z_categoryCreate,
  z_widgetCreate,
  z_widgetCreate_type,
} from "@singhjaskaran/accuknox-common";

function AddWidget({ id }: { id: string }) {
  const { toast } = useToast();
  const [addWidget, { isLoading }] = categoriesApi.useAddWidgetMutation();

  const form = useForm<z_widgetCreate_type>({
    resolver: zodResolver(z_widgetCreate),
    defaultValues: {
      categoryId: id,
      name: "",
      text: "",
    },
  });

  async function onSubmit(values: z_widgetCreate_type) {
    try {
      const response = await addWidget(values).unwrap();
      if (response.success) {
        toast({ description: response.message });
        form.reset();
      } else throw new Error(response.message);
    } catch (error) {
      const err = error as Error;
      toast({
        description: err.message || "Unable to add category.",
        variant: "destructive",
      });
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Add widget</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Widget</AlertDialogTitle>
          <AlertDialogDescription>
            Fill the form to add new widget.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Widget name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" type="text" {...field} />
                  </FormControl>
                  <FormDescription>Enter new widget name here.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Widget text</FormLabel>
                  <FormControl>
                    <Input placeholder="text" type="text" {...field} />
                  </FormControl>
                  <FormDescription>Enter new widget text here.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button type="submit">
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddWidget;
