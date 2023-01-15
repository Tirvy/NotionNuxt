
  class Task {
    id: string;
    name: string;
    isDone: boolean;

    constructor(id: string, isDone: boolean, name: string) {
        this.name = name;
        this.id = id;
        this.isDone = isDone;
    }
  };