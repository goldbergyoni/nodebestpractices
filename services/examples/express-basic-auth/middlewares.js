const middlewares = {};

middlewares.authentication = (req, res, next) => {
  const userClaims = jwt.verify(req.headers.authorization, "secret");
  console.log(
    `Authorization header ${
      req.headers.authorization
    } is and the found user is ${JSON.stringify(userClaims)}`
  );
  if (!userClaims) {
    res.status(401).end();
  } else {
    req.user = userClaims;
    next();
  }
};

middlewares.roleBasedAuthorization = (requiredRole) => {
  return (req, res, next) => {
    console.log(`Role middleware about to check whether the role ${requiredRole} is included in the user roles ${req.user.roles}`);
    if (!req.user.roles.includes(requiredRole)) {
      res.status(401).end();
    }
    next();
  };
};

middlewares.getDefaultList = ()=>{
  return [];
}

module.exports = middlewares;