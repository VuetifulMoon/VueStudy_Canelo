export default {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: "Buy a Car", checked: false },
      { id: 2, text: "Buy a Game", checked: false },
    ],
    searchTodos: [],
    searchKeywords: false,
  },

  //데이터를 바꿔줌
  mutations: {
    ADD_TODO(state, value) {
      if (value) {
        state.todos.push({
          id: Math.random(),
          text: value,
          checked: false,
        });
      }
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
    SEARCH_TODO(state, keyword) {
      if (keyword) {
        const search = keyword.toLowerCase();
        const result = state.todos.filter((todo) =>
          todo.text.toLowerCase().includes(search)
        );
        state.searchKeywords = true;
        state.searchTodos = result;
      } else {
        state.searchTodos = state.todos;
        state.searchKeywords = false;
      }
      console.log(state.searchKeywords);
    },
  },

  //methods
  actions: {
    addTodo({ commit }, value) {
      commit("ADD_TODO", value);
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

    editTodo({ commit }, payload) {
      setTimeout(function () {
        commit("EDIT_TODO", payload);
      }, 500);
    },
    searchTodo({ commit }, keyword) {
      commit("SEARCH_TODO", keyword);
    },
  },

  //Computed와 같음
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.checked).length;
    },
    searchTodos: (state) => {
      if (state.searchKeywords == true) {
        return state.searchTodos;
      } else {
        return state.todos;
      }
    },
  },
};
