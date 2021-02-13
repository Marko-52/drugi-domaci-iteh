import React, { Component } from "react";
import ReactDOM from "react-dom";
import Iznajmljivanje from "./Iznajmljivanje";

export default class Iznajmljivanja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iznajmljivanja: this.props.iznajmljivanja,
            automobil: this.props.automobil,
            broj_dana: 0,
            ukupna_cena: 0
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    pronadjiPresek() {
        let datumOd = new Date(this.state.datumOd).getTime() / 1000;
        let datumDo = new Date(this.state.datumDo).getTime() / 1000;
        for (const i of this.state.iznajmljivanja) {
            if (
                datumDo >= i.datum_iznajmljen_od &&
                datumOd <= i.datum_iznajmljen_do
            )
                return true;
        }
        return false;
    }

    dodajIznajmljivanje() {
        let datumOd = new Date(this.state.datumOd).getTime() / 1000;
        let datumDo = new Date(this.state.datumDo).getTime() / 1000;

        if (this.pronadjiPresek()) {
            alert("Automobil je iznajmljen u tom periodu!");
            return;
        }
        axios.post("http://127.0.0.1:8000/iznajmljivanja/post", {
            automobil_id: this.state.automobil.id,
            datum_iznajmljen_od: datumOd,
            datum_iznajmljen_do: datumDo,
            total_cena_iznajmljivanja: this.state.ukupna_cena,
            broj_dana_iznajmljivanja: this.state.broj_dana
        });
    }

    changeHandler(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });

        this.setState(latestState => {
            let broj_dana = parseInt(
                (new Date(latestState.datumDo).getTime() / 1000 -
                    new Date(latestState.datumOd).getTime() / 1000) /
                    (24 * 60 * 60)
            );

            let ukupna_cena =
                broj_dana * parseInt(latestState.automobil.cena_po_danu);
            return {
                broj_dana: broj_dana || 0,
                ukupna_cena: ukupna_cena || 0
            };
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-warning table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Iznajmljen od</th>
                            <th>Iznajmljen do</th>
                            <th>Cena po danu</th>
                            <th>Broj dana</th>
                            <th>Ukupna cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.iznajmljivanja.map(i => {
                            return (
                                <Iznajmljivanje
                                    key={i.id}
                                    automobil={this.state.automobil}
                                    iznajmljivanje={i}
                                />
                            );
                        })}
                        <tr>
                            <td>
                                <input
                                    onChange={this.changeHandler.bind(this)}
                                    name="datumOd"
                                    type="date"
                                ></input>
                            </td>
                            <td>
                                <input
                                    onChange={this.changeHandler.bind(this)}
                                    name="datumDo"
                                    min={this.state.datumOd}
                                    type="date"
                                ></input>
                            </td>
                            <td>{this.state.automobil.cena_po_danu}</td>
                            <td>
                                <input
                                    type="number"
                                    disabled={true}
                                    value={this.state.broj_dana}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    disabled={true}
                                    value={this.state.ukupna_cena}
                                ></input>
                                <button
                                    onClick={this.dodajIznajmljivanje.bind(
                                        this
                                    )}
                                    className="btn btn-success"
                                >
                                    Add
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("iznajmljivanja")) {
    const element = document.getElementById("iznajmljivanja");

    const automobil = JSON.parse(element.dataset.automobil);
    const iznajmljivanja = JSON.parse(element.dataset.iznajmljivanja);

    ReactDOM.render(
        <Iznajmljivanja
            automobil={automobil}
            iznajmljivanja={iznajmljivanja}
        />,
        document.getElementById("iznajmljivanja")
    );
}
