import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var MainApp = React.createClass({
    onLogout(e) {
        e.preventDefault();
        var {dispatch} = this.props;

        dispatch(actions.startLogout());
    },
    render() {
        return (
            <div>
                coucou tu es sur le main app
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
                {/*<h1 className="page-title">Todo App</h1>*/}
                {/*<div className="row">*/}
                    {/*<div className="column small-centered small-11 medium-6 large-5">*/}
                        {/*<div className="container">*/}
                            {/*<TodoItemSearch/>*/}
                            {/*<TodoList/>*/}
                            {/*<AddTodoItem/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

            </div>
        );
    }
});

export default Redux.connect()(MainApp);
