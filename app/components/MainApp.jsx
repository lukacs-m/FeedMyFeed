import { Component } from "react";
import { connect } from "react-redux";
import Navigation from "Navigation";
import { Footer }  from "Footer";

/**
 * Main Container app component
 */
export class MainApp extends Component {
    render () {
        return (
            <div className="main-page">
                { this.props.auth.uid ? <Navigation/> : null }
                <div className="row">
                    <div className="column small-centered small-12">
                        {this.props.children}
                    </div>
                </div>
                { this.props.auth.uid ? <Footer/> : null }
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(MainApp);
