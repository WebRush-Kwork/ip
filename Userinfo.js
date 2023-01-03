class Userinfo {
  constructor() {
    this.timeOpened = new Date();
    this.timezone = new Date().getTimezoneOffset() / 60;
  }

  async ip() {
    /**
     *  city
     *  continentName
     *  countryCode
     *  countryName
     *  ipAddress
     *  stateProv
     */
    let res = await fetch("https://api.db-ip.com/v2/free/self");
    let data = await res.json();

    const ip = document.querySelector(".ip");
    const location = document.querySelector(".location");
    const name = document.querySelector(".name");
    ip.innerHTML = "ip адресс: " + data.ipAddress;
    location.innerHTML = "местонахождение: " + data.stateProv;
    name.innerHTML = "часть света: " + data.continentName;

    return data;
  }
}
