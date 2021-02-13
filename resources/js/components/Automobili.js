import React, { Component } from "react";
import ReactDOM from "react-dom";
import Automobil from "./Automobil";

export default class Automobili extends Component {
    constructor(props) {
        super(props);

        this.state = {
            automobili: []
        };
        this.getujAutomobile();
    }

    getujAutomobile() {
        axios.get("http://127.0.0.1:8000/automobili/get").then(res => {
            const automobili = res.data.automobili;
            this.setState({ automobili: automobili });
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-warning table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Automobil</th>
                            <th>Cena (dan)</th>
                            <th>Pregled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.automobili.map(a => {
                            return <Automobil key={a.id} automobil={a} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("automobili")) {
    ReactDOM.render(<Automobili />, document.getElementById("automobili"));
}
