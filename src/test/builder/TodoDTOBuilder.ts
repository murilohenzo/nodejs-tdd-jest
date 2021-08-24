const TodoDTO = require('../../dtos/TodoDTO');

class TodoDTOBuilder {

  constructor(title, done = false) {
    this.title = title;
    this.done = done;
  }

  builderDTO() {
    return new TodoDTO(this.title, this.done);
  }
}

module.exports = TodoDTOBuilder;