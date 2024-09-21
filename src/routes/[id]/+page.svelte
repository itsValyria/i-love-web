<script>
  export let data;
  let post = data.post;

  if (!post) {
    // Handle case where post data is not available
    console.error('Post data is not available');
  }
</script>

<main>
  {#if post}
  <article>
    <h1>{post.title}</h1>
    {@html post.content}
  </article>
{:else}
  <p>Loading...</p>
{/if}
</main>

<style>
  main {
    min-height: 60vh;
  }
</style>