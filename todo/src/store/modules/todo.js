export default {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: "Buy a Car", checked: false },
      { id: 2, text: "Buy a Game", checked: false },
    ],
  },

  //데이터를 바꿔줌
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === todoId;
      });
      state.todos.splice(index, 1);
    },
    EDIT_TODO(state, { text, id }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].text = text;
      // state.todos[index].id = id;
    },
  },

  //methods
  actions: {
    addTodo({ commit }, value) {
      setTimeout(function () {
        commit("ADD_TODO", value);
      }, 500);
    },
    toggleTodo({ commit }, payload) {
      setTimeout(function () {
        commit("TOGGLE_TODO", payload);
      }, 500);
    },
    deleteTodo({ commit }, todoId) {
      setTimeout(function () {
        commit("DELETE_TODO", todoId);
      }, 500);
    },

    eidtTodo({ commit }, payload) {
      setTimeout(function () {
        commit("EDIT_TODO", payload);
      }, 500);
    },
  },

  //Computed와 같음
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.checked).length;
    },
  },
};
