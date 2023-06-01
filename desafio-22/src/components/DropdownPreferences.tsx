import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Bell,
  BellSlash,
  BellSimpleZ,
  Person,
  TextAa,
  PaintRoller,
} from "phosphor-react";
import { DropdownSubTrigger } from "./DropdownSubTrigger";
import { DropdownItem } from "./DropdownItem";

export function DropdownPreferences() {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">PREFERÊNCIAS</DropdownMenu.Label>

      <DropdownMenu.Sub>
        <DropdownSubTrigger title="Notificações" caret={true} Icon={Bell} />

        <DropdownMenu.Portal>
          <DropdownMenu.SubContent
            className="DropdownMenuSubContent"
            sideOffset={24}
            alignOffset={-24}
          >
            <DropdownItem title="Silenciar notificações" Icon={BellSlash}/>
            <DropdownItem title="Não incomodar" Icon={BellSimpleZ}/>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>

      <DropdownMenu.Sub>
        <DropdownSubTrigger title="Acessibilidade" caret={true} Icon={Person} />

        <DropdownMenu.Portal>
          <DropdownMenu.SubContent
            className="DropdownMenuSubContent"
            sideOffset={24}
            alignOffset={-24}
          >
            <DropdownItem title="Fonte" Icon={TextAa}/>
            <DropdownItem title="Tema" Icon={PaintRoller}/>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
    </>
  );
}
