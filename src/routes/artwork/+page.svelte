<script lang="ts">
  import ArtCard from './ArtCard.svelte';
  import Navbar from '@components/Navbar.svelte';
  import { ArtMetadata } from './ArtData.svelte';
  import { width } from '@static/Resource.svelte';
</script>

<Navbar />
<div class="{width} grid lg:grid-cols-2 grid-cols-1 gap-4">
  {#each ArtMetadata as Artwork}
    <ArtCard
      title="{Artwork.title}"
      subtitle="{Artwork.subtitle}"
      thumbnaiLink="{Artwork.thumbnailLink}"
      redditLink="{Artwork.redditLink}"
      mirrorLink="{Artwork.mirrorLink}"
    />
  {/each}
</div>
