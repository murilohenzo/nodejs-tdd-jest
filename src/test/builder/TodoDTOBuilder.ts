import TodoDTO from "../../dtos/TodoDTO";

export default class TodoDTOBuilder implements TodoDTO {  

  constructor(title: string, done = false) {
    this.title = title;
    this.done = done;
  }
  
  title: string;
  done: boolean;
}