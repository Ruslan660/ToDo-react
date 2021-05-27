import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {text: 'First task', done: false},
                {text: 'Second task', done: false},
            ]
        }
    }

    handleClick(i) {
        const newitems = this.state.items.slice();
        newitems[i].done = !newitems[i].done;
        this.setState({
            items: newitems,
        });
    }

    addTask() {
        const items = this.state.items.slice();
        let val = document.getElementById("textInput");
        items.push({text: val.value, done: false});
        val.value = "";
        this.setState({
            items: items,
        });
    }

    deleteTask(i) {
        let newitems = this.state.items.slice();
        newitems.splice(i, 1);
        this.setState({
            items: newitems,
        });
    }

    render() {
        return (
            <div>
                <h2>ToDos:</h2>
                <label>
                    <input type="text" id={"textInput"}/>
                    <button className={"btn"} onClick={() => this.addTask()}>Add task</button>
                </label>
                <ol>
                    {
                        this.state.items.map((item, num) => (
                            <li key={num}>
                                <label className={item.done ? "checked" : ""}>
                                    <input type="checkbox" onClick={ ()=> this.handleClick(num)}/>
                                    <span className={item.done ? "done" : ""}>{item.text}</span>
                                </label>
                                <button className="del-btn" onClick={() => this.deleteTask(num)}>X</button>
                            </li>
                        ))}
                </ol>
            </div>
        )
    }
}


ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);
