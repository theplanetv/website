<script lang="ts">
  let { children }: { children: any } = $props();
</script>

<div class="flex w-2/4 h-full mx-auto">
  {@render children()}
</div>