export default function Image({ photo }) {
  return (
    <div className="image">
      <p>{photo.photographer}</p>
      <div className="image-container">
        <img src={photo.src.large} alt={photo.alt} />
      </div>
      <div className="download">
        <a href={photo.src.original} target="_blank">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <span> View Original</span>
        </a>
      </div>
    </div>
  );
}
