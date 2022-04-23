let d = new Date;
mo = d.getMonth();
da = d.getDate();
console.log(da);

const month = document.querySelector('#js_month');
const day = document.querySelector('#js_day');
month.textContent = mo+1;
day.textContent = da
