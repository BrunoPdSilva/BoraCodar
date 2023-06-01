import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { UserCircle, PencilLine, Camera, Key, ShieldCheck, Phone } from "phosphor-react";
import { DropdownSubTrigger } from "./DropdownSubTrigger";
import { DropdownItem } from "./DropdownItem";

export function DropdownAccount() {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">CONTA</DropdownMenu.Label>

      <DropdownMenu.Sub>
        <DropdownSubTrigger title="Dados pessoais" caret={true} Icon={UserCircle} />

        <DropdownMenu.Portal>
          <DropdownMenu.SubContent
            className="DropdownMenuSubContent"
            sideOffset={24}
            alignOffset={-24}
          >
            <DropdownItem title="Editar perfil" Icon={PencilLine}/>
            <DropdownItem title="Trocar foto" Icon={Camera}/>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>

      <DropdownMenu.Sub>
        <DropdownSubTrigger title="Informações de login" caret={true} Icon={Key} />

        <DropdownMenu.Portal>
          <DropdownMenu.SubContent
            className="DropdownMenuSubContent"
            sideOffset={24}
            alignOffset={-24}
          >
            <DropdownItem title="Segurança" Icon={ShieldCheck}/>
            <DropdownItem title="Contato" Icon={Phone}/>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
    </>
  );
}
