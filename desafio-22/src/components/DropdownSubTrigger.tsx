import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretRight, IconProps } from "phosphor-react";

interface Props {
  title: string;
  caret: boolean;
  Icon: React.ComponentType<IconProps>;
}

export function DropdownSubTrigger({ title, caret, Icon }: Props) {
  return (
    <>
      <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
        <Icon size={20} />
        {title}{" "}
        {caret && (
          <div className="RightSlot">
            <CaretRight size={16} color="var(--gray-300)" />
          </div>
        )}
      </DropdownMenu.SubTrigger>
    </>
  );
}
