<script lang="ts">
  import Footer from '../components/Footer.svelte';
  import MenuSidebar from '../components/MenuSidebar.svelte';
  import '../style.css';

  let { data, children } = $props();
</script>

<MenuSidebar menuData={data.menuData} />

{@render children()}

<Footer />