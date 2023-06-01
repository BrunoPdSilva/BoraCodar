import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  UserCircle,
  CaretRight,
  PencilLine,
  Camera,
  Key,
  ShieldCheck,
  Phone,
} from "phosphor-react";

export function DropdownAccount() {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">CONTA</DropdownMenu.Label>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
          <UserCircle size={20} />
          Dados pessoais{" "}
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
              <PencilLine size={20} />
              Editar perfil
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              <Camera size={20} /> Trocar foto
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
          <Key size={20} />
          Informações de login{" "}
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
              <ShieldCheck size={20} />
              Segurança
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              <Phone size={20} /> Contato
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
    </>
  );
}
