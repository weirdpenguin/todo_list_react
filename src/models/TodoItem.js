class TodoItem {
    constructor(text) {
        this.id = TodoItem.nextId++;
        this.text = text;
        this.checked = false;
    }
}

TodoItem.nextId = 1;

export default TodoItem;