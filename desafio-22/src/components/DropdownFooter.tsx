import { Question, SignOut } from "phosphor-react";
import { DropdownItem } from "./DropdownItem";

export function DropdownFooter() {
  return (
    <>
      <DropdownItem title="Central de ajuda" Icon={Question}/>
      <DropdownItem title="Sair" Icon={SignOut}/>
    </>
  );
}
