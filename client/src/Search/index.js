import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button } from 'react-bootstrap'
import './Search.css';

export class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
        };
    }

    getSearchResults = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:8080/filter?q=${this.state.value}`);
        const results = await response.json();
        if (response.status !== 200) throw Error(results.message);
        this.props.onSearch(results)
    };

    handleInputChange = (event) => {
        this.state.value = event.target.value
    }

    render() {
        return (
            <MDBCol md="6" className="search" >
                <Form onSubmit={this.getSearchResults}>
                    <div className="input-group md-form form-sm form-1 pl-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text purple lighten-3" id="basic-text1">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                        <Form.Control 
                            type="text"
                            placeholder="Search"
                            className="form-control my-0 py-1" 
                            aria-label="Search"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </MDBCol>
        )
    }
}