<script lang="ts" context="module">
  const r: string = 'https://redd.it/'; // Reddit shortlink
  const u: string = 'https://ucarecdn.com/'; // Uploadcare shortlink
  const p: string = 'https://postimg.cc/gallery/'; // PostImg shortlink

  export interface IArtwork {
    title: string;
    subtitle: string;
    thumbnailLink: string;
    redditLink: string;
    mirrorLink: string;
  }

  export const ArtMetadata: IArtwork[] = [
    {
      title: 'Little Red Bug',
      subtitle: 'Original fanart of Hollow Knight: Silksong',
      thumbnailLink: `${u}79e6d585-f96c-4afd-87e1-494481d707b2/`,
      redditLink: `${r}x49hxm`,
      mirrorLink: `${p}3yLMnBf`
    },
    {
      title: "Tanjiro's Earring",
      subtitle: 'Original fanart of Demon Slayer',
      thumbnailLink: `${u}5b1e8957-32b8-4fac-9a46-b3d0375be48b/`,
      redditLink: `${r}x49hxm`,
      mirrorLink: `${p}3yLMnBf`
    }
  ];
</script>
