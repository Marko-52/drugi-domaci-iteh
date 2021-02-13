import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Iznajmljivanje extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iznajmljivanje: this.props.iznajmljivanje,
            automobil: this.props.automobil,
            promenaIznajmljivanja: false
        };
        this.formaZaIzmenu = this.formaZaIzmenu.bind(this);
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        let broj_dana_iznajmljivanja = parseInt(
            (new Date(this.state.novi_datum_do).getTime() / 1000 -
                this.state.iznajmljivanje.datum_iznajmljen_od) /
                (24 * 60 * 60)
        );
        let total_cena_iznajmljivanja =
            broj_dana_iznajmljivanja * this.state.automobil.cena_po_danu;

        axios.put("http://127.0.0.1:8000/iznajmljivanje/update", {
            cena_po_danu: this.state.cena,
            datum_iznajmljen_do:
                new Date(this.state.novi_datum_do).getTime() / 1000,
            broj_dana_iznajmljivanja: broj_dana_iznajmljivanja,
            total_cena_iznajmljivanja: total_cena_iznajmljivanja,
            id: this.state.automobil.id
        });
    }

    promenaIznajmljivanja() {
        this.setState({
            promenaIznajmljivanja: !this.state.promenaIznajmljivanja
        });
    }

    formaZaIzmenu() {
        const datumDo = this.dateFormat(
            new Date(this.state.iznajmljivanje.datum_iznajmljen_do * 1000)
        );

        if (this.state.promenaIznajmljivanja)
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        onChange={this.changeHandler.bind(this)}
                        name="novi_datum_do"
                        type="date"
                    ></input>
                    <input hidden type="submit"></input>
                </form>
            );
        return datumDo;
    }

    dateFormat(datum) {
        return (
            datum.getDate() +
            "." +
            (parseInt(datum.getMonth()) + 1) +
            "." +
            datum.getFullYear()
        );
    }

    render() {
        const datumOd = this.dateFormat(
            new Date(this.state.iznajmljivanje.datum_iznajmljen_od * 1000)
        );

        return (
            <tr>
                <td>{datumOd}</td>
                <td>{this.formaZaIzmenu()}</td>
                <td>{this.state.automobil.cena_po_danu}</td>
                <td>{this.state.iznajmljivanje.broj_dana_iznajmljivanja}</td>
                <td>
                    {this.state.iznajmljivanje.total_cena_iznajmljivanja}
                    <button
                        className="btn btn-warning"
                        onClick={this.promenaIznajmljivanja.bind(this)}
                    >
                        Izmeni
                    </button>
                </td>
            </tr>
        );
    }
}

if (document.getElementById("iznajmljivanje")) {
    ReactDOM.render(
        <Iznajmljivanje />,
        document.getElementById("iznajmljivanje")
    );
}
