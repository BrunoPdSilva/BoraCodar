export const handlePress = (
  e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
) => {
  const target = e.target as HTMLButtonElement;
  target.classList.add("press");
};
export const handleRelease = (
  e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
) => {
  const target = e.target as HTMLButtonElement;
  target.classList.remove("press");
};
