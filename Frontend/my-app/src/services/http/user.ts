const login = async (email: string, password: string) => {
  const response = await fetch("http://localhost:3002/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status === 200) {
    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data));

    return data;
  }

  return null;
};

const register = async (email: string, password: string) => {
  const response = await fetch("http://localhost:3002/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response.json();
};

export { login, register };
