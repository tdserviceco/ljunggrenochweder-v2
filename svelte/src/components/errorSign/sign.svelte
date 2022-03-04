<script>
  export let type;
  export let closeErrorSign;
  export let message;
</script>

<div class={`${type === "error" ? type : ""}`}>
  {message}
  <button type="button" on:click={() => closeErrorSign(false)}>X</button>
</div>
