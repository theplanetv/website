import { MenuEnum } from './enums';

export function returnMenuPage(currentPath: string): MenuEnum {
  if (currentPath === '/') {
    return MenuEnum.HOME;
  } else if (currentPath === '/journey') {
    return MenuEnum.JOURNEY;
  }

  return MenuEnum.HOME;
}
