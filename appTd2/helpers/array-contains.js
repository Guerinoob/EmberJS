import { helper } from '@ember/component/helper';

export function arrayContains(params) {
  const [items, value] = params;
  
  if(items == null) return false;

  return items.includes(value);
}

export default helper(arrayContains);
