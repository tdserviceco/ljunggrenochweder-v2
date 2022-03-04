<script>
  import Icon from "@iconify/svelte";
  import { logged_in_data, authentication } from "../../stores.js";
  let auth = false;
  authentication.subscribe((a) => (auth = a));
  const RemoveAuth = async (url) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };
  const LogoutStaff = () => {
    console.log("loggout in progress...");
    logged_in_data.set(localStorage.removeItem("data"));
    RemoveAuth("http://localhost:5100/api/v1/logout").then(
      () => (window.location.href = "/")
    );
  };
</script>

<header>
  <div class="demo">
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {#if auth}
          <li>
            <a target="_self" href="/#/dashboard">Profile</a>
          </li>
          <li>
            <button type="button" on:click={LogoutStaff}>Logout</button>
          </li>
        {:else}
          <li>
            <a target="_self" href="/#/login">Login</a>
          </li>
          <li>
            <a target="_self" href="/#/register">Register</a>
          </li>
        {/if}
      </ul>
    </nav>
  </div>
</header>
