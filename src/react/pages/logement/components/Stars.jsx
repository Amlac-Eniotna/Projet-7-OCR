import starFull from '../../../../assets/star-full.svg'
import starEmpty from '../../../../assets/star-empty.svg'

function Stars(props) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="info__note">
      {range.map((rangeElem) =>
        props.rating >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            className="info__note--star"
            src={starFull}
            alt="étoile plein"
          />
        ) : (
          <img
            key={rangeElem.toString()}
            className="info__note--star"
            src={starEmpty}
            alt="étoile vide"
          />
        ),
      )}
    </div>
  )
}

export default Stars
