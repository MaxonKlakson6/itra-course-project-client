export const ROUTE_NAMES = {
  MAIN: '/main',
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
  PROFILE: '/profile/:ownerId',
  COLLECTION: '/collection/:id',
  CREATE_COLLECTION: '/create-collection/:userId',
  CHANGE_COLLECTION: '/change-collection/:id',
  PROFILE_ITEMS: '/profile-items/:collectionId',
  ITEM: '/item/:collectionId/:itemId',
  CREATE_ITEM: '/create-item/:collectionId',
  CHANGE_ITEM: '/change-item/:collectionId/:itemId',
  USERS: '/users',
};

export const ROUTES_WITH_ID = {
  PROFILE: '/profile',
  COLLECTION: '/collection',
  CREATE_COLLECTION: '/create-collection',
  CHANGE_COLLECTION: '/change-collection',
  CREATE_ITEM: '/create-item',
  CHANGE_ITEM: '/change-item',
};
