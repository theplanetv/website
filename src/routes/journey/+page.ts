import type { PageLoad } from './$types';
import type { MenuData } from '$lib/types';
import { returnMenuPage } from '$lib/utils';

export const load: PageLoad = ({ url }): MenuData => {
  let menuData: MenuData = {
    currentPage: returnMenuPage(url.pathname)
  };
  return menuData;
};
