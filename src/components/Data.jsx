import {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useGetProductByIdQuery,
} from "../features/apiSlice";

const Data = () => {
  const { data: prodID, isSuccess, error } = useGetProductByIdQuery(6);

  // console.log(typeof prodID?.price);
  const content = (
    <main>
      {error && <h1>{error?.error}</h1>}
      {isSuccess && (
        <div>
          <h2>Data</h2>

          {/* {oneProduct?.products.map((i) => {
            return <p key={i.id}>{i.title}</p>; */}
          {/* })} */}
          <pre>
            Title: {prodID?.title}
            <br />
            Price: {Number(prodID?.price)}
          </pre>
        </div>
      )}
    </main>
  );

  return content;
};

export default Data;
