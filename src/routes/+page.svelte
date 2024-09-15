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
          <div class="labels">
            {#each post.labels as label}
              <span class="label">{label}
                <img src="/images/label.svg" alt="label">
              </span>
            {/each}
          </div>
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

    background-color: var(--rose--500);
    color: var(--white--000);
    border-radius: 8px;
  }

  li:nth-child(even) {
  background-color: var(--rose--400);
  }

  .labels {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    white-space: nowrap;
  }

  .labels span {
    background-color: var(--white--000);
    color: var(--rose--500);
    padding: 0.2rem 0.4rem;
    border-radius: 8px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }

  .labels img {
    height: 1rem;
    margin-right: 0.4rem;
    filter: invert(34%) sepia(96%) saturate(2169%) hue-rotate(327deg) brightness(98%) contrast(96%);
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;
      }

      li {
        margin: 0;
      }
    }
</style>
