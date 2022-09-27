const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ChitChat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
