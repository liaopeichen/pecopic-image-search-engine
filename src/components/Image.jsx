export default function Image({ photo }) {
  return (
    <div className="image">
      <h4>{photo.photographer}</h4>
      <div className="image-container">
        <img src={photo.src.large} alt={photo.alt} />
        <div className="view-origin">
          <a href={photo.src.original} target="_blank">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span> View Original</span>
          </a>
        </div>
      </div>
    </div>
  );
}
