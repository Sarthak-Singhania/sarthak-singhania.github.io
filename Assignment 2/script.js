let category = "top";

function clicker(headingText) {
    document.querySelectorAll("aside > a").forEach(function(el)
    {
        el.classList.remove("selected");
    });

    document.querySelector(`aside > a.${headingText.toLowerCase()}`).classList.add("selected")

    let heading = document.querySelector('#newsList > h2');
    heading.innerText = headingText + ' Images';
    category = headingText.toLowerCase();
    fetcher();
}

async function fetcher()
{
    document.querySelector("#topStoriesContainer").innerHTML = "";

    const resp = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${category}&client_id=algpuhSHqEqgZxXRQxk7XfTaQLrUJDebVj7nO-8fR40`);
    const ids = await resp.json();
    //JSON = JavaScript Object Notation
    //const itemsArray = [];
    console.log(ids);
    // for(let i = 0 ; i < 20 ; i++)
    // {
    //     const itemData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${items[i]}.json`);
    //     const resp = await itemData.json();
    //     itemsArray.push(resp);

    //     const inserter = 
    //     `<a class="news-item" href="${resp.url}" target="blank" data-title="${resp.title}">` +
    //         `<h3 class="news-title">${resp.title}</h3>` +
    //         `<p class="news-byline">${resp.by}</p>` +
    //         `<p class="news-time">${resp.time}</p>` +
    //         `<p class="news-score">` +
    //             `<i class="fa fa-thumbs-up"></i>${resp.score}` +
    //         `</p>` +
    //     `</a>`;

    //     console.log(inserter)

    //     document.querySelector("#topStoriesContainer").insertAdjacentHTML("beforeend", inserter);
    // }
}

function main()
{
    console.log("Hey");
}

fetcher();
main();

function tech(){
    clicker("Tech");
}

function music(){
    clicker("Music");
}

function sports(){
    clicker("Sports");
}

function nature(){
    clicker("Nature");
}

// useTimeout and useInterval
// blocking and non-blocking