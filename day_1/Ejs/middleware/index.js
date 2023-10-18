const checkAuth = (req, res, next) => {
  const { authenticated } = req.cookies;
  console.log(authenticated);
  if (authenticated) {
    next();
  } else {
    res.redirect("/login");
  }
};

const checkSessionAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = { checkAuth, checkSessionAuth };
 