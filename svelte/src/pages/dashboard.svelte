<script>
  import { authentication } from "../stores.js";
  import { Dashboard } from "../components";
  import { onMount } from "svelte";
  onMount(async () => {
    try {
      const response = await fetch("http://localhost:5100/api/v1/auth", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const content = await response.json();
      console.log("content: ", content);
      authentication.set(true);
    } catch (e) {
      console.log("You're not logged in");
      authentication.set(false);
    }
  });
</script>

{#if $authentication}
  <Dashboard />
{:else}
  <h1>Please login!</h1>
{/if}
