<script>
  export let params = {};
  console.log(params);
</script>

<svelte:head>
  <title>Params demo page</title>
</svelte:head>

<h1>Svelte Router Params ID: {params.id}</h1>
