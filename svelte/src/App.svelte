<script>
  import Router from "svelte-spa-router";

  //Routes
  import { Home, About, NotFound } from "./Routes";

  const routes = {
    "/": Home,
    "/about": About,
    "*": NotFound,
  };
</script>

<main>
  <Router {routes} />
</main>
