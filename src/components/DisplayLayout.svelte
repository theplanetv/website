<script lang="ts">
  let { children }: { children: any } = $props();
</script>

<div class="mx-auto py-10 w-2/4">
  {@render children()}
</div>
