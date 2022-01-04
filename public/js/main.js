const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const today = document.getElementById('day');
const date =document.getElementById('today_date');

const getinfo = async (event) => {
    // alert("hii")
    event.preventDefault();
    var element = document.getElementById("myDiv");
    element.classList.remove("data_hide");
    let cityval = cityname.value;

    if (cityval == "") {
        // alert("city not specified")
        city_name.innerHTML = "pls specify city"

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f00d1f8ba7c2065ff68c903e47207013&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const icon = data.weather[0].icon;
            const imageurl = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
            // console.log(imageurl);
            document.getElementById('icon').src = imageurl;
            document.getElementById('value').innerHTML = data.main.temp;
            city_name.innerHTML = cityval;
        } catch {
            city_name.innerHTML = "pls enter right city"
        }
        document.getElementById('cityname').value="";
    }
}

const setWeek = () => {
    var weekday = new Array(7);
    weekday[0] = 'SUNDAY';
    weekday[1] = 'MONDAY';
    weekday[2] = 'TUESDAY';
    weekday[3] = 'WEDNUSDAY';
    weekday[4] = 'THURSDAY';
    weekday[5] = 'FRIDAY';
    weekday[6] = 'SATURDAY';

    let currentTime = new Date();
    let day = (weekday[currentTime.getDay()]);
    today.innerHTML = day;
}

const setDate = () => {
    var mahina = new Array(12);
    mahina[0] = "JAN";
    mahina[1] = "FEB";
    mahina[2] = "MARCH";
    mahina[3] = "APRIL";
    mahina[4] = "MAY";
    mahina[5] = "JUNE";
    mahina[6] = "JULY";
    mahina[7] = "AUG";
    mahina[8] = "SEP";
    mahina[9] = "OCT";
    mahina[10] = "NOV";
    mahina[11] = "DEC";
    var now = new Date();
    var month = mahina[now.getMonth()];
    var day = now.getDate();
    date.innerHTML = day +" "+ month
}

submitbtn.addEventListener('click', getinfo);
setWeek();
setDate()