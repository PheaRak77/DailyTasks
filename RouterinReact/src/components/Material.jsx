import { Link } from "react-router-dom";
import { products } from "./Products";
function Material() {
  return (
    <div>
      <h1>This All Product</h1>
      <div className="container d-flex justify-content-center">
        {products.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`}>
            <img
              src={p.avatar}
              alt={p.name}
              style={{
                width: "90%",
                height: 160,
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
            <h3 style={{ margin: "10px 0 4px" }}>{p.name}</h3>
            <p style={{ margin: 0 }}>តម្លៃ: ${p.price}</p>
            <small>{p.details}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Material;
