const mainData = () => {
  const renderAnimeList = (array, genre) => {
    console.log(array);
    console.log(genre);
  };

  const renderTopAnime = (array) => {
    const wrapper = document.querySelector(".filter__gallery");
    wrapper.innerHTML = "";
    array.forEach((item) => {
      wrapper.insertAdjacentHTML("beforeend",
        `
        <div class="product__sidebar__view__item set-bg" data-setbg="${item.image}">
          <div class="ep">${item.rating} / 10</div>
          <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
          <h5><a href="/anime-details.html">${item.title}</a></h5>
        </div>
      `
      );
    });

    wrapper.querySelectorAll(".set-bg").forEach((elem) => {
      elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    });
  };

  fetch("https://glo-academy-9510f-default-rtdb.firebaseio.com/anime.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataSort = data.sort((a, b) => b.views - a.views).slice(0, 5);
      const genres = new Set();

      renderTopAnime(dataSort);

      data.forEach((elem) => {
        genres.add(elem.ganre);
      });

      renderAnimeList(data, genres);
    });
};

mainData();
