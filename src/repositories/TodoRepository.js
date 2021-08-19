class TodoRepository {
  async create(TodoEntity, Todo) {
    return await TodoEntity.create(Todo);
  }
}

module.exports = TodoRepository;