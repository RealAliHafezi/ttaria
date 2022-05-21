function Favorite() {
  const state = JSON.parse(localStorage.getItem("favoriteProducts"));
  return (
    <div>
      {state.length &&
        state.map((card, index) => <div key={index}>{card.productId}</div>)}
      ali
    </div>
  );
}

export default Favorite;
