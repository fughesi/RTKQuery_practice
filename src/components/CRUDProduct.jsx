import {
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../features/apiSlice";

export const CRUDProduct = () => {
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const product = {
    id: 29,
    title: "penis puffer",
    description: "Attractive gay guy that sucks penis",
    price: 30,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "Golden",
    category: "home-decoration",
    thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
    ],
  };

  return (
    <div>
      <button onClick={async () => await addProduct(product)}>
        Add Product
      </button>
      <button
        onClick={async () =>
          await updateProduct({ id: product.id, ...product })
        }
      >
        Update Product
      </button>
      <button onClick={async () => await deleteProduct(product.id)}>
        Delete Product
      </button>
    </div>
  );
};
