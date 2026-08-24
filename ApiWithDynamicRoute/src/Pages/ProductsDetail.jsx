import { api } from "../api/client";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function loadDetail() {
      try {
        setLoading(true);
        setError("");

        const res = await api.get(`/products/${id}`, {
          signal: controller.signal,
        });
        setProducts(res.data);
      } catch (err) {
        if (err.name !== "CancalError") {
          setError(err.message || "Error get Data from API");
        }
      } finally {
        setLoading(false);
      }
    }
    loadDetail();
    return () => controller.abort();
  }, [id]);

  if (loading) return <p style={{ padding: 20 }}>កំពុងទាញព័ត៌មានផលិតផល...</p>;

  if (error) {
    return (
      <div style={{ padding: 20 }}>
        <p style={{ color: "red" }}>បរាជ័យ: {error}</p>
        <button onClick={() => navigate("/products")}>ត្រឡប់ទៅបញ្ជី</button>
      </div>
    );
  }
  return (
    <div style={{ padding: 20, maxWidth: 800 }}>
      <button onClick={() => navigate(-1)}>ត្រឡប់ក្រោយ</button>
      <Link to="/products" style={{ marginLeft: 10 }}>
        ទៅបញ្ជី
      </Link>

      <h1 style={{ marginTop: 12 }}>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: 280,
          height: 280,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />

      <h3>តម្លៃ: ${product.price}</h3>
      <p>
        <b>ព័ត៌មានខ្លី:</b> {product.brand} / {product.category}
      </p>
      <p>
        <b>ពិពណ៌នា:</b> {product.description}
      </p>
    </div>
  );
}

export default ProductsDetail;
