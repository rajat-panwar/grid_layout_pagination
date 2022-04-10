import InputForm from '../input-form'
import ImageView from '../image-view'
import PageSelector from '../page-selector'
import assets_data from "../../data/assets.json";
import  { useReducer } from 'react'

function reducer (state, action) {
    switch(action.type) {
        case 'setImagesPerPage':
            return {
                ...state,
                images_per_page: action.value
            }
        case 'setNumberOfRows':
            return {
                ...state,
                number_of_rows: action.value
            }
        case 'setFlip':
            return {
                ...state,
                flip: action.value
            }
        case 'setCurrentPage':
            return {
                ...state,
                currentPage: action.value
            }
        case 'sortAsc': 
            return {
                ...state,
                data: sortByField(action.value, state.data, true)
            }
        case 'sortDesc':
            return {
                ...state,
                data: sortByField(action.value, state.data, false)
            }
    }
}

function DisplayImages (props) {
    const data = assets_data.assets
    const [inputField, dispatch] = useReducer(reducer, {
        images_per_page: 10,
        number_of_rows: 3,
        flip: false,
        currentPage: 1,
        data: data
    })
    const startIndex = inputField.images_per_page*(inputField.currentPage-1)

    return (
        <div style={{ width: '95%', margin: 'auto', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
        <InputForm inputField={inputField} setFields={dispatch}/>
        <ImageView images={inputField.data.slice(startIndex, startIndex+inputField.images_per_page)} inputField={inputField}/>
        <PageSelector total_images={data.length} inputField={inputField} setFields={dispatch} />
        </div>
    )
}

function sortByField (field = 'name', data = [], ascending) {
    if(data.length > 0){
        return data.sort((a, b) => {
            const [aplhaA, numericA]  = a[field].split('#')
            const [aplhaB, numericB]  = b[field].split('#')
            if((aplhaA >= aplhaB) && (Number(numericA)>= Number(numericB))) {
                return ascending ? 1: -1
            } else {
                return ascending ? -1 : 1
            }
        })
    }
    return data
}

export default DisplayImages