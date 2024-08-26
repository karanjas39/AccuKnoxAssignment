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
import Widget from "../Category/Widget";

function Widgets() {
  const { categories } = useSelector((state: RootState) => state.categories);

  return (
    <>
      {categories && categories.length ? (
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
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {categories.map((category) => (
                  <TabsContent
                    key={category.id}
                    value={category.id}
                    className="flex flex-col gap-3"
                  >
                    {category.widgets.length ? (
                      category.widgets.map((widget) => (
                        <Widget all={false} widget={widget} key={widget.id} />
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
