const apiKey = "7bf196187ab82a0d7ff805f72b45fbef";

const fetchData = async (category, pageSize) => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&pageSize=${pageSize}&lang=en&country=IN&apikey=${apiKey}`;
    const data = await fetch(url);
    const response = await data.json();
    return response.articles;
};

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].image} alt="image">`;
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    breakingNews_desc.innerHTML = `${data[0].description}`;
};

fetchData('general', 5).then(add_breakingNews);

const add_topNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }

        html += `<div class="news">
                <div class="img">
                    <img src=${element.image} alt="image">
                </div>
                <div class="text">
                    <div class="title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                    </div>
                </div>
            </div>`;
    });
    topNews.innerHTML = html;
};

fetchData('general', 20).then(add_topNews);

const add_sportsNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }

        html += `<div class="newsCard">
                <div class="img">
                    <img src=${element.image} alt="image">
                </div>
                <div class="text">
                    <div class="title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                    </div>
                </div>
            </div>`;
    });
    sportsNews.innerHTML = html;
};

fetchData('sports', 5).then(add_sportsNews);

const add_businessNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }

        html += `<div class="newsCard">
                <div class="img">
                    <img src=${element.image} alt="image">
                </div>
                <div class="text">
                    <div class="title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                    </div>
                </div>
            </div>`;
    });
    businessNews.innerHTML = html;
};

fetchData('business', 5).then(add_businessNews);

const add_techNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }

        html += `<div class="newsCard">
                <div class="img">
                    <img src=${element.image} alt="image">
                </div>
                <div class="text">
                    <div class="title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                    </div>
                </div>
            </div>`;
    });
    techNews.innerHTML = html;
};

fetchData('technology', 5).then(add_techNews);

const add_entertainmentNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }

        html += `<div class="newsCard">
                <div class="img">
                    <img src=${element.image} alt="image">
                </div>
                <div class="text">
                    <div class="title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                    </div>
                </div>
            </div>`;
    });
    entertainmentNews.innerHTML = html;
};

fetchData('entertainment', 5).then(add_entertainmentNews);
