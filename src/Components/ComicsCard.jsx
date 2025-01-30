export default function ComicsCard({ image, alt }) {
  return (
    <div className="product-card">
      <img src={image} alt={alt} />
      <h3 className="white">{alt}</h3>
    </div>
  );
}
