import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { CategoryType } from "@/utils/Types/types";
import Widget from "./Widget";
import AddWidget from "../Widgets/AddWidget";

function Category({ category }: { category: CategoryType }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{category.name}</h2>
      <div className="flex items-stretch gap-3">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))}
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardDescription>
              <AddWidget />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Category;
