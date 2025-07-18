import type { PageLoad } from './$types';
import type { MenuData } from '$lib/types';
import { returnMenuPage } from '$lib/utils';

type ReturnType = {
  menuData: MenuData;
};

export const load: PageLoad = async ({ url }): Promise<ReturnType> => {
  let menuData: MenuData = {
    currentPage: returnMenuPage(url.pathname)
  };

  return { menuData };
};
