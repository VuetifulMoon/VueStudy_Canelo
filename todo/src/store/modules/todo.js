export default {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: "Buy a Car", checked: false, deleted: false },
      { id: 2, text: "Buy a Game", checked: false, deleted: false },
    ],
    searchTodos: [],
    searchKeywords: false,
    deleteId: [],
    filteredTodo: [],
  },

  //데이터를 바꿔주는 역할(반드시 여기서만 변경)
  mutations: {
    ADD_TODO(state, value) {
      if (value) {
        state.todos.push({
          id: state.todos[state.todos.length - 1].id + 1,
          text: value,
          checked: false,
          deleted: false,
        });
      }
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state) {
      state.todos = state.todos.filter((todo) => {
        return todo.deleted === false;
      });
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
    DELETE_TODOS(state, { id, deleted }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].deleted = deleted;
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
      if (state.searchKeywords && !state.todos.checked) {
        return state.searchTodos;
      } else {
        return state.todos.filter((todo) => todo.checked == false);
      }
    },
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.checked == true);
    },
  },
};
