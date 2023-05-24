interface Props {
  value: string;
  icon?: JSX.Element;
}

export function getClasses(item: Props) {
  let classes = '';

  const isNotPurple =
    item.value.includes('=') ||
    item.value.includes('+/-') ||
    item.value.includes('%');

  if (item.icon && !isNotPurple) classes += ' operation';
  if (item.value === '=') classes += ' equal';
  if (item.value === 'CE') classes += ' ce';

  return classes;
}
