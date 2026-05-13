// Footer.jsx

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "50px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#2755d4",
    color: "#7b96ec",
  },
};

export default Footer;