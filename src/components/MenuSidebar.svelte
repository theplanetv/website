<script lang="ts">
  import type { MenuData } from '$lib/types';

  import IonicBookOutline from '../icons/Ionic-BookOutline.svelte';
  import IonicPlanetOutline from '../icons/Ionic-PlanetOutline.svelte';

  let { menuData }: { menuData: MenuData } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm fit-content">
  <div class="navbar-start">
    <a
      href="/journey"
      class={menuData.currentPage.startsWith('/journey')
        ? 'btn btn-primary text-md'
        : 'btn btn-ghost text-md'}><IonicBookOutline /> Journey</a
    >
  </div>

  <div class="navbar-center">
    <a
      href="/"
      class={menuData.currentPage === '/' ? 'btn btn-primary text-xl' : 'btn btn-ghost text-xl'}
      ><IonicPlanetOutline /> PlanetV</a
    >
  </div>

  <div class="navbar-end">
  </div>
</div>
