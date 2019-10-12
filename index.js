function onSubmit() {
  const win = window.open("", "wnd", "width=720, height=480")
  win.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css"></head><body class="newWindow">');

  const date = new Date()
  const form = getFormData()
  const mes = date.getUTCMonth() + 1
  const god = date.getUTCFullYear()

  const age = timePassed(form.year, form.month, form.day, god, mes)

  const hour = date.getHours()
  const min = date.getMinutes()

  const hours = 24 - hour
  const mins = 60 - min

  const hundread = untilHundread(age.year, age.month, form.day, hours, mins, mes)

  win.document.body.innerHTML = `<h2> Приветствуем :) </h2>
  <p class="fio">${form.lastName} ${form.firstName} ${form.patronymic}</p>
  <br/>
  <span>Ваша дата рождения: ${form.day}/${form.month}/${form.year}</span>
  <br/>
  <span>С дня рождения прошло: ${age.year} лет ${age.month} месяцев ${age.day} дней ${hour} часов ${min} минут.</span>
  <br/>
  ${hundread}
  <br/>
  <input class="button" type='button' onclick='window.close()' value='Закрыть окно'></input>`
}

function getFormData() {
  return {
    firstName: document.form.Firstname.value,
    lastName: document.form.surname.value,
    patronymic: document.form.middlename.value,
    day: parseInt(document.form.day.value),
    month: parseInt(document.form.month.value),
    year: parseInt(document.form.year.value),
  }
}

function timePassed(year, month, day, god, mes) {
  const date = new Date()
  const years = god - year
  const months = mes - month
  const days = (getDaysInMonth(month, year) - day) + date.getDate()

  return {
    year: years,
    month: months,
    day: days,
  }
}

function untilHundread(year, month, day, hours, mins, mes) {
  const date = new Date()
  const years = 100 - year
  const months = 12 - month
  const days = getDaysInMonth(month, year) - date.getDate()
  return `<span>До празднования 100 летия осталось: ${years} лет ${months} месяцев ${days} дней ${hours} часов ${mins} минут.</span>`
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate()
}
