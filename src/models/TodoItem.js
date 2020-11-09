class TodoItem {
    constructor(text) {
        this.id = TodoItem.nextId++;
        this.text = text;
    }
}

TodoItem.nextId = 1;

export default TodoItem;