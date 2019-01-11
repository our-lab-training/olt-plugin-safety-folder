import placehold from './placehold.vue';

export default {
  ref: 'binder',
  name: 'Safety Binder',
  // settingsLink: '/group/{groupId}/training/settings',
  routes: {
    binder: {
      name: 'Safety Binder',
      entry: true,
      component: placehold,
      path: '/group/{groupId}/binder',
      icon: 'fal fa-book',
      priority: 109,
      visiblePerms: [
        '{groupId}.binder.read',
      ],
    },
  },
  store: { binders: {} },
};
