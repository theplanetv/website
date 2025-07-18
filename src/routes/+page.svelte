<script lang="ts">
  import Footer from '../components/Footer.svelte';
  import Layout from '../components/Layout.svelte';
  import MenuSidebar from '../components/MenuSidebar.svelte';

  export let data;
  let { menuData } = data;
</script>

<Layout>
  <MenuSidebar {menuData} />

  <div class="flex flex-col mx-50 py-6 gap-y-6">
    <h1 class="text-2xl text-center">PlanetV</h1>
    <p class="text-center">Welcome to my planet!</p>
  </div>
</Layout>

<Footer />
