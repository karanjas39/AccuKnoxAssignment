import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WidgetType } from "@/utils/Types/types";
import { Trash2 } from "lucide-react";

function Widget({ widget }: { widget: WidgetType }) {
  return (
    <Card>
      <CardHeader className="flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <CardTitle>{widget.name}</CardTitle>
          <Trash2 className="self-end w-4 cursor-pointer" />
        </div>
        <CardDescription>{widget.text}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Widget;
