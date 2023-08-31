<script>
  import Title from "$lib/title.svelte";
  import "../styles/global.css"
</script>

<header>
  <Title />
</header>
<main>
  <slot>

  </slot>
</main>
<footer>
  <p>
    Copyright 2023 - &copy;
  </p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;

  }
  main {
    max-width:1280px;
    margin: 20px auto;
  }
  footer {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
</style>