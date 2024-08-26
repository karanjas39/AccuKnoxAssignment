import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BriefcaseBusiness, Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="w-full flex items-center justify-center  gap-4 p-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <BriefcaseBusiness />
          </TooltipTrigger>
          <TooltipContent>
            <a href="https://developerjaskaran.netlify.app/" target="_blank">
              https://developerjaskaran.netlify.app/
            </a>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Linkedin />
          </TooltipTrigger>
          <TooltipContent>
            <a
              href="https://www.linkedin.com/in/singhjaskaran/"
              target="_blank"
            >
              https://www.linkedin.com/in/singhjaskaran/
            </a>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Footer;
