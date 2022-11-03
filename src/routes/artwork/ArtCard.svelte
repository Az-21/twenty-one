<script lang="ts">
  import { buttonActive, buttonPassive } from '@static/Resource.svelte';

  export let title: string;
  export let subtitle: string;
  export let thumbnaiLink: string;
  export let redditLink: string;
  export let mirrorLink: string;
</script>

<div class="border-2 border-outline bg-secondaryContainer w-full rounded-xl">
  <!-- Image -->
  <img class="aspect-video rounded-xl object-contain" src="{thumbnaiLink}" alt="" />

  <!-- Info -->
  <div class="md:flex md:place-content-between mt-4 px-4">
    <div>
      <p class="text-4xl font-baskerville">{title}</p>
      <p class="text-lg">{subtitle}</p>
    </div>
    <div class="font-jetbrainsmono">
      <div class="flex items-center">
        <i class="fa-solid fa-seedling pr-3"></i>
        <p>8 Variants</p>
      </div>
      <div class="flex items-center">
        <i class="fa-solid fa-file-invoice pr-3 pl-1"></i>
        <p>4K UHD</p>
      </div>
    </div>
  </div>

  <!-- Actions -->
  <div class="p-4 mt-8 flex justify-end gap-4">
    <a href="{mirrorLink}" class="px-8 py-3 flex {buttonPassive} items-center">
      <i class="fa-regular fa-images fa-xl pr-4"></i>
      <p class="text-lg">Gallery</p>
    </a>
    <a href="{redditLink}" class="px-8 py-3 flex {buttonActive} items-center">
      <i class="fa-brands fa-reddit fa-xl pr-4"></i>
      <p class="text-lg">Album</p>
    </a>
  </div>
</div>
