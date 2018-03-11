export function fetchUser(id) {
  return {
    type: 'FETCH_USER',
    payload: id
  }
}

export function fetchUsers() {
  // return {
  //   type: 'FETCH_USERS'
  // }

  return {
    type: 'FETCH_USERS_FULFILLED',
    payload: [
      { id: 1, firstName: 'Jane', lastName: 'Doe' },
      { id: 2, firstName: 'John', lastName: 'Doe' }
    ]
  }
}

export function add(newUser) {
  return {
    type: 'ADD_USER',
    payload: newUser
  }
}

export function update(user) {
  return {
    type: 'UPDATE_USER',
    payload: user
  }
}
