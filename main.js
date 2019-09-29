fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dc0f950528eb56f064dc772c452e4e92")
    .then(function (resp) { return resp.json() })
    // функция получит результат ответа футч и преобразует его в строку json  формат ( преобразеут в массив )
    // Convert data to json
    // буудет выполенно когда fetch отработает 
    // fetch асинхронин 
    .then(function (data) {
        console.log(data);
        document.querySelector(".package-name").textContent = data.name;
        document.querySelector(".price").textContent = Math.round(data.main.temp - 273) + "&deg;";
        document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
         document.querySelector(".features li").innerHTML = `<img src="'https://openweathermap.org/img/wn/10d@2x.png'${data.weather[0]['icon']}+ '@2x.png">`;

    })
//https://openweathermap.org/img/wn/10d@2x.png
    // этот then  выполниться после предыдущей функции и он получит обработанные даннные 
    .catch(function () {
        // catch any errors
    });