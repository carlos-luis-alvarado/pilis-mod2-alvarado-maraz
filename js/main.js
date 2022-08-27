

const climate = document.querySelector('.climate')
let dia = 1
function ponerClima({ dt_txt, main, weather }) {
  // console.log('1-'+dt_txt);
  // console.log('2-'+main.temp);
  // console.log('3-',weather);
  const div = document.createElement('div')
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const img = document.createElement('img')
  img.src = 'http://openweathermap.org/img/wn/' + weather[0].icon + '@2x.png'
  p.textContent = 'Dia : ' + dia
  dia++
  p2.textContent = `Temperatura ${main.temp} °C`
  div.appendChild(p)
  div.appendChild(p2)
  div.appendChild(img)
  climate.appendChild(div)
  div.classList.add('climate__card')



}
async function obtenerClima(lat, lon, key) {
  try {
      
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
      let resp = await response.json()

      let contador = 0;
      while (contador <= 32) {


          ponerClima(resp.list[contador])
          contador = contador + 8;
      }

  } catch (error) {
      throw new Error(error)
  }
}
obtenerClima(-24.18314364081898, -65.33128717381898, '71042bfca42d64e948c855305b05fe18');

function onClick(event) {
  event.preventDefault();
  this.style.backgroundColor = "black";

  const mensaje = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  console.log(mensaje);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      Swal.fire("Enviado", "Gracias por tu comentario", "success");
      cleanForm();
    })
    .catch((err) => console.error(err));
}

function cleanForm() {
  let formulario = document.getElementById("formulario");
  formulario.reset();
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);
