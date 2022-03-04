<script>
  import Router from "svelte-spa-router";

  //Components
  import { Header, Footer } from "./components";

  //Pages
  import { Home, PageNotFound, Login, Register, Dashboard } from "./pages";

  const routes = {
    "/": Home,
    "/login": Login,
    "/register": Register,
    "/dashboard": Dashboard,
    "*": PageNotFound,
  };
</script>

<Header />
<main>
  <Router {routes} />
</main>
<Footer />
