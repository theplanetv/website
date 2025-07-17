<script lang="ts">
  import Footer from '../../components/Footer.svelte';
  import Layout from '../../components/Layout.svelte';
  import MenuSidebar from '../../components/MenuSidebar.svelte';

  export let data;
  let { menuData, profile } = data;
</script>

<Layout>
  <MenuSidebar menuData={menuData} profile={profile} />

  <div class="flex flex-col mx-50 py-6 gap-y-6">
    <h1 class="text-2xl text-center">Journey</h1>
    <p class="text-center">Stay tune!</p>
  </div>
</Layout>

<Footer />