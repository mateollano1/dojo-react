import React, { Component } from 'react';
import axios from 'axios'
import Cards from '../../components/Cards/Cards'

class Task extends Component {
    state = {
        taskData: []
    }
    componentDidMount() {
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks", { headers: { 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzc5ODQsImV4cCI6MTU4Mjk4Mjc4NH0.kNLUstdlnm3RSh6GIPRigWe0uacvdVas9hVAN-dNGXE' } }).then(
            res => {
                this.setState({
                    taskData: res.data.results
                })
                console.log(res)
            }
        ).catch(err => { console.log("error") })
        console.log("[Tasks] ");

    }
    render() {
        

        const cardsView = (this.state.taskData.length ? 
        <Cards data={this.state.taskData}/>
        :null)
        return (
            <div>

                {cardsView}
            </div>

        );
    }
}

export default Task