import { Link } from "react-router-dom";
import { useAxiosGet } from "../hooks/userAxiosGet";
function Products() {
  const { data, loading, error } = useAxiosGet("/products?limit=12");
  if (loading) return <center>Loading...</center>;
  if (error) return <center>Error{error}</center>;

  const products = data?.products || [];
  return (
    <div>
      {products.map((p) => (
        <Link
          key={p.id}
          to={`/${p.id}`}
          style={{ display: "block", padding: 10 }}
        >
          {p.title} - ${p.price}
        </Link>
      ))}
    </div>
  );
}

export default Products;
