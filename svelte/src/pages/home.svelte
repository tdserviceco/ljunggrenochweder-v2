<script>
  import { onMount } from "svelte";
  import { authentication } from "../stores.js";

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:5100/api/v1/auth", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const content = await response.json();
      console.log(`Welcome back ${content.data.name}`);
      authentication.set(true);
    } catch (e) {
      console.log("You're not logged in");
      authentication.set(false);
    }
  });
</script>

<svelte:head>
  <title>Landing page</title>
</svelte:head>
<h1>Landing</h1>
