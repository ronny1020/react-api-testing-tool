import React from 'react'
import { connect } from 'react-redux'

import InputForm from '../components/InputForm'

import { JsonFormatter } from 'react-json-formatter'

function Home(props) {
  const { data } = props

  return (
    <>
      <div className="container my-5">
        <InputForm />
        <hr />
        {data ? (
          <JsonFormatter json={JSON.stringify(data)} tabWith="4" />
        ) : null}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchDataReducer.data,
  }
}

export default connect(mapStateToProps, {})(Home)
