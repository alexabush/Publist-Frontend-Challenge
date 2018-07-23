import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    let rawData;
    try {
      rawData = await axios({
        method: 'post',
        url: 'https://publist.ai/api/v2/jobs.frontend',
        data: { query: 'tech' },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksIm5hbWUiOiJBbGV4IiwiZW1haWwiOiJhbGV4YWJ1c2g3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJlbWFpbF92ZXJpZmljYXRpb25fY29kZSI6IjQ2MDI3MSIsInBhc3N3b3JkIjoiJDJhJDEwJHptMmt5MlZOOU9vT0E4eTZqamhFNE8zQTBoSHdydGg5UEY3a3drN1V1dmtyYnNMRU5XRWpLIiwicGVybWlzc2lvbnMiOm51bGwsInRpbWV6b25lIjoiQW1lcmljYS9Mb3NfQW5nZWxlcyIsImlwX2FkZHJlc3MiOiIzOC44OC4yNDcuMTE0LzMyIiwib3B0aW9ucyI6e30sIm1ldGFkYXRhIjp7fSwibGFzdF9sb2dpbiI6IjIwMTgtMDctMjNUMTY6NTI6MDIuOTE5WiIsImxhc3RfYWN0aXZlIjoiMjAxOC0wNy0yM1QxNjo1MjowMi45MTlaIiwidXBkYXRlZCI6IjIwMTgtMDctMjNUMTY6NTI6MDIuOTE5WiIsImNyZWF0ZWQiOiIyMDE4LTA3LTIzVDE2OjUyOjAyLjkxOVoiLCJpYXQiOjE1MzIzNjQ3MjMsImV4cCI6MTUzMzU3NDMyM30.hZPyOWEX2twYxgJX--LMatt3-QBTPBxTbnSiIqab6gM'
        }
      });
    } catch (e) {
      console.log('There was an error!');
    }
    this.setState(rawData.data.data);
  }
  render() {
    return (
      <div className="App">
        <div />
      </div>
    );
  }
}

export default App;
