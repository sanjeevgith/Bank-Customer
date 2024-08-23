// middlewares/roleMiddleware.js
exports.authorizeRole = (requiredRole) => {
      return (req, res, next) => {
        if (req.user.role !== requiredRole) {
          return res.status(403).json({ message: 'Access forbidden: insufficient permissions' });
        }
        next();
      };
  };
  