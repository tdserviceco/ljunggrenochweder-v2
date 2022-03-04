<script>
  const createUserData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const handleSubmit = async (event) => {
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
    createUserData("http://localhost:5100/api/v1/users", data).then((res) =>
      console.dir(res.message)
    );
  };
</script>

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
  <label for="first_name">
    <span>Firstname: </span>
    <input
      id="first_name"
      type="text"
      name="first_name"
      placeholder="Ex: Ljungren"
    />
  </label>
  <label for="last_name">
    <span>Lastname: </span>
    <input
      id="last_name"
      type="text"
      name="last_name"
      placeholder="Ex: Weder"
    />
  </label>
  <label for="phone">
    <span>Phone nr: </span>
    <input id="phone" type="text" name="phone" placeholder="+46763111111" />
  </label>
  <button type="submit">Register</button>
</form>
