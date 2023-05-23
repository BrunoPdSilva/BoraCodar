interface Icalc {
  value: string | JSX.Element | number;
  action?: string;
  operation?: string;
}

export function getClasses(item: Icalc) {
  let classes = '';

  if (item.operation && item.operation !== 'equal') classes += ' operation';
  if (item.operation === 'equal') classes += ' equal';
  if (item.value === 'CE') classes += ' ce';

  return classes;
}
