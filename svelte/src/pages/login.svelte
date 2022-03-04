<script>
  const authLogin = async (url, data) => {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
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
    authLogin("http://localhost:5100/api/v1/auth/customer", data).then(
      (res) => {
        if (res.status === 200) {
          console.log("success:", res.token);
        } else {
          console.error("failed:", res.message);
        }
      }
    );
  };
</script>

<svelte:head>
  <title>Login to booking</title>
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
