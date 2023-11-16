export default async function getData(userId) {
  try {
    const userData = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
    
    const postsData = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).json();
    

    return {
      userInfo: userData,
      posts: postsData
    };
  } catch (error) {

    console.error('Veri çekme hatası:', error.message);
    return {};
  }
}
