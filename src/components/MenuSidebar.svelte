<script lang="ts">
  import type { MenuData } from '$lib/types';

  import IonicBookOutline from '../icons/Ionic-BookOutline.svelte';
  import IonicPlanetOutline from '../icons/Ionic-PlanetOutline.svelte';

  let { menuData, profile }: { menuData: MenuData, profile: any } = $props();
</script>

<div class="menu bg-base-100 shadow-sm fit-content">
  <div class="flex flex-col justify-center">
    {#if profile}
      <div class="p-5">
        <div class="flex flex-col justify-center items-center overflow-hidden">
          <img src={profile.avatar_url} alt="PlanetV" class="w-32 h-32" />
        </div>
        <p class="py-2 text-center">{profile.login}</p>
      </div>
    {:else}
      <div class="p-5">
        <div class="flex flex-col justify-center items-center overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/119769817?v=4" alt="PlanetV" class="w-32 h-32" />
        </div>
        <p class="py-2 text-center">goatastronaut0212</p>
      </div>
    {/if}
  </div>

  <a
    href="/"
    class={menuData.currentPage === '/' ? 'btn btn-primary text-xl' : 'btn btn-ghost text-xl'}
    ><IonicPlanetOutline /> PlanetV</a
  >
  <a
    href="/journey"
    class={menuData.currentPage === '/journey'
      ? 'btn btn-primary text-md'
      : 'btn btn-ghost text-md'}><IonicBookOutline /> Journey</a
  >
</div>