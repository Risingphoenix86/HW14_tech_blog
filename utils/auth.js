// Middleware used to verify user login before allowing restricted route access

const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
};

module.exports = withAuth;