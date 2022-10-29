<script lang="ts">
  import { kSpacing } from '@static/Resource.svelte';
</script>

<div class="border-b-2">
  <div class="{kSpacing} place-content-between flex place-items-baseline">
    <!-- Left -->
    <div class="flex gap-12 place-items-baseline">
      <p class="text-4xl font-bold">Twenty One</p>
      <div class="text-primary hover:opacity-100 opacity-60 text-xl flex gap-4">
        <a href="/artwork">Artwork</a>
      </div>
    </div>

    <!-- Right -->
    <div class="text-tertiary opacity-60 hover:opacity-100 text-xl flex gap-4">
      <a href="https://github.com/Az-21/twenty-one">GitHub</a>
    </div>
  </div>
</div>
