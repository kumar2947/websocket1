/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Buttons from "../../components/buttons/buttons";
import InputText from "../../utils/controls/input-text";
import InputSelect from "../../utils/controls/input-select";
import InputCheck from "../../utils/controls/input-checkbox"
const UserGroups = () => {
  const [showAdduserpopup, setAdduserpopup] = useState(false)
  return (
    <>

      <div className="flex-wrap mb-2 d-flex align-items-center bgcolor-primary px-2 py-1 whitetext border-radius1 ">
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label='User Groups' className="font-14 d-flex align-items-center"> <span className="icon-adduser font-13 pe-2"></span>  User Groups</h2></div>

        <div className="d-flex flex-wrap py-xxl-0 align-items-lg-end align-items-center usergroupsinfo ms-auto">
          <div className="mx-sm-1">
            <InputSelect
              inputProps={{
                id: "UserRole ",
                name: " User Role",
                className: "latomedium font-13 whitetext text-nowrap mb-0 me-2",
              }}
              label='User Role'
              type='select'
              className='font-13 latomedium text-color5 customwidth form-xs border-radius0 '
              formClassName='d-flex align-items-start align-items-lg-start align-items-xxl-center w-100 flex-xl-row flex-column my-1'
            />
          </div>

          <div className="mx-sm-1 d-flex align-items-end align-items-lg-end">
            <InputText
              inputProps={{
                id: 'Checkuserpermissions ',
                name: 'Check user permissions ',
                className: 'text-nowrap mb-0 me-2 latomedium font-13 whitetext',
                placeholder: 'Enter a name or email address..'
              }}
              label='Check user permissions'

              className='font-13 latomedium customwidth form-xs border-radius0 '
              formClassName='d-flex align-items-start align-items-lg-start align-items-xxl-center w-100 flex-column flex-xl-row my-1'
            />
            <Buttons
              label="Search "
              className=" btn-xs latomedium font-11 text-uppercase whitetext btn-bgcolor5 px-1 px-sm-2 text-nowrap my-1 ms-1"
              icon="icon-search font-11 p-relative pe-1"
              type="button"
            />
          </div>
        </div>
      </div >
      <div className="shadow card py-0">
        <div className="card-body">
          <div className='adduser my-3 my-lg-2 p-relative d-flex'>
            <div className='d-flex align-items-center ms-auto'>
              <div className=" font-13 montserratsemibold p-2 addremovebtn" onClick={() => {
                setAdduserpopup(!showAdduserpopup)
              }}>
                <span className="icon-user pe-1"></span>Add/Remove User
                <span className="tool-tip tooltip-bottom-right" data-tip="Add/Remove User" >
                  <span className="icon-info ps-1"></span>
                </span>
              </div>
              <div className="adduserpopup" style={{ display: showAdduserpopup ? '' : 'none' }}>
                <span className="arrow is-top"></span>
                <div className="anchorclosebtn font-13 bg-color24 text-color4 m-2" title="Close" onClick={() => setAdduserpopup(false)}><span className="icon-close"></span></div>
                <div className="mx-sm-1 d-flex align-items-end align-items-lg-end">
                  <InputText
                    inputProps={{
                      id: 'SearchUser ',
                      name: 'SearchUser',
                      className: 'font-13 latomedium text-color5 w-100 d-inline-block mb-2',
                      placeholder: 'Enter a name or email address..'
                    }}
                    label='SearchUser'
                    formGroupClassName="w-100"
                    className='font-13 latomedium customwidth form-sm border-radius0 w-100 '
                  />

                  <Buttons
                    label="Search"
                    className=" btn-sm montserratBold font-11 text-uppercase whitetext btn-bgcolor5 px-1 px-sm-2 text-nowrap ms-1"
                    icon="icon-search font-11 p-relative pe-1"
                    type="button"
                  />

                </div>
                <div className="d-none">
                  <div className='userlist w-100 position-relative d-flex flex-column my-2'>
                    <h3 className='m-0 p-0 py-1 font-13 sourcesansprosemibold darktext' tabIndex={0} aria-label="Currently Assigned User Role(s)">Currently Assigned User Role(s)</h3>
                    <div className="w-100 d-flex flex-wrap">
                      <ul className='m-0 p-0 d-flex py-1 flex-wrap w-100'>
                        <li className='me-2 pb-1'>
                          <InputCheck
                            inputProps={{
                              id: 'Technician',
                              name: 'Technician',
                              type: 'checkbox',
                              value: 'Technician',
                            }}
                            label="Technician"
                            formClassName='form-horizontal flex-row-reverse'
                            className="w-100 font-13 latomedium darktext d-flex"
                          />
                        </li>
                        <li className='me-2 pb-1'>
                          <InputCheck
                            inputProps={{
                              id: 'Supervisor',
                              name: 'Supervisor',
                              type: 'checkbox',
                              value: 'Supervisor',
                            }}
                            label="Supervisor"
                            formClassName='form-horizontal flex-row-reverse'
                            className="w-100 font-13 latomedium darktext d-flex"
                          />
                        </li>
                      </ul>
                      <a href='javascript:void(0)' className='Btnremove ms-auto bg-color41 whitetext py-1 px-2 font-14 sourcesansprosemibold border-radius3' title='Remove User'><span className="icon-close font-10 pe-2"></span>Remove User </a>
                    </div>

                  </div>
                  <div className='divider vertical-line my-2'></div>
                  <div className='userlist w-100 position-relative d-flex flex-column my-2'>
                    <h3 className='m-0 p-0 py-1 font-13 sourcesansprosemibold darktext' tabIndex={0} aria-label="User Role(s) Available to assign">User Role(s) Available to assign</h3>
                    <div className="w-100 d-flex flex-wrap">
                      <ul className='m-0 p-0 d-flex py-1 flex-wrap w-100'>
                        <li className='me-2 pb-1'>
                          <InputCheck
                            inputProps={{
                              id: 'Technician',
                              name: 'Technician',
                              type: 'checkbox',
                              value: 'Technician',
                            }}
                            label="Technician"
                            formClassName='form-horizontal flex-row-reverse'
                            className="w-100 font-13 latomedium darktext d-flex"
                          />
                        </li>
                        <li className='me-2 pb-1'>
                          <InputCheck
                            inputProps={{
                              id: 'Supervisor',
                              name: 'Supervisor',
                              type: 'checkbox',
                              value: 'Supervisor',
                            }}
                            label="Supervisor"
                            formClassName='form-horizontal flex-row-reverse'
                            className="w-100 font-13 latomedium darktext d-flex"
                          />
                        </li>
                      </ul>
                      <a href='javascript:void(0)' className='Btnremove ms-auto bg-color42 whitetext py-1 px-2 font-14 sourcesansprosemibold border-radius3' title='Add User'><span className="icon-checked font-10 pe-2"></span>Add User </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive usergropslist mb-3">
            <table aria-describedby="Users_list" className="bordered1 w-100" cellPadding={0} cellSpacing={0}>
              <thead className="montserratsemibold font-14">
                <tr>
                  <th tabIndex={0} aria-label="User Role" className="darktext px-3" >User Role</th>
                  <th tabIndex={0} aria-label="User Information" className="darktext px-3">User Information</th>
                </tr>
              </thead>
              <tbody id="Users_list">
                <tr>
                  <td tabIndex={0} aria-live="polite" className="montserratsemibold font-13 darktext px-3">Role (04)</td>
                  <td>
                    <ul className="d-flex">
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Laurel Wade">Laurel Wade</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Dorothy Green">Dorothy Green</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Mary Ann Ford">Mary Ann Ford</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Frank Wood">Frank Wood</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td tabIndex={0} aria-live="polite" className="montserratsemibold font-13 darktext px-3">Role (06)</td>
                  <td>
                    <ul className="d-flex">
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Brandon Sanders">Brandon Sanders</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Charles Nelson">Charles Nelson</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Bobby Diaz">Bobby Diaz</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Benjamin Fuller">Benjamin Fuller</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Vincent Lucas">Vincent Lucas</li >
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Louis Ford">Louis Ford</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td tabIndex={0} aria-live="polite" className="montserratsemibold font-13 darktext px-3">Role (04)</td>
                  <td>
                    <ul className="d-flex">
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Barbara Andrews">Barbara Andrews</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Alan Holland">Alan Holland</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Jessica Estrada">Jessica Estrada</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Nancy Reynolds">Nancy Reynolds</li>
                    </ul>
                  </td>
                </tr >
                <tr>
                  <td tabIndex={0} aria-live="polite" className="montserratsemibold font-13 darktext px-3">Role (02)</td>
                  <td>
                    <ul className="d-flex">
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Natasha Cooper">Natasha Cooper</li>
                      <li className="py-1 px-3 bgcolor-12 mx-2 darktext sourcesanspro border-radius font-13" tabIndex={0} aria-label="Richard Wagner">Richard Wagner</li>

                    </ul>
                  </td>
                </tr>
              </tbody >
            </table >
          </div>
        </div >
      </div >
    </>
  );
};
export default UserGroups;
