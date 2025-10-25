const GridBackground = () => (
  <div className="absolute inset-0 opacity-50 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  </div>
);
export default GridBackground;
