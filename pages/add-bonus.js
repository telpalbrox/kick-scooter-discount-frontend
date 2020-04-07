import React from 'react';
import Layout from '../components/Layout';
import { createBonus } from "../apiClient";
import Router from "next/router";

export default class AddBonus extends React.Component {
    constructor(props) {
        super(props);
        
        const endDate = new Date();
        endDate.setDate()

        this.state = {
            bonus: {
                userid: 'b2063242-7670-11ea-bc55-0242ac130003',
                name: '',
                startDate: '',
                endDate: ''
            },
            error: null
        };
    }

    handleNameChange = (event) => {
        this.setState({
            bonus: {
                ...this.state.bonus,
                name: event.target.value
            }
        });
    };

    handleUseridChange = (event) => {
        this.setState({
            bonus: {
                ...this.state.bonus,
                userid: event.target.value
            }
        });
    };

    handleStartDateChange = (event) => {
        this.setState({
            bonus: {
                ...this.state.bonus,
                startDate: event.target.value
            }
        });
    };

    handleEndDateChange = (event) => {
        this.setState({
            bonus: {
                ...this.state.bonus,
                endDate: event.target.value
            }
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ error: null });
        try {
            const newBonus = await createBonus(this.state.bonus);
            this.setState({ error: null });
            Router.push("/bonus/[id]?showBonusCreatedMessage=true", "/bonus/" + newBonus.id + "?showBonusCreatedMessage=true")
        } catch(err) {
            this.setState({ error: err.message });
        }
    };

    render() {
        return (
            <Layout>
              <h1>Add discount</h1>
              <form onSubmit={this.handleSubmit}>
                  <div><label>User id <input type="text" value={this.state.bonus.userid} onChange={this.handleUseridChange}/></label></div>
                  <div><label>Name <input type="text" value={this.state.bonus.name} onChange={this.handleNameChange}/></label></div>
                  <div><label>Start date <input type="date" value={this.state.bonus.startDate} onChange={this.handleStartDateChange}/></label></div>
                  <div><label>End date <input type="date" value={this.state.bonus.endDate} onChange={this.handleEndDateChange}/></label></div>
                  <button type="submit">Submit</button>
              </form>
              {this.state.error != null && this.state.error}
            </Layout>
          );
    }
}
