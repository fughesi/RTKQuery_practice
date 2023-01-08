import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "../features/apiSlice";

const Data = () => {
  const { data: allProd, isSuccess, error } = useGetAllProductsQuery();

  const content = (
    <main>
      {error && <h1>{error?.error}</h1>}
      {isSuccess && (
        <div>
          <h2>Data</h2>

          {allProd?.map((i) => {
            return (
              <div key={i.id}>
                <p className="productTitle">{i.title}</p>
                <p>
                  {i.description?.length > 50
                    ? i.description.slice(0, 50) + "...."
                    : i.description}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );

  return content;
};

export default Data;
