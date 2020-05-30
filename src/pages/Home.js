import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import InputForm from '../components/InputForm'

import JSONFormatter from 'json-formatter-js'

function Home(props) {
  const { data } = props
  useEffect(() => {
    if (data) {
      const formatter = new JSONFormatter(data)
      const result = document.getElementById('result')
      result.innerHTML = ''
      result.appendChild(formatter.render())
    }
  }, [data])

  return (
    <>
      <div className="container my-5">
        <InputForm />
        <hr />
        <div id="result"></div>
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
