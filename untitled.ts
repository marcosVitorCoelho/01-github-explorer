type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string
  }
}

function showWelcomeMassage(user : User){
  return `Welcome ${user.name}, your email is ${user.email}, your city is ${user.address.city} and your state is ${user.address.state ?? 'Não definido'}`
}

const massage = showWelcomeMassage({
  name: 'Marcos',
  email: 'marcosvitorcoelho@gmail.com',
  address: {
    city: 'Teolndia',
    state: 'Bahia'
  }
})