var destination = document.querySelector("#container");

var ToDoList = React.createClass({
    render: function() {
        return(
            <div className="todoListMain">
            <div className="header">
                <form>
                    <input placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
        </div>
        );     
    }
});

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);