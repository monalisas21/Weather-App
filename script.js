let button=document.querySelector('.button');
let inputValue=document.querySelector('.citySearch');
let temp=document.querySelector('.temp');
let humidity=document.querySelector('.humidity');
let desc=document.querySelector('.desc');

button.addEventListener('click',function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=29297bbc20d5616608d930b49b3fda39`)

    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('Wrong City name')); 

    
})


const apikey="29297bbc20d5616608d930b49b3fda39";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();

    console.log(data);

    



}

checkWeather();


const displayData=(weather)=>{

    temp.innerText=`${weather.main.temp}°C`
    humidity.innerText=`Humidity:${weather.main.humidity}%`
    desc.innerText=`${weather.weather[0].main}`

    if(weather.weather[0].main=='Clouds'){ 
        document.body.style.backgroundImage="url('cloudy.avif')"; 
    } 
    else if(weather.weather[0].main=='Clear'){ 
        document.body.style.backgroundImage="url('sunny.webp')";
    } 
    else if(weather.weather[0].main=='Rain'){ 
        document.body.style.backgroundImage="url('rainy.jpeg')"; 
    }
    else if(weather.weather[0].main=='Thunderstorm'){ 
        document.body.style.backgroundImage="url('thunderstorm.webpp')"; 
    } 
    else if(weather.weather[0].main=='Snow'){ 
        document.body.style.backgroundImage="url('snow.jpeg')"; 
    } 
    else if(weather.weather[0].main=='Mist'){
         document.body.style.backgroundImage="url('mist.jpeg')"; 
        }
     else{
             document.body.style.backgroundImage="url('new cloud 2.avif')";
             }


    

}