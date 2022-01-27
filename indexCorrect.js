const { username } = request.headers;
const { id } = request.params;

if (!validate(id)) {
  return response.status(400).json({ error: "Todo doesn't exist." });
}

const user = users.find((user) => user.username === username);

if (!user) {
  return response.status(404).json({ error: "User not found." });
}

const todo = users.todos.find((checkTodo) => checkTodo.id === id);

if (!todo) {
  return response
    .status(404)
    .json({ error: "Todo id doesn't belong to this user" });
}

request.user = user;
request.todo = todo;
next();
