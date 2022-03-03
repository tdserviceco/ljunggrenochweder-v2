<script>
  import Router from "svelte-spa-router";

  //Routes
  import { Home, About, Params, NotFound } from "./routes";

  const routes = {
    "/": Home,
    "/about": About,
    "/params/:id": Params,
    "*": NotFound,
  };
</script>

<main>
  <Router {routes} />
</main>
