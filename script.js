const apiKey="YOUR_OPENWEATHERMAP_API_KEY";
async function getWeather(){
const city=document.getElementById("city").value.trim();
const result=document.getElementById("result");
if(!city){result.innerHTML="<p>Enter a city.</p>";return;}
try{
const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
if(!r.ok) throw new Error();
const d=await r.json();
result.innerHTML=`<h2>${d.name}</h2>
<p>🌡️ ${d.main.temp} °C</p>
<p>💧 Humidity: ${d.main.humidity}%</p>
<p>💨 Wind: ${d.wind.speed} m/s</p>
<p>☁️ ${d.weather[0].description}</p>
<img src="https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png">`;
}catch(e){result.innerHTML="<p>City not found.</p>";}}