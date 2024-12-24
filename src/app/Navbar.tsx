import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg- shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold">Movie Z</h1>

        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-4 py-2 w-80"
        />

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
