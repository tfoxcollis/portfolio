import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TextArea = ({id, label, rows, place, icon}) => {
  return (
    <div className="form-item">
      <textarea id={ id } name={ id } rows={ rows } placeholder= { place }></textarea>
      <label className="lbl-floating" htmlFor={ id }>{ label }</label>
      <FontAwesomeIcon className="icon text-white" icon={ icon } />
    </div>
  )
}