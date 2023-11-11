export const sortProduct = (arr) => {
  return arr.sort((a, b) => a.product_name.localeCompare(b.product_name));
};

export const mapProduct = (arr, querry) => {
  return arr
    .sort((a, b) => a.product_name.localeCompare(b.product_name))
    .filter((item) => {
      return querry === ''
        ? item
        : item.product_name.toLowerCase().includes(querry.toLowerCase()) ||
            item.product_description
              .toLowerCase()
              .includes(querry.toLowerCase());
    })
    .map((item) => {
      return (
        <div key={item.id}>
          {item.product_name} - {item.product_description}
        </div>
      );
    });
};

export const reproduce = (arr, gap) => {
  const first = ~~(Math.random() * (arr.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: arr.slice(first, last)
  };
  return response;
};
