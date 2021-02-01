<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { VueGithubCorners } from 'vue2-github-corners';

  import { CompA, CompB, CompC } from '@/components';

  @Component<App>({
    components: { VueGithubCorners, CompA, CompB, CompC },
  })
  export default class App extends Vue {}
</script>

<template>
  <main class="app">
    <vue-github-corners
      bg-color="var(--amber--900)"
      cat-color="var(--white)"
      repo-url="//github.com/alex-lit/vue-component-source"
    ></vue-github-corners>
    <section class="app__container">
      <comp-a></comp-a>
      <comp-b></comp-b>
      <comp-c></comp-c>
      <comp-a></comp-a>
      <comp-c></comp-c>
      <comp-b></comp-b>
      <footer class="app__footer">Press F12 to open dev tools</footer>
    </section>
  </main>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>

<style lang="scss" scoped>
  .app {
    display: flex;
    min-width: 800px;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background-color: var(--gray--900);
  }

  .app__container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .app__footer {
    color: var(--white);
    grid-column: 1 / -1;
    text-align: center;
  }
</style>
