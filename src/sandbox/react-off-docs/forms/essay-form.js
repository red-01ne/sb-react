import React, {Component} from "react";

class EssayForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "Please write an essay about your favorite DOM element."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`An essay was submitted: ${this.state.value}`);
        this.setState({
            value: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export {EssayForm};
