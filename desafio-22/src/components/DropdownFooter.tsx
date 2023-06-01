import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Question, SignOut } from "phosphor-react";

export function DropdownFooter() {
  return (
    <>
      <DropdownMenu.Item className="DropdownMenuItem">
        <Question size={20} />
        Central de Ajuda
      </DropdownMenu.Item>
      <DropdownMenu.Item className="DropdownMenuItem logout">
        <SignOut size={20} />
        Sair
      </DropdownMenu.Item>
    </>
  );
}
