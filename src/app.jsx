class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.done,
      text: props.text,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    this.setState(
      (state) => ({
        done: !state.done,
      }),
      function (event) {
        this.handleSubmit(event);
      }
    );
  }

  handleChange(event) {
    let text = event.target.value;

    this.setState((state) => ({
      text: text,
    }));
  }

  handleSubmit(event) {
    console.log("This is where the submit will happen!");
    // this.setState(state => ({
    // }));
  }

  render() {
    return (
      <div className="todo">
        <span>
          <input
            type="checkbox"
            checked={this.state.done}
            onClick={this.handleClick}
          />
          <input
            type="text"
            value={this.state.text}
            className={(this.state.done) ? 'done' : 'not-done'}
            onChange={this.handleChange}
            onBlur={this.handleSubmits}
          />
        </span>
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          _id: 1,
          text: "Item 1",
          done: true,
        },
        {
          _id: 2,
          text: "Item 2",
          done: false,
        },
        {
          _id: 3,
          text: "Item 3",
          done: false,
        },
        {
          _id: 4,
          text: "Item 4",
          done: false,
        },
      ],
    };
    this.newTodo = this.newTodo.bind(this);
  }

  newTodo(event) {
    event.preventDefault();

    todos = this.state.todos;
    todos.push({ _id: "" });

    this.setState((state) => ({
      todos: todos,
    }));
  }

  render() {
    const todoList = this.state.todos.map((todo) => (
      <Todo key={todo._id.toString()} text={todo.text} done={todo.done} />
    ));

    return (
      <React.Fragment>
        <h1>React To Do App</h1>
        {todoList}
        <a href="#" onClick={this.newTodo}>
          New ToDo
        </a>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
