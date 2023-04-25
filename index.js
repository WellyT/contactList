let add = document.querySelector(".ph-plus")
const modal = document.querySelector(".modal-wrapper")
let phone_number_input = document.getElementById("number")
let phone_name_input = document.getElementById("name")
const button = document.getElementsByTagName("button")

function newContact() {
  if (!phone_name_input.value || !phone_number_input.value) {
    return
  }
  let wrapper = document.createElement("div")
  let letter = document.createElement("div")
  let listContact = document.createElement("div")
  let contact = document.createElement("div")
  let info = document.createElement("div")
  let img = document.createElement("img")
  let p = document.createElement("p")
  let h2 = document.createElement("h2")
  wrapper.classList.add("wrapper")
  letter.classList.add("letter")
  contact.classList.add("contact")
  listContact.classList.add("list-contact")
  info.classList.add("info")
  letter.innerText = phone_name_input.value.slice(0, 1).toUpperCase()
  wrapper.appendChild(letter)
  h2.innerText = phone_name_input.value
  p.innerText = phone_number_input.value
  img.setAttribute(
    "src",
    "https://avatars.githubusercontent.com/u/47388425?v=4"
  )
  contact.appendChild(img)
  contact.appendChild(info)

  info.appendChild(h2)
  info.appendChild(p)
  listContact.appendChild(contact)
  wrapper.appendChild(listContact)

  main.appendChild(wrapper)
}

// MODAL
add.addEventListener("click", () => {
  modal.classList.add("active")
  phone_number_input.value = ""
  phone_name_input.value = ""
})
const active = document.querySelector("#backdrop")
active.addEventListener("click", (event) => {
  if (event.target === active) {
    modal.classList.remove("active")
  }
})
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("active")
  }
})

// MASK
const number_mask = {
  mask: "(00) 00000-0000",
}
var mask = IMask(phone_number_input, number_mask)
