import '../../assets/css/Home.css';
var Home = () => {
  var styling = {
    fontSize: "30px",
    textDecoration: "underline",
    color: "blue",
  };
  return (
    <div>
      <h1 style={styling} id="idSEg">Welcome to my home page</h1>
      <p className = "box-model">Hello</p>
    </div>
  );
};
export default Home;