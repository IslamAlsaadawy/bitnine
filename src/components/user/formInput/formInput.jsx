import './formInput.css'
const FormInput = ({ label, handleChange, type}) => (
    <div className="form_group">
    <label className='form_label'> {label} </label>
    <input className='form_input' onChange={handleChange} type={type} />

    </div>
)

export default FormInput;