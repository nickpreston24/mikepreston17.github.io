import config from '../config';
import React, { Component } from 'react'
import axios from 'axios'
export const EntryContext = React.createContext()

const apiKey = config.airtable_api_key;
const baseId = config.airtable_base;

class EntryContextProvider extends Component {
    state = {
        entries: []
    }
    componentDidMount() {
        const fetchData = () => {
            axios
                .get(`https://api.airtable.com/v0/${baseId}/Projects?api_key=${apiKey}`)
                .then(({ data }) => {
                    console.log('data retrieved?', data.records)
                    this.setState({
                        entries: data.records
                    })
                })
                .catch(console.log)
        }
        fetchData();
    }
    render() {
        return (
            <EntryContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </EntryContext.Provider>
        )
    }
}
export default EntryContextProvider