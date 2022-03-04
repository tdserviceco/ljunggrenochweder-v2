<script>
  import Icon from "@iconify/svelte";
  import { logged_in_data, authentication } from "../../stores.js";
  const RemoveAuth = async (url) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await response.json();
  };
  const LogoutStaff = () => {
    console.log("loggout in progress...");
    RemoveAuth("http://localhost:5100/api/v1/logout").then((res) => {
      console.log(res.message);
      authentication.set(false);
      logged_in_data.set(localStorage.removeItem("data"));
    });
  };
</script>

<header>
  <div class="demo">
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {#if $authentication}
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
