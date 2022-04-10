import FlipCard from "../flip-card"
import traits from "../../data/traits.json";
import './ImageView.css'

function ImageView ({ images, inputField }) {
    const { number_of_rows, images_per_page, flip } = inputField
    let column = Math.ceil(images_per_page/number_of_rows)
    const getGridTemplateColumn = () => {
        let result = ''
        while (column-- > 0) {
            result += 'auto '
        }
        return result
    }

    return (
        <div className="imageViewContainer" style={{ gridTemplateColumns: getGridTemplateColumn() }}>
            {images.length && images.map((image, index) => {
                const traits = filterTraits(image.id)
                const front = (
                 <> 
                    <div className="imageBackground" style={{ backgroundImage: `url(${image.image})`}}/>
                    <div className="imageDescription">
                        <h6 className="imageName">{image.name}</h6>
                        <h6 className="imageOwner">{`Owner: ${image.owner}`}</h6>
                    </div>
                </>
                )
                const back = (
                    <div className="cardBackContainer">
                        {traits.map((trait, index)=> {
                            return (
                                <div key={`trait-${index}`} className='width100'>{`${trait.trait_type} : ${trait.trait_value}`}</div>
                            )
                        })}
                    </div>
                )
               return (
                   <FlipCard front={front} back={back} id={index} key={index} flip={flip}/>
               ) 
            })}
        </div>
    )
}

function filterTraits (uniqueId) {
    const { traits: traitsBasedOnId } = traits
    return traitsBasedOnId.filter((element, index) => {
        if(element.id == uniqueId) {
            return true
        }
        return false
    })
}

export default ImageView