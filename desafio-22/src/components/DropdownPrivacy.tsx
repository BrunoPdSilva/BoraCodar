import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DesktopTower, Plugs, Bluetooth, Binoculars, UserSwitch } from "phosphor-react";
import { DropdownSubTrigger } from "./DropdownSubTrigger";
import { DropdownItem } from "./DropdownItem";

export function DropdownPrivacy() {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">PRIVACIDADE</DropdownMenu.Label>

      <DropdownMenu.Sub>
        <DropdownSubTrigger
          title="Aparelhos conectados"
          caret={true}
          Icon={DesktopTower}
        />

        <DropdownMenu.Portal>
          <DropdownMenu.SubContent
            className="DropdownMenuSubContent"
            sideOffset={24}
            alignOffset={-24}
          >
            <DropdownItem title="Desconectar dispositivos" Icon={Plugs}/>
            <DropdownItem title="Conectar dispositivo" Icon={Bluetooth}/>
            <DropdownItem title="Encontrar dispositivo" Icon={Binoculars}/>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>

      <DropdownItem title="Contas vinculadas" Icon={UserSwitch}/>
    </>
  );
}
