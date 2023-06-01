import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  DesktopTower,
  CaretRight,
  Plugs,
  Bluetooth,
  Binoculars,
  UserSwitch,
} from "phosphor-react";

export function DropdownPrivacy() {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">PRIVACIDADE</DropdownMenu.Label>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
          <DesktopTower size={20} />
          Aparelhos conectados{" "}
          <div className="RightSlot">
            <CaretRight size={16} color="var(--gray-300)" />
          </div>
        </DropdownMenu.SubTrigger>

        <DropdownMenu.Portal>
          <DropdownMenu.SubContent
            className="DropdownMenuSubContent"
            sideOffset={24}
            alignOffset={-24}
          >
            <DropdownMenu.Item className="DropdownMenuItem">
              <Plugs size={20} />
              Desconectar dispositivos
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              <Bluetooth size={20} /> Conectar dispositivo
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              <Binoculars size={20} /> Encontrar dispositivo
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>

      <DropdownMenu.Item className="DropdownMenuItem">
        <UserSwitch size={20} />
        Contas vinculadas{" "}
      </DropdownMenu.Item>
    </>
  );
}
