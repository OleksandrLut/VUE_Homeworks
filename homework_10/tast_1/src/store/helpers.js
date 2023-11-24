export function generateUniqueId() {
  const date = new Date();
  const id = date.getTime().toString();
  return id;
}
