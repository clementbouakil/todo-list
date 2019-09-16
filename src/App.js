import React, { Component } from "react";
import DisplayItems from "./DisplayItems";

class App extends Component {
    state = {
        items: [
            {
                id: 1,
                name: "tasks number 1"
            },
            {
                id: 2,
                name: "tasks number 2"
            },
            {
                id: 3,
                name: "tasks number 3"
            }
        ],
        title: "Liste des tâches",
        newItem: ""
    };

    handleDelete = id => {
        const items = [...this.state.items]; // ou this.state.items.slice()
        const index = items.findIndex(client => client.id === id);
        items.splice(index, 1);
        this.setState({ items }); // ou this.setState({ items: items })
    };

    handleSubmit = event => {
        event.preventDefault();
        const id = new Date().getTime();
        const name = this.state.newItem;
        const items = [...this.state.items];
        items.push({ id, name });
        this.setState({ items, newItem: "" });
    };

    handleChange = event => {
        this.setState({ newItem: event.currentTarget.value });
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>Number of tasks : {this.state.items.length}</h2>
                <ul>
                    {this.state.items.map(item => (
                        <DisplayItems
                            details={item}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.newItem}
                        type="text"
                        placeholder="entrer une donnée"
                        onChange={this.handleChange}
                    />
                    <button>Confirmer</button>
                </form>
            </div>
        );
    }
}

export default App;
