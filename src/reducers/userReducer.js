import { Utilities } from '../components';

const initialState = {
  detail: {
    error: null,
    loading: false,
    user: {}
  },
  users: {
    error: null,
    list: [],
    loading: false
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER': {
      const user = state.users.list.filter(user => (user.id === Number(action.payload)))[0];
      if (user) {
        return {
          ...state,
          detail: {
            ...state.detail,
            error: null,
            user
          }
        }
      }

      return {
        ...state,
        detail: {
          ...state.detail,
          error: 'User with this ID is not found'
        }
      }
    }

    case 'FETCH_USER_REJECTED': {
      return {
        ...state,
        detail: {
          ...state.detail,
          error: action.payload,
          loading: false
        }
      }
    }

    case 'FETCH_USER_FULFILLED': {
      return {
        ...state,
        detail: {
          ...state.detail,
          error: null,
          loading: false,
          user: action.payload
        }
      }
    }

    case 'FETCH_USERS': {
      return {
        ...state,
        users: {
          ...state.users,
          loading: true
        }
      }
    }

    case 'FETCH_USERS_REJECTED': {
      return {
        ...state,
        users: {
          ...state.users,
          error: action.payload,
          loading: false
        }
      }
    }

    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        users: {
          ...state.users,
          error: null,
          list: Utilities.sortArrayByAttribute(action.payload, 'lastName'),
          loading: false
        }
      }
    }

    case 'ADD_USER': {
      const d = new Date();
      const newUser = {
        ...action.payload,
        id: d.getTime()
      };

      let list = [...state.users.list, newUser];
      list = Utilities.sortArrayByAttribute(list, 'lastName');

      return {
        ...state,
        add: {
          user: {
            firstName: '',
            lastName: ''
          }
        },
        users: {
          ...state.users,
          list
        }
      }
    }

    case 'UPDATE_USER': {
      let list = state.users.list.map(user => {
        if (user.id === action.payload.id) {
          return action.payload;
        }

        return user;
      });
      list = Utilities.sortArrayByAttribute(list, 'lastName');

      return {
        ...state,
        users: {
          ...state.users,
          list
        }
      }
    }

    default:
      return state;
  }
}
