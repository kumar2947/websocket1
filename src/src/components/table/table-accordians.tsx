/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import './table.css'
import InputCheck from '../../utils/controls/input-checkbox'
const Employees = [
  {
    key: 'column-id-1',
    column1: 'column 1',
    column2: 'column 2',
    column3: 'column 3',
    column4: 'column 4',
    column5: 'column 5',
    column6: 'column 6',
    column7: 'column 7',
    column8: 'column 8',
    column9: 'column 9',
    column10: 'column 10',
    column11: 'column 11',
    status: 'status 1',
    discription: 'discription',
    colorcode: '1'
  },
  {
    key: 'column-id-2',
    column1: 'column 1',
    column2: 'column 2',
    column3: 'column 3',
    column4: 'column 4',
    column5: 'column 5',
    column6: 'column 6',
    column7: 'column 7',
    column8: 'column 8',
    column9: 'column 9',
    column10: 'column 10',
    column11: 'column 11',
    status: 'status 2',
    discription: 'discription',
    colorcode: '2'
  },
  {
    key: 'column-id-3',
    column1: 'column 1',
    column2: 'column 2',
    column3: 'column 3',
    column4: 'column 4',
    column5: 'column 5',
    column6: 'column 6',
    column7: 'column 7',
    column8: 'column 8',
    column9: 'column 9',
    column10: 'column 10',
    column11: 'column 11',
    status: 'status 3',
    discription: 'discription',
    colorcode: '3'
  }]
function Row (employees : any) {
  return (
    employees.map((props :any) =>
    <>
      <tr>
        <th className='checkbox'>
          <InputCheck
            inputProps={{
              id: props.key,
              name: 'Input Check',
              type: 'checkbox',
              label: props.column1
            }}
            formClassName='form-horizontal font-0'
          />
        </th>
        <th tabIndex={0} aria-label={props.column1}><a href="#/detail-view" className='links' title={props.discription}>{props.column1}</a></th>
        <td tabIndex={0} aria-label={props.column2}>{props.column2}</td>
        <td tabIndex={0} aria-label={props.column3}>{props.column3}</td>
        <td tabIndex={0} aria-label={props.column4}>{props.column4}</td>
        <td tabIndex={0} aria-label={props.column5}>{props.column5}</td>
        <td tabIndex={0} aria-label={props.column6}>{props.column6}</td>
        <td tabIndex={0} aria-label={props.column7}>{props.column7}</td>
        <td tabIndex={0} aria-label={props.column8}>{props.column8}</td>
        <td tabIndex={0} aria-label={props.column9}>{props.column9}</td>
        <td tabIndex={0} aria-label={props.column10}>{props.column10}</td>
        <td tabIndex={0} aria-label={props.column11}>{props.column11}</td>
        <th status-kpis={props.colorcode} tabIndex={0} aria-label={props.column12}>{props.status}</th>
      </tr>
      <tr>
        <th colSpan={12}> <a href="#/detail-view" className='links' title={props.discription}>{props.discription}</a></th>
      </tr>
    </>
    )
  )
}
export const Tableaccordion = () => {
  const [employees, setEmployees] = useState<any>([Employees[0]])
  function handleSelectChnage (event : any) {
    if (event.target.value === '') {
      setEmployees(Employees[0])
    } else {
      const searchData = Employees.filter((emp:any) => {
        return emp.department === event.target.value
      })
      setEmployees(searchData)
    }
  }

  function handleInputChnage (event : any) {
    const searchText = event.target.value.toLowerCase()
    const searchData = Employees.filter((emp : any) => {
      return emp.status.toLowerCase().indexOf(searchText) > -1
    })
    setEmployees(searchData)
  }

  const rows : any = []

  return (
      <div className='w-100 overflow-auto p-1'>
        {/* for search functionality */}
         {/* <div className='form-group'>
          <select className="form-control" onChange={handleSelectChnage} >
            <option value=''>Select Department</option>
            <option value='Tech'>Tech</option>
            <option value='Mech'>Mech</option>
            <option value='Prod'>Prod</option>
          </select>
          </div>
          <div className='form-group'>
            <input  className="form-control" placeholder="Search Employee" onChange ={handleInputChnage} />
          </div>       */}
        <table className="table-borderless table-dis w-100 sticky-top second-column last-column table-rowgap" >
          <thead>
            <tr>
              <th>
                <InputCheck
                  inputProps={{
                    id: 'all',
                    name: 'Input Check',
                    type: 'checkbox',
                    label: 'All'
                  }}
                  formClassName='form-horizontal font-0'
                />
              </th>
              <th tabIndex={0} aria-label="heading1">Heading 1</th>
              <th tabIndex={0} aria-label="heading2">Heading 2</th>
              <th tabIndex={0} aria-label="heading3">Heading 3</th>
              <th tabIndex={0} aria-label="heading4">Heading 4</th>
              <th tabIndex={0} aria-label="heading5">Heading 5</th>
              <th tabIndex={0} aria-label="heading6">Heading 6</th>
              <th tabIndex={0} aria-label="heading7">Heading 7</th>
              <th tabIndex={0} aria-label="heading8">Heading 8</th>
              <th tabIndex={0} aria-label="heading9">Heading 9</th>
              <th tabIndex={0} aria-label="heading10">Heading 10</th>
              <th tabIndex={0} aria-label="heading11">Heading 11</th>
              <th tabIndex={0} aria-label="heading12">Heading 12</th>
            </tr>
          </thead>
          <tbody>

       { Row(employees)}

          </tbody>
        </table>
      </div>
  )
}
