import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactElement } from "react";

interface ToolTipProps {
  data: string | ReactElement;
  tip: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ data, tip }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{data}</TooltipTrigger>
        <TooltipContent>
          <p>{tip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTip;
