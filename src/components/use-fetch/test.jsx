import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);

  return (
    <div>
      <h2>Use Fetch Hook</h2>
      {pending ? <h3>Pending !</h3> : null}
      {error ? <h3>{error} !</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
