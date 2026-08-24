import { api } from "../api/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const res = await api.get("/products?limit=12", {
          signal: controller.signal,
        });
        setProducts(res.data.products || []);
      } catch (err) {
        if (err.name !== "CnaceledError") {
          setError(err.message || "Get data error !");
        }
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
    return () => controller.abort();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>កំពុងទាញទិន្នន័យ...</p>;
  if (error)
    return <p style={{ padding: 20, color: "red" }}>បរាជ័យ: {error}</p>;
  return (
    <div style={{ padding: 20 }}>
      <h1>បញ្ជីផលិតផល</h1>

      <div
        style={{
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/products/${p.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <h3 style={{ margin: "10px 0 4px" }}>{p.title}</h3>
            <p style={{ margin: 0 }}>តម្លៃ: ${p.price}</p>
            <small>
              ព័ត៌មានខ្លី: {p.brand} / {p.category}
            </small>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
