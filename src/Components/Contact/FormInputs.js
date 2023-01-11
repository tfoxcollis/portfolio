import { faUser, faAt, faComment } from '@fortawesome/free-solid-svg-icons'
import { TextInput } from './TextInput'
import { TextArea } from './TextArea'

export const FormInputs = () => {
  return (
    <div className="contact-section">
      <input type="hidden" name="toName" value="Trish"></input>
      <TextInput type="text" id="txtFullName" label="Name" place="name" icon={ faUser } />
      <TextInput type="text" id="txtEmail" label="Email" place="email" icon={ faAt } />
      <TextArea type="textarea" id="txtContent" label="This is where you tell me about your job opportunity :)" place="This is where you tell me about your job opportunity :)" icon={ faComment } />
    </div>
  )
}
