import './Pagination.css'
import Pagination from './pagination'

function PageSelector ({ total_images, inputField, setFields }) {
    const { currentPage, images_per_page } = inputField
    const paginationElements = Pagination(total_images, images_per_page, currentPage)
    const handleNext = () => {
        setFields({type: 'setCurrentPage', value: currentPage + 1});
    }
    
    const handlePrevious = () => {
        setFields({ type: 'setCurrentPage', value: currentPage - 1});
    }
    const handlePageSelection = (pageNumber) => {
        setFields({ type: 'setCurrentPage', value: pageNumber});
    }
    const lastPage = paginationElements[paginationElements.length-1]
    return (
        <div className='paginationOuterContainer'>
            <ul className='paginationContainer'>
                <li onClick={handlePrevious} className={`pageItem ${currentPage == 1 ? 'disabled' : ''}`} key='page-start'><div className='arrow left'/></li>
                {paginationElements?.length && paginationElements.map((element, index) => {
                    if(element === '...') {
                        return <li className="pageItem dots" key={`dots-${index}`}>...</li>
                    }
                    return (
                        <li className={`pageItem ${currentPage == element ? 'selected' : ''}`} onClick={handlePageSelection.bind('', element)} key={`page-${index}`}>
                            {element}
                        </li>
                    )
                })}
                <li onClick={handleNext} className={`pageItem ${currentPage == lastPage ? 'disabled' : ''}`} key='page-end'><div className='arrow right'/></li>
            </ul>
        </div>
    )
}

export default PageSelector