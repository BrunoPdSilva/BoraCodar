import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { List } from "phosphor-react";

import { DropdownHeader } from "./DropdownHeader";
import { DropdownAccount } from "./DropdownAccount";
import { DropdownPreferences } from "./DropdownPreferences";
import { DropdownPrivacy } from "./DropdownPrivacy";
import { DropdownFooter } from "./DropdownFooter";

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customize options">
          <List size={18} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownHeader />
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownAccount />
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownPreferences />
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownPrivacy />
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownFooter />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
