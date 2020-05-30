import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/fetchData'
import { ReactFormMaker, getReactFormData } from 'react-form-maker'

function InputForm(props) {
  const { fetchData } = props
  const formClassName = {
    formGroupClassName: 'form-group',
    labelClassName: '',
    inputClassName: 'form-control',
  }

  const formItems = [
    { id: 'url' },
    {
      value: 'Submit',
      type: 'submit',
      className: 'btn btn-primary',
    },
  ]

  return (
    <ReactFormMaker
      header={<h1>React Api Testing Tool</h1>}
      formItems={formItems}
      formClassName={formClassName}
      onSubmit={(event) => {
        event.preventDefault()
        const inputData = getReactFormData(formItems)
        fetchData(inputData.url)
      }}
    />
  )
}

export default connect(null, { fetchData })(InputForm)
