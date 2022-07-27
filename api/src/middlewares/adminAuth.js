const adminAuth = (req, res, next) => {
  if (!req.user.isAdmin)
    return res
      .status(403)
      .send("You're not allowed access this function, have no permission!");
  next();
};

module.exports = adminAuth;
