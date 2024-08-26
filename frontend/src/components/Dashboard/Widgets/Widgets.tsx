import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddWidget from "./AddWidget";

function Widgets() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Widgets</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>All widgets</SheetTitle>
          <SheetDescription>
            Personalise your dashboard by adding the following widget.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col mt-4 gap-3">
          <Tabs defaultValue="account" className="w-full overflow-x-auto">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>

          <div className="self-end">
            <AddWidget />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Widgets;
