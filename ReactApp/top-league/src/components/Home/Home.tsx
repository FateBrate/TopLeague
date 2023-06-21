function Home(): any {
  const user = localStorage.getItem("user");
  return <h5>Hello {user}</h5>;
}

export default Home;
