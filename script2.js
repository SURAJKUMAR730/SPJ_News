document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "cd5f30e57013b51f31f2585f23672ff5";

    const fetchData = async (category, pageSize) => {
        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&pageSize=${pageSize}&lang=en&country=IN&apikey=${apiKey}`;
        const data = await fetch(url);
        const response = await data.json();
        return response.articles;
    };
    const add_breakingNews = (data) => {
        const breakingImg = document.getElementById('breakingImg');
        const breakingNews_title = document.querySelector('#breakingNews .title');
        const breakingNews_desc = document.querySelector('#breakingNews .description');

        breakingImg.innerHTML = `<img src="${data[0].image}" alt="image">`;
        breakingNews_title.innerHTML = `<a href="${data[0].url}" target="_blank"><h2>${data[0].title}</h2></a>`;
        breakingNews_desc.innerHTML = `${data[0].description}`;
    };

    fetchData('general', 5).then(add_breakingNews);

    const add_topNews = (data) => {
        const topNews = document.querySelector('.topNews');

        let html = '';
        data.forEach((element) => {
            const title = element.title.length < 100 ? element.title : element.title.slice(0, 100) + "...";
            html += `
          <div class="news">
            <div class="img">
              <img src="${element.image}" alt="image">
            </div>
            <div class="text">
              <div class="title">
                <a href="${element.url}" target="_blank"><p>${title}</p></a>
              </div>
            </div>
          </div>
        `;
        });
        topNews.innerHTML = html;
    };

    fetchData('general', 20).then(add_topNews);

    const add_news = (category, containerId) => {
        fetchData(category, 5).then((data) => {
            const newsBox = document.querySelector(`#${containerId} .newsBox`);

            let html = '';
            data.forEach((element) => {
                const title = element.title.length < 100 ? element.title : element.title.slice(0, 100) + "...";
                html += `
            <div class="newsCard">
              <div class="img">
                <img src="${element.image}" alt="image">
              </div>
              <div class="text">
                <div class="title">
                  <a href="${element.url}" target="_blank"><p>${title}</p></a>
                </div>
              </div>
            </div>
          `;
            });
            newsBox.innerHTML = html;
        });
    };

    add_news('sports', 'sportsNews');
    add_news('business', 'businessNews');
    add_news('technology', 'techNews');
    add_news('entertainment', 'entertainmentnews');
});
