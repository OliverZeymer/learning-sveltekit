<script>
  import Title from "$lib/title.svelte";
  import "../../styles/global.css"
</script>

<header>
  <Title />
    <nav class="nav">
    <ul class="nav__list">
      <li><a class="nav__item" href="/">Home</a></li>
      <li><a class="nav__item" href="/guides">Guides</a></li>
      <li><a class="nav__item" href="/about">About</a></li>
    </ul>
  </nav>
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
    .nav__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .nav__item {
    margin: 0 10px;
  }
</style>