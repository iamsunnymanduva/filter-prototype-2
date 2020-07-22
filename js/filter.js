/* filter logic */
const signs = [
  {
    URL: './images/Focus.gif',
    hands: 2,
    location: 'The trunk',
    name: 'Focus',
  },
  {
    URL: './images/Milk.gif',
    hands: 2,
    location: 'The whole face/head',
    name: 'Milk',
  },
  {
    URL: './images/Curly.gif',
    hands: 2,
    location: 'Temple',
    name: 'Curly',
  },
  {
    URL: './images/Globe.gif',
    hands: 2,
    location: 'The whole face/head',
    name: 'Globe',
  },
  {
    URL: './images/Learn.gif',
    hands: 1,
    location: 'Chin',
    name: 'Learn',
  },
  {
    URL: './images/Freeze.gif',
    hands: 2,
    location: 'Body',
    name: 'Freeze',
  },
  {
    URL: './images/Puff-smoke.gif',
    hands: 1,
    location: 'Chin',
    name: 'Puff-smoke',
  },
]

let selectedHand = ''
let selectedHandLocation = ''
let results = []

function addSign(sign) {
  const id = sign.name.split(' ').join('_')
  $('.results-grid').append(
    `<div class="result-box"> <div class="result-image" id="${id}"></div><div class="result-title"><p><strong>${sign.name}</strong></p></div><div class="sign-properties"><p><strong>Hands:</strong> ${sign.hands}</p><p><strong>Location:</strong> ${sign.location}</p></div></div>`
  )
  let curr = $(`#${id}`)

  curr.css('background-image', 'url(../images/' + id + '.gif')
}

function loadSigns() {
  signs.forEach((sign) => addSign(sign))
}

function updateResults(sign) {
  if (!results.includes(sign)) {
    results.push(sign)
  }
}

function handMatch(sign) {
  return sign['hands'] === selectedHand
}

function handLocationMatch(sign) {
  return sign['location'] === selectedHandLocation
}

/**
  @param {String} type
  @param {String | Number} value
*/
function filterByType(type, value) {
  // signs container
  const signsContainer = document.getElementById('signs')
  // remove all child nodes of signs container
  signsContainer.innerHTML = ''

  results = []

  // filter signs based on the type (property) and value
  if (type !== 'default') {
    if (type === 'hands') {
      selectedHand = value
    } else {
      selectedHandLocation = value
    }

    signs.forEach((sign) => {
      if (selectedHand === '' || selectedHandLocation === '') {
        if (handMatch(sign) || handLocationMatch(sign)) {
          updateResults(sign)
        }
      } else {
        if (handMatch(sign) && handLocationMatch(sign)) {
          updateResults(sign)
        }
      }
    })

    console.log(results)
    console.log('hands:', selectedHand)
    console.log('location:', selectedHandLocation)
  } else {
    // when filter type is default, show all signs
    results = [...signs]
  }

  // loop through the results and create a div with an img element for each sign
  // append the above elements to signs container
  results.forEach((sign) => {
    // const divElement = document.createElement('div')
    // const imgElement = document.createElement('img')
    // const labelElement = document.createElement('p')
    // labelElement.classList.add('result-title')
    // imgElement.classList.add('result-image')
    // imgElement.src = sign.URL
    // imgElement.alt = `${sign.name.toLocaleUpperCase()} Sign Image`
    // imgElement.title = `${sign.name} Sign Image`
    // labelElement.innerText = `${sign.name}`
    // divElement.appendChild(imgElement)
    // divElement.appendChild(labelElement)
    // divElement.classList.add('result-box')
    // signsContainer.appendChild(divElement)
    addSign(sign)
  })
}
