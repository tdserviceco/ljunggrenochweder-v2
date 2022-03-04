<script>
  import { loading, authentication } from "../../stores";
  let loaded = true;
  if (authentication) {
    loading.set(false);
  }
  loading.subscribe((l) => (loaded = l));
  const value = JSON.parse(localStorage.getItem("data"));
  console.dir("value:", value);
</script>

{#if !loaded}
  <h1>Welcome</h1>
  <h2>{value.name}</h2>
{:else}
  <h1>loading...</h1>
{/if}
