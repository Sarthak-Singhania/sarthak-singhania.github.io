let category = "top";

function clicker(headingText) {
    document.querySelectorAll("aside > a").forEach(function(el)
    {
        el.classList.remove("selected");
    });

    document.querySelector(`aside > a.${headingText.toLowerCase()}`).classList.add("selected")

    let heading = document.querySelector('#newsList > h2');
    heading.innerText = headingText + ' Photos';
    category = headingText.toLowerCase();
    fetcher();
}

async function getWeather()
{
    const iconElement = document.querySelector("#weatherIcon");
    const tempElement = document.querySelector("#temperature-value p");
    const descElement = document.querySelector("#weather-description p");
    const weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?id=1273294&appid=a2d66cdf165023cb5dd9f90d8f18a54e`);
    const weather_resp=await weather.json();
    const temp=Math.floor(weather_resp.main.temp-273.15);
    const description_weather=weather_resp.weather[0].main;
    const weather_icon=weather_resp.weather[0].icon;
    iconElement.innerHTML = `<img src="icons/${weather_icon}.png"/>`;
    descElement.innerHTML = description_weather;
    tempElement.innerHTML = `${temp}°<span>C</span>`;
    console.log(weather_resp);
}

getWeather()
async function fetcher()
{
    document.querySelector("#imageList").innerHTML = "";

    const resp = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${category}&client_id=algpuhSHqEqgZxXRQxk7XfTaQLrUJDebVj7nO-8fR40`);
    const resp_ids = await resp.json();
    const ids = resp_ids.results
    for(let i = 0 ; i < 20 ; i++)
    {
        const resp=ids[i];
        let description;
        if(resp.alt_description==null) 
        {
            description="Nothing to describe";
        }
        else
        {
            description=resp.alt_description
        }
        const inserter = 
        `<div><p style="font-size: 0.8rem">${i+1}) ${description}</p></div>` + 
        `<div><img src="${resp.urls.full}" width="200" style="margin: 1rem; border-radius: 5px;"></img></div>`;

        document.querySelector("#imageList").insertAdjacentHTML("beforeend", inserter);
    }
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
