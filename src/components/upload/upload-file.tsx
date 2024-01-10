import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FILENAME_REGEX } from '../../utils/constants/rhybusconfig'
import './fileupload.css'
interface Props {
  onFileChange:any,
  label?:any,
  hint?:any,
  inputProps?:any,
  infoClassName?:any,
  info?:any,
  infoIcon?:any,
  isInfo?:any,
  formClassName?:any
}
export const FileUpload = (props:Props) => {
  const wrapperRef = useRef<any>(null)
  const [fileList, setFileList] = useState<any>([])
  const [duplicateError, setduplicateError] = useState(false)
  const [invalidfileError, setInvalidfileError] = useState(false)
  const [invalidfileNameError, setInvalidfileNameError] = useState(false)
  const onDragEnter = () => wrapperRef.current.classList.add('dragover')
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

  const allowedExtensions = [
    '.xlsx', '.xls', '.doc', '.docx', '.ppt', '.pptx',
    '.txt', '.pdf', '.png', '.jpg', '.jpeg', '.gif', '.msg'
  ]
  const fileExistsErrorMessage = <p>Selected file already exists.</p>
  const invalidFileErrorMessage = <p>Invalid file format. Please select a file with one of the following extensions: .xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf, .png, .jpg, .jpeg, .gif, .msg</p>
  const invalidfileNameErrorMessage = <p>Selected file contains invalid characters</p>

  const addFileHandler = () => {
    setduplicateError(false)
    document.getElementById('attachFile')!
  }

  const onFileDrop = (e:any) => {
    let updatedList: any[] = []
    setduplicateError(false)
    setInvalidfileError(false)
    setInvalidfileNameError(false)
    const targetfiles = e.target.files
    for (let index = 0; index < targetfiles.length; index++) {
      const newFile = targetfiles.item(index)
      const existsinCurrentUpload = fileList.map((x:any) => x.name)
      // Checking for invalid files
      const fileExtension = newFile.name
        .substring(newFile.name.lastIndexOf('.'))
        .toLowerCase()
      if (!allowedExtensions.includes(fileExtension)) {
        setInvalidfileError(true)
        setInvalidfileNameError(false)
        setduplicateError(false)
      } else {
        if (FILENAME_REGEX.test(newFile.name)) {
          setInvalidfileNameError(true)
          setduplicateError(false)
          setInvalidfileError(false)
        } else if (!existsinCurrentUpload.includes(newFile.name) && newFile) {
          updatedList = [...updatedList, newFile]
          const allAttachments = fileList.concat(updatedList)
          setFileList(allAttachments)
        } else {
          setduplicateError(true)
          setInvalidfileError(false)
          setInvalidfileNameError(false)
        }
      }
    }
    const allAttachments = fileList.concat(updatedList)
    setFileList(allAttachments)
    if (props?.onFileChange) { props?.onFileChange(allAttachments) }
  }
  const handleDrop = (e:any) => {
    e.preventDefault()
    wrapperRef.current.classList.remove('dragover')
    if (!e) return
    let updatedList: any[] = []
    const files = e.dataTransfer.files
    const newFiles = Array.from(files)
    setduplicateError(false)
    setInvalidfileError(false)
    setInvalidfileNameError(false)
    for (let index = 0; index < newFiles.length; index++) {
      const newFile:any = newFiles?.[index]
      const existsinCurrentUpload = fileList.map((x:any) => x.name)
      // Checking for invalid files
      const fileExtension = newFile.name
        .substring(newFile.name.lastIndexOf('.'))
        .toLowerCase()
      if (!allowedExtensions.includes(fileExtension)) {
        setInvalidfileError(true)
        setduplicateError(false)
        setInvalidfileNameError(false)
      } else {
        if (FILENAME_REGEX.test(newFile.name)) {
          setInvalidfileNameError(true)
          setInvalidfileError(false)
          setduplicateError(false)
        } else if (!existsinCurrentUpload.includes(newFile.name) && newFile) {
          updatedList = [...updatedList, newFile]
        } else {
          setduplicateError(true)
          setInvalidfileError(false)
          setInvalidfileNameError(false)
        }
      }
    }
    const allAttachments = fileList.concat(updatedList)
    setFileList(allAttachments)
    if (props?.onFileChange) { props?.onFileChange(allAttachments) }
  }
  const fileRemove = (file:any) => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    setInvalidfileError(false)
    setInvalidfileNameError(false)
    if (props?.onFileChange) { props?.onFileChange(updatedList) }
  }
  return (
    <div className="attachments">
      <div className="formgroup">
        <label htmlFor='form-file-upload'>Attach File(s) </label>
        <div id="form-file-upload" className="attachfile dropzonecontrol" tabIndex={0} aria-label="Attachment">
          <div ref={wrapperRef}
            className="drop-file-input"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e)}>

            <label htmlFor="attachFile" title="Choose/Drag files" className="choosebtn" onClick={addFileHandler}>
              Choose/Drag files</label>
            <input type="file" name="attachFile" id="attachFile"
              accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf,.png, .jpg, .jpeg,.gif, .msg"
              aria-label="Attach File" multiple onChange={onFileDrop} />
            {
              fileList.length > 0
                ? (
                <div className="attachmentsdisplay">
                  <ul id="attachments" className="formattach">
                    {
                      fileList.map((item:any, index:number) => (
                        <li key={item.name}>
                          <div className="attachedfiles" title={item.name} tabIndex={0} aria-label={item.name}>{item.name}
                            <span className="icon-close" onClick={() => fileRemove(item)} onKeyDown={() => fileRemove(item)} title='Close' tabIndex={0} aria-label="Close"></span>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                  )
                : null
            }
            <span id="docerrormsg" className='Spanerrormsgs' style={{ textAlign: 'left', verticalAlign: 'bottom' }}>
              {duplicateError && fileExistsErrorMessage}
              {invalidfileError && invalidFileErrorMessage}
              {invalidfileNameError && invalidfileNameErrorMessage}
            </span>
          </div>
        </div>
        <span className="spanhintmsg"> Hint: Upload the files which are in the .png, .jpeg, .xlsx, .doc, .pdf, .ppt, .txt, .pptx, .msg files and special characters will not be used in the document names</span>
      </div>
    </div>
  )
}
FileUpload.propTypes = {
  onFileChange: PropTypes.func
}
export default FileUpload
