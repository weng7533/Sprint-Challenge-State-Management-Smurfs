import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions/actions';
const App = props => {


  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')


  useEffect(() => {
    if (props.gotData === false) {
      props.getSmurfs()
    }

    console.log(props)
  }, []);

  console.log(props)

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postSmurfs({
      'name': name,
      'age': age,
      'height': height
    })

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
        <input placeholder='Age' value={age} onChange={(e) => { setAge(e.target.value) }} />
        <input placeholder='Height' value={height} onChange={(e) => { setHeight(e.target.value) }} />
        <button >POST Smurfs</button>
      </form>

      {/* <button onClick={props.getSmurfs}>Get Smurfs</button> */}
      {props.gotData && (
        props.data.map((smurf) => {
          return (
            <div key={smurf.id}>
              <div>Name: {smurf.name}</div>
              <div>Age: {smurf.age}</div>
              <div>Height: {smurf.height}</div>
              <div>ID: {smurf.id}</div>
            </div>)
        })
      )
      }
    </div>
  );

}

const mapStateToProps = state => {
  return {
    data: state.data,
    gotData: state.gotData,
    fetching: state.fetching,
    err: state.err,
    errData: state.errData
  }
}

export default connect(mapStateToProps, { getSmurfs, postSmurfs })(App);
