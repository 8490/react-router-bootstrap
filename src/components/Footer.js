const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  marginTop: "30px",
};

const Footer = () => {
  return (
    <footer style={style} className="text-center bg-dark p-3">
      <p className="text-light">Copright 2021</p>
    </footer>
  );
};

export default Footer;
