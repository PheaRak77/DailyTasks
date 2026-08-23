import { products } from "./Products";
import { useNavigate, useParams } from "react-router-dom";

function MaterailDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);
  console.log(product);

  if (!product) {
    return (
      <div>
        <h1>Product Not found !</h1>
        <button onClick={() => navigate("/product")}>Back</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <img
        src={product.avatar}
        alt={product.name}
        style={{
          width: 260,
          height: 260,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <h3>Price{product.price}</h3>
      <p>
        <b>ព័ត៌មានខ្លី:</b> {product.details}
      </p>
      <p>
        <b>ពិពណ៌នា:</b> {product.description}
      </p>
    </div>
  );
}

export default MaterailDetails;
