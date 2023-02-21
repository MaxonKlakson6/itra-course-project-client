export const validateItemTags = (tags: string[]) => {
  if (tags.length < 1) return false;

  return tags.every((tag) => tag);
};
