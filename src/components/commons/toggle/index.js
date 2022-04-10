import './Toggle.css'

function Toggle ({ label, checked, setFields }) {
    const onChange = (e) => {
        setFields({type: 'setFlip', value: e.target.checked})
    }
    return (
        <div className='positionRel'>
            <span className='toggleLabel'>{label}</span>
            <label className='switch'>
                <input type='checkbox' value={checked} onClick={onChange}/>
                <span className='slider'></span>
            </label>
        </div>
    )
}

export default Toggle