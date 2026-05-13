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
    marginTop: "320px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "rgb(40, 40, 46)",
    color: "#ffffff",
  },
};

export default Footer;