export class Todo {

  public id: number;
  public text: string;
  public completed: boolean;

  constructor(textInto: string) {
    this.text = textInto;
    this.id = Math.random(),
    this.completed = false;
  }
}
