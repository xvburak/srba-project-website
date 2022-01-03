<script context="module">
  export async function preload({ params }) {
    try {
      const res = await this.fetch('api/blog/all');
      const { posts } = await res.json()
      return { posts };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
  export let posts;

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<ul>
	{#each posts as post}
		<li><a rel='prefetch' href='blog/{post.slug.current}'>{post.title}</a> ({formatDate(post.publishedAt)})</li>
	{/each}
</ul>
