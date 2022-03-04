<script>
  import Icon from "@iconify/svelte";
  import { token_staff, token_customer } from "../../stores.js";

  const LogoutStaff = () => {
    token_staff.set(localStorage.removeItem("token_staff"));
  };
</script>

<header>
  <div class="demo">
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          {#if $token_staff}
            <a target="_self" href="/#/dashboard">Dashboard</a>
            <button type="button" on:click={LogoutStaff}>Logout</button>
          {/if}
        </li>
        <li>
          {#if $token_customer}
            <a target="_self" href="/#/dashboard">Profile</a>
            <button type="button" on:click={LogoutStaff}>Logout</button>
          {:else}
            <a target="_self" href="/#/login">Login</a>
          {/if}
        </li>
        <li>
          <a target="_self" href="/#/register">Register</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
