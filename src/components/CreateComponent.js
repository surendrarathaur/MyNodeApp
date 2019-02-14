import React, { Component } from 'react';
import axios from 'axios';

export default class CreateComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            port: ''
        }
        
        this.onChangeHostNam = this.onChangeHostNam.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeHostNam(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangePort(e){
        this.setState({
            port: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`name is ${this.state.name} and port is ${this.state.port}`);
        
        this.setState({
            name: '',
            port: ''
        })

        const serverport = {
            name: this.state.name,
            port: this.state.port
        }

        axios.post('http://localhost:4200/serverport/add', serverport)
        .then(res => console.log(res.data));
        
    }


    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Add New Server
                    </div>
                    <hr />
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="col-md-4">Add Host Name:  </label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeHostNam} />
                            </div>
                            <div className="form-group">
                                <label className="col-md-4">Add Server Port: </label>
                                <input type="text" className="form-control" value={this.state.port} onChange={this.onChangePort} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Add Node server" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}