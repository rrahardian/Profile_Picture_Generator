import React, { Component } from 'react';

class RobohashApi extends Component {
    constructor() {
        super()
        this.state = {
            nama: ''
        }
    }

    render() {

        let klik = () => {
            let value = document.getElementById('input').value
            this.setState({ nama: value })
        }

        return (
            <center>
                <div className="row justify-content-center py-5">
                    <div className="col-12 pt-5 pb-2">
                        <input id="input" placeholder="Ketik nama anda..." />
                    </div>
                    <div className="col-12">
                        <button className="btn" onClick={klik}>
                            Buat Profile Picture
                        </button>
                    </div>
                    <div className="col-12">
                        <img src={`https://robohash.org/${this.state.nama}`} alt="" />
                    </div>
                </div>
            </center>
        )
    }
}

export default RobohashApi