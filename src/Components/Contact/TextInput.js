import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TextInput = ({type, id, label, place, icon}) => {
  return (
    <div className="form-item">
      <input type={type} id={id} name={id} placeholder={place} />
      <label className="lbl-floating" htmlFor={id}>{ label }</label>
      <FontAwesomeIcon className="icon text-white" icon={ icon } />
    </div>
  )
}