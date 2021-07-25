import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const HoverRating = ({ rating, onClick, style, setRatingHover, ratingHover}) => {
  console.log();
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} onMouseEnter = {() => setRatingHover(i)} onMouseLeave = {()=> setRatingHover(rating-1)} style={style}>
          {rating > i || ratingHover >i ? (
            <AiFillStar fontSize="15px"  />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};

export default HoverRating;

