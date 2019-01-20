<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex xs12 :md4="id" :md6="!id" v-if="!id || this.$vuetify.breakpoint.mdAndUp">
        <list-bind />
      </v-flex>
      <v-flex xs12 md8 v-if="id">
        <edit-bind
          v-if="edit"
        />
        <view-bind v-else />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import editBind from './components/edit-bind.vue';
import listBind from './components/list-bind.vue';
import viewBind from './components/view-bind.vue';

export default {
  components: {
    editBind,
    listBind,
    viewBind,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('users', { hasPerm: 'hasPerm', currentUser: 'current' }),
    ...mapGetters('groups', { currentGroup: 'current' }),
    id() { return this.$route.params.bindId; },
    writePerm() { return this.hasPerm(`${this.currentGroup._id}.binder.write`); },
    edit() { return this.writePerm && (typeof this.$route.query.edit !== 'undefined' || this.id === 'new'); },
  },
  methods: {
    ...mapMutations('binders', ['setCurrent']),
  },
  watch: {
    id(v) { this.setCurrent(v); },
  },
};
</script>
