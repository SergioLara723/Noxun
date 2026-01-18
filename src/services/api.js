const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  return await response.json();
};

export const getComments = async (postId) => {
  const response = await fetch(`${BASE_URL}/comments?postId=${postId}`);
  return await response.json();
};