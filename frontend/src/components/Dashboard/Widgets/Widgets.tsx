"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Card } from "@/components/ui/card";

function Widgets() {
  const { categories } = useSelector((state: RootState) => state.categories);

  return (
    <>
      {categories.length ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Widgets</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>All widgets</SheetTitle>
              <SheetDescription>
                Personalize your dashboard by adding the following widgets.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col mt-4 gap-3 mb-3">
              <Tabs
                defaultValue={categories[0]?.id}
                className="w-full overflow-x-auto"
              >
                <TabsList>
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name.split(" ")[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {categories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    {category.widgets.length ? (
                      category.widgets.map((widget) => (
                        <Card
                          key={widget.id}
                          className="mb-2 flex items-start justify-between p-3"
                        >
                          <h3 className="text-sm">{widget.name}</h3>
                          <Trash2 className="self-end w-4 cursor-pointer" />
                        </Card>
                      ))
                    ) : (
                      <p>No widgets available in this category.</p>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </SheetContent>
        </Sheet>
      ) : null}
    </>
  );
}

export default Widgets;
