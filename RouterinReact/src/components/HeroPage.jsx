import React from "react";
import { useNavigate, Link } from "react-router-dom";
function HeroPage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <button onClick={() => navigate("/about")}>Go to About</button>
      <Link to={"/contact"}>To contact</Link> */}
      HomePage
    </div>
  );
}

export default HeroPage;
