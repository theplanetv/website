<script lang="ts">
  import type { MenuData } from '$lib/types';

  import Footer from '../../components/Footer.svelte';
  import Menu from '../../components/Menu.svelte';

  let { data }: { data: MenuData } = $props();
</script>

<Menu menuData={data} />

<div class="flex flex-col py-6 gap-y-6">
  <h1 class="text-2xl text-center">Journey</h1>

  <p class="text-center">Stay tune!</p>
</div>

<Footer />
