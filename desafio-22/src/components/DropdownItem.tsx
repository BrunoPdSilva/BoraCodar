import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconProps } from "phosphor-react";

interface Props {
  title: string;
  Icon: React.ComponentType<IconProps>;
}

export function DropdownItem({ title, Icon }: Props) {
  return (
    <>
      <DropdownMenu.Item
        className={title === "Sair" ? "DropdownMenuItem logout" : "DropdownMenuItem"}
      >
        <Icon size={20} />
        {title}
      </DropdownMenu.Item>
    </>
  );
}
