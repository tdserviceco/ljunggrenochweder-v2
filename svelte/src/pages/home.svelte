<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const response = await fetch("http://localhost:5100/api/v1/staff", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const content = await response.json();
    console.log("content: ", content);
  });
</script>

<svelte:head>
  <title>Landing page</title>
</svelte:head>
<h1>Landing</h1>
