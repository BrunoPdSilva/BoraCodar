import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Bell,
  CaretRight,
  BellSlash,
  BellSimpleZ,
  Person,
  TextAa,
  PaintRoller,
} from "phosphor-react";

export function DropdownPreferences() {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">PREFERÊNCIAS</DropdownMenu.Label>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
          <Bell size={20} />
          Notificações{" "}
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
              <BellSlash size={20} />
              Silenciar notificações
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              <BellSimpleZ size={20} /> Não incomodar
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
          <Person size={20} />
          Acessibilidade{" "}
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
              <TextAa size={20} />
              Fonte
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              <PaintRoller size={20} /> Tema
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
    </>
  );
}
