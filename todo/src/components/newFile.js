/* __placeholder__ */
export default (await import("vue")).defineComponent({
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    numberOfCompletedTodo() {
      return this.$store.getters["todo/numberOfCompletedTodo"];
    },
  },
  methods: {
    toogleCheckBox(e) {
      this.$store.dispatch("todo/toggleTodo", {
        id: this.todo.id,
        checked: e.target.checked,
      });
      // this.$store.commit('TOGGLE_TODO',{id:this.todo.id,
      // checked:e.target.checked})
      // this.$emit('toggle-checkbox',{
      //   id:this.todo.id,
      //   checked:e.target.checked
      // })
    },
    clickDelete() {
      this.$store.dispatch("todo/deleteTodo", this.todo.id);
      // this.$store.commit('DELETE_TODO',this.todo.id);
      // this.$emit('click-delete',this.todo.id)
    },
    clickEdit() {
      this.$store.dispatch("todo/editTodo", { text, checked });
    },
    todoEdit() {},
  },
});
