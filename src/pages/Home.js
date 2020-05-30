import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/fetchData'

function Home(props) {
  const { fetchData, data } = props



  useEffect(() => {
    fetchData(url)
  }, [])



  return (
   
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchDataReducer.data,
  }
}

export default connect(mapStateToProps, { fetchData })(Home)
