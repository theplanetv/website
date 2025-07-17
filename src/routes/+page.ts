import type { PageLoad } from './$types';
import type { MenuData } from '$lib/types';
import { returnMenuPage } from '$lib/utils';
import { getUserGithubProfile } from '$lib/api';

type ReturnType = {
  menuData: MenuData;
  profile: any;
}

export const load: PageLoad = async ({ url }): Promise<ReturnType> => {
  let menuData: MenuData = {
    currentPage: returnMenuPage(url.pathname)
  };
  
  const profile_data = await getUserGithubProfile();

  return { menuData, profile: profile_data };
};
