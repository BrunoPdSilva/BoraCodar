import { Dispatch, SetStateAction } from 'react';

type Setter = Dispatch<SetStateAction<boolean>>;

export function handleFocus(callback: Setter, value: boolean) {
  callback(value);
}

export function handleLoading(callback: Setter) {
  callback(true);
  setTimeout(() => callback(false), 2000);
}
