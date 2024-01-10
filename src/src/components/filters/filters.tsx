import React from 'react'
import Buttons from '../buttons/buttons'
import InputSelect from '../../utils/controls/input-select'
import InputSearch from '../../utils/controls/input-search'
import InputSelect1 from '../../utils/controls/select/input-select'
export default function Filters () {
  return (
        <>
            <div className="d-flex px-2 py-2">
                <div className="d-flex align-items-center w-100 whitetext">
                    <h3 tabIndex={0} aria-label='Dashboard' className="m-0 me-2 color-primary"> <span className="icon-filter font-14"></span> Filter by</h3>
                    <Buttons
                        label="Clear All"
                        className='ms-auto btn-sm d-flex align-items-center links text-decoration-underline'
                        type="button"
                    />
                </div>
            </div>
            <div className="row d-flex flex-wrap p-2 pt-0">
                <InputSearch
                    inputProps={{
                      arialabel: 'search',
                      placeholder: 'Search',
                      label: 'true'
                    }}
                    className='no-border w-100'
                    label=""
                    searchgroup='bordered2 w-100 d-flex align-items-center border-radius'
                    formClassName="col-sm-12  mt-1"
                    icon='icon-search px-2'
                />
                <InputSelect1
                placeholder="Select"
                label='Filter222'
                />
                <InputSelect
                    inputProps={{
                      id: 'filter',
                      name: 'Filter 1',
                      placeholder: 'Select'
                    }}
                    label='Filter 1'
                    formClassName="form-vertical col-sm col-lg-6"
                    className='form-sm w-100'
                />
                <InputSelect
                    inputProps={{
                      id: 'filter2',
                      name: 'Filter 2',
                      placeholder: 'Select'
                    }}
                    label='Filter 2'
                    formClassName="form-vertical col-sm col-lg-6"
                    className='form-sm w-100'
                />
                <InputSelect
                    inputProps={{
                      id: 'filter3',
                      name: 'Filter 3',
                      placeholder: 'Select'
                    }}
                    label='Filter 3'
                    formClassName="form-vertical col-sm col-lg-6"
                    className='form-sm w-100'
                />
                <InputSelect
                    inputProps={{
                      id: 'filter4',
                      name: 'Filter 4',
                      placeholder: 'Select'
                    }}
                    label='Filter 4'
                    formClassName="form-vertical col-sm col-lg-6"
                    className='form-sm w-100'
                />
                <InputSelect
                    inputProps={{
                      id: 'filter5',
                      name: 'Filter 5',
                      placeholder: 'Select'
                    }}
                    label='Filter 5'
                    formClassName="form-vertical col-sm col-lg-6"
                    className='form-sm w-100'
                />
            </div>
        </>
  )
}
