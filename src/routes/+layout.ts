import type { MenuData } from '$lib/types';
import { returnMenuPage } from '$lib/utils';
import type { LayoutLoad } from './$types';

type ReturnType = {
  menuData: MenuData;
};

export const load: LayoutLoad = async ({ url }): Promise<ReturnType> => {
  let menuData: MenuData = {
    currentPage: returnMenuPage(url.pathname)
  };
  
  return { menuData };
};