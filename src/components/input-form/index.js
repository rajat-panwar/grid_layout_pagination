import Toggle from "../commons/toggle"
import { styles } from "./styles"

function InputForm ({ inputField, setFields }) {
    const {images_per_page, number_of_rows, flip} = inputField
    
    function onChange (event, value) {
        setFields({ type: this, value : Number(event.target.value)})
        setFields({ type: 'setCurrentPage', value : 1})
    }

    // For now we are implementing only srting by name
    function handleAscSort () {
        setFields({ type: 'sortAsc', value: 'name'})
        setFields({ type: 'setCurrentPage', value : 1})
    }

    function handleDescSort () {
        setFields({ type: 'sortDesc', value: 'name'})
        setFields({ type: 'setCurrentPage', value : 1})
    }
    return (
        <div style={styles.fieldContainer}>
            <fieldset>
                <legend>Images</legend>
                    <select onChange={onChange.bind('setImagesPerPage')} value={images_per_page} style={styles.selectContainer}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15} >15</option>
                        <option value={20}>20</option>
                    </select>
            </fieldset>
            <fieldset>
                <legend>Rows</legend>
                    <select onChange={onChange.bind('setNumberOfRows')} value={number_of_rows} style={styles.selectContainer}>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
            </fieldset>
            <Toggle label={'Flip'} checked={flip} setFields={setFields}/>
            <div style={styles.downSortArrow} onClick={handleAscSort}/>
            <div style={styles.upSortArrow} onClick={handleDescSort}/>
            <div style={styles.sort}>Sort</div>
            <div style={styles.dummy}/>
        </div>
    )
}

export default InputForm