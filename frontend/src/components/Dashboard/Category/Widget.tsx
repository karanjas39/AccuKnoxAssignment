import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WidgetType } from "@/utils/Types/types";
import DeleteWidget from "./DeleteWidget";

function Widget({ widget, all }: { widget: WidgetType; all: boolean }) {
  return (
    <Card className="max-w-[600px]">
      <CardHeader className="flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <CardTitle>{widget.name}</CardTitle>
          <DeleteWidget id={widget.id} />
        </div>
        {all ? <CardDescription>{widget.text}</CardDescription> : null}
      </CardHeader>
    </Card>
  );
}

export default Widget;
