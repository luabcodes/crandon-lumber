import "./Products.css";

function Products() {
  return (
    <section
      id="products"
      className="section"
      style={{ background: "#0b140e", color: "#ffffff" }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "64px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Wood Species We Offer
      </h2>

      <div className="products-grid">
        {/* Caribbean Pine */}
        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/caribbean-pine.jpg"
              alt="Caribbean Pine Lumber"
            />
          </div>
          <h3>Caribbean Pine</h3>
          <p>
            Caribbean Pine is a durable softwood widely used in structural
            construction. It offers good strength, easy workability, and is
            commonly pressure-treated for outdoor and load-bearing applications.
          </p>
        </div>

        {/* Douglas Fir */}
        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/douglas-fir.jpg"
              alt="Douglas Fir Lumber"
            />
          </div>
          <h3>Douglas Fir</h3>
          <p>
            Douglas Fir is known for its exceptional strength-to-weight ratio.
            It is a preferred choice for beams, framing, and structural projects
            requiring high load capacity and dimensional stability.
          </p>
        </div>

        {/* Guanacaste */}
        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/guanacaste.jpg"
              alt="Guanacaste Wood"
            />
          </div>
          <h3>Guanacaste</h3>
          <p>
            Guanacaste is a premium hardwood valued for its rich grain patterns
            and natural resistance to moisture. Ideal for furniture, slabs,
            and high-end architectural applications.
          </p>
        </div>

        {/* Red Oak */}
        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/red-oak.jpg"
              alt="Red Oak Lumber"
            />
          </div>
          <h3>Red Oak</h3>
          <p>
            Red Oak is a popular hardwood offering excellent strength and
            attractive grain. Commonly used for flooring, cabinetry,
            millwork, and interior architectural finishes.
          </p>
        </div>

        {/* Poplar */}
        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/poplar.jpg"
              alt="Poplar Wood"
            />
          </div>
          <h3>Poplar</h3>
          <p>
            Poplar is a lightweight and versatile hardwood with smooth texture.
            It is easy to machine and finish, making it ideal for interior
            trim, painted applications, and furniture components.
          </p>
        </div>

        {/* White Oak */}
        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/white-oak.jpg"
              alt="White Oak Lumber"
            />
          </div>
          <h3>White Oak</h3>
          <p>
            White Oak is a highly durable hardwood with superior moisture
            resistance. Widely used in flooring, barrels, exterior joinery,
            and premium construction projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Products;
