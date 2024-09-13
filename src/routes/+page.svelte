<script>
  export let data;
  let posts = data.posts;
</script>

<main>
  <ul>
    {#each posts as post}
      <li>
        <a href={`/${post.id}`}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 1rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    background-color: var(--rose--400);
    color: var(--white--000);
  }
</style>
