import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,98</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          repellendus molestias totam esse quis saepe, fuga eius. Dicta, soluta
          similique accusamus quas animi nam aspernatur deleniti excepturi sint
          illo fuga.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
