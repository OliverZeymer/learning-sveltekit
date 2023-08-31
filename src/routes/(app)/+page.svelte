<script>
  let title = 1
  function updateTitle () {
    title = title + 1
  }
</script>

<div class="index">
  <h2>{title}</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem debitis quas praesentium quam animi, magnam rerum aut. Dolor, maxime? Ducimus fugit ipsum neque hic optio inventore magnam quidem consequuntur nobis.</p>
  <button on:click={updateTitle}>count up</button>
  <input type="text" bind:value={title} />
</div>

<style>
  .index {
    text-align: center;
    margin: 20px auto;
  }
</style>
