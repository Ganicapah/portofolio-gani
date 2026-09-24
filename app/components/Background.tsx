export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
      style={{
        backgroundImage:
          "radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0))",
        backgroundSize: "100px 200px",
      }}
    ></div>
  );
}
