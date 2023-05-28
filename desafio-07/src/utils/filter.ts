import { Dispatch, SetStateAction } from "react";
import { Filter } from "../App";
import { IBlocks, blocksData } from "../data/blocksData";

interface Props {
  filter: Filter | null;
  setBlocks: Dispatch<SetStateAction<IBlocks[]>>
}

export function filterBlocks({ filter, setBlocks }: Props) {
  if (filter) {
    const { title, local } = filter;
    
    const filtered = blocksData.filter(block => {
      const blockTitle = block.title.toLowerCase();
      const blockLocal = block.local.toLowerCase();

      if (title && !blockTitle.includes(title)) {
        return false
      }

      if (local && !blockLocal.includes(local)) {
        return false
      }

      return true
    })

    setBlocks(filtered);
  } else {
    setBlocks(blocksData)
  }
}