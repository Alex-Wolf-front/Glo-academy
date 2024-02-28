const mainData = () => {
  fetch("https://glo-academy-9510f-default-rtdb.firebaseio.com/anime.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

mainData();
