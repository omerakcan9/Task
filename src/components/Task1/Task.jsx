import React from 'react'
import { FiCheck } from "react-icons/fi";
import "./Task.css"

function Task() {
  return (
    <div className="form_box rounded p-4">
      <form action="" className='d-flex flex-column  justify-content-between  h-100 w-100'>
        <div className="purpose_radio_wrap ">
          <h6>Purpose : </h6>
          <div className='d-flex gap-4'>
            <div className="d-flex gap-1">
              <input className="form-check-input"
                type="radio"
                name="radio_group1"
                id='client' />
              <label className='form-label' htmlFor="client">Client</label>
            </div>
            <div className="d-flex gap-1">
              <input className="form-check-input"
                type="radio"
                name="radio_group1"
                id='group' />
              <label className='form-label' htmlFor="group">Group</label>
            </div>
            <div className="d-flex gap-1">
              <input className="form-check-input "
                type="radio"
                name="radio_group1"
                id='agent' />
              <label className='form-label' htmlFor="agent">Agent</label>
            </div>
          </div>
        </div>
        <div className='input_text_wrapper d-flex flex-column gap-2'>
          <div>
            <label className='form-label' htmlFor="example_1">Label :</label>
            <input className='form-control bg-transparent text-white'
              id='example_1'
              type="text"
            />
            <p className='input_message mt-2'>Please write label to here </p>
          </div>
          <div>
            <label className='form-label' htmlFor="example_2">Key :</label>
            <input className='form-control bg-transparent text-white'
              id='example_2'
              type="password" />
            <p className='input_message mt-2'>Please write key to here </p>
          </div>
        </div>
        <div className='status_radio_wrap'>
          <h6>Status :</h6>
          <div className='d-flex gap-3'>
            <div className='d-flex gap-1'>
              <input className='form-check-input'
                id='status_active'
                type="radio"
                name='status' />
              <label htmlFor="status_active">Active</label>
            </div>
            <div className='d-flex gap-1'>
              <input className='form-check-input'
                id='status_passive'
                type="radio"
                name='status' />
              <label htmlFor="status_passive">Passive</label>
            </div>
          </div>
        </div>
        <button className='btn btn-success w-100'>Save <FiCheck className='fs-5' /></button>
      </form >
    </div >
  )
}

export default Task