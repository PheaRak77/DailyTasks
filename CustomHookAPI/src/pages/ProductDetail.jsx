import { useNavigate, useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/userAxiosGet";
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    error,
    loading,
  } = useAxiosGet(`/products/${id}`, [id]);
  if (loading) return <p style={{ padding: 20 }}>កំពុងទាញព័ត៌មាន...</p>;
  if (error)
    return <p style={{ padding: 20, color: "red" }}>បរាជ័យ: {error}</p>;
  if (!product) return <p style={{ padding: 20 }}>រកមិនឃើញ</p>;
  return (
    <div>
      {" "}
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width="220" />
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

export default ProductDetail;
