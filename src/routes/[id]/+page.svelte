<script>
  export let data;
  let post = data.post;

  if (!post) {
    // Handle case where post data is not available
    console.error('Post data is not available');
  }
</script>

{#if post}
  <article>
    <h1>{post.title}</h1>
    <p>{post.date}</p>
    {@html post.htmlContent}
  </article>
{:else}
  <p>Loading...</p>
{/if}