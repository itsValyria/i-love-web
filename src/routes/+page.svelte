<script>
  export let data;
  let posts = data.posts;
</script>

<ul>
  {#each posts as post}
    <li><a href={`/${post.id}`}>{post.title}</a></li>
  {/each}
</ul>
