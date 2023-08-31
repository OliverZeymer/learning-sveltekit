<script>
  export let title = "Learning SvelteKit"
</script>

<div class="title">
  <img src="/game-controller.svg" width="60" alt="site logo">
  <h1>{title}</h1>
</div>

<style>
  .title {
    display: flex;
  }
  .title img {
    display: inline-block;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
  }
  .title h1 {
    margin-left: 10px;
  }
</style>