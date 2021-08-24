import TodoDTO from "../../dtos/TodoDTO";

export default class TodoDTOBuilder implements TodoDTO {  

  title: string;
  done: boolean;

  constructor(title, done = false) {
    this.title = title;
    this.done = done;
  }
}