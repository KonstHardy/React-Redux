function saveToLocalStorage(postsArray) {
  localStorage.setItem("savedPosts", JSON.stringify(postsArray));
}

export default saveToLocalStorage;
