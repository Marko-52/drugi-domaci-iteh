import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Automobil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            automobil: this.props.automobil,
            naziv:
                this.props.automobil.naziv_modela +
                " " +
                this.props.automobil.naziv_kompanije,
            cena: this.props.automobil.cena_po_danu
        };
    }
    izbrisi() {
        axios.delete(
            "http://127.0.0.1:8000/automobili/delete?id=" +
                this.state.automobil.id
        );
    }

    render() {
        return (
            <tr>
                <td style={{ width: "45%" }}>{this.state.naziv}</td>
                <td style={{ width: "20%" }}>{this.state.cena}</td>
                <td style={{ width: "35%" }}>
                    <a
                        href={
                            "http://127.0.0.1:8000/iznajmljivanja/get?automobil_id=" +
                            this.state.automobil.id
                        }
                        className="btn btn-block btn-info"
                    >
                        Iznajmljivanja
                    </a>
                    <button
                        onClick={this.izbrisi.bind(this)}
                        className="btn btn-block btn-info"
                    >
                        Izbrisi
                    </button>
                </td>
            </tr>
        );
    }
}

if (document.getElementById("automobil")) {
    ReactDOM.render(<Automobil />, document.getElementById("automobil"));
}
