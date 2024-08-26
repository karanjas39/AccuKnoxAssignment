import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { CategoryType } from "@/utils/Types/types";
import Widget from "./Widget";
import AddWidget from "../Widgets/AddWidget";
import DeleteCategory from "./DeleteCategory";

function Category({ category }: { category: CategoryType }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-5">
        <h2 className="text-lg font-bold">{category.name}</h2>
        <DeleteCategory id={category.id} />
      </div>
      <div className="flex items-stretch gap-3">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} all={true} />
        ))}
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <CardDescription>
              <AddWidget id={category.id} />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Category;
