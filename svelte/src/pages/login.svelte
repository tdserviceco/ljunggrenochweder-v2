<script>
  import { logged_in_data, authentication } from "../stores.js";
  import { Dashboard, ErrorSign } from "../components";

  let errorSign = false;
  let message;

  const authLogin = async (url, data) => {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const handleSubmit = (event) => {
    let data;
    const formData = new FormData(event.target);
    const formUser = {};
    for (const [k, v] of formData.entries()) {
      formUser[k] = v;
    }
    data = {
      email: formUser.email,
      password: formUser.password,
    };

    authLogin("http://localhost:5100/api/v1/login", data).then((res) => {
      if (res.status === 200) {
        console.dir("success:", res.data);
        logged_in_data.set(
          localStorage.setItem("data", JSON.stringify(res.data))
        );
        window.location.href = "/#/dashboard";
      } else {
        errorSign = true;
        message = res.message;
        console.error("failed:", res.message);
      }
    });
  };

  const closeErrorSign = (clickEvent) => {
    if (clickEvent) {
      return (errorSign = clickEvent);
    }

    return (errorSign = false);
  };
</script>

<svelte:head>
  <title>Login to admin dashboard</title>
</svelte:head>

<form on:submit|preventDefault={handleSubmit}>
  <label for="email">
    <span>Email: </span>
    <input id="email" name="email" placeholder="demo@gmail.com" />
  </label>
  <label for="password">
    <span>Password: </span>
    <input
      id="password"
      type="password"
      name="password"
      placeholder="password"
    />
  </label>
  <button type="submit">Login</button>
</form>

{#if errorSign}
  <ErrorSign type="error" {message} {closeErrorSign} />
{/if}
