// Store is a page where people buy items they desire which leads to payment gateway.
// Store must contain items that are on sale in card form
// Items must have a title, a sub title, a buy button, a thumbnail of the item if possible
const Store = () => {
    const buying = async () => {

    };
  const details = [
    { id: '1', title: 'Cochela', price: '1000', expiresOn: '2021-12-12' },
    { id: '2', title: 'Sunburn', price: '600', expiresOn: '2020-01-11' },
    { id: '3', title: 'YTFF', price: '400', expiresOn: '2020-05-12' },
    { id: '4', title: 'DJ Night @ BIT', price: '100', expiresOn: '2021-08-05' },
  ];
  return (
    <div>
      {details.map((dets) => {
        return (
          <div>
            <h3>{dets.title}</h3>
            <h6>{dets.price}</h6>
            <span>{dets.expiresOn}</span>
            <button className="btn btn-primary" onClick={buying}>Buy</button>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
