import { User } from '../models';
import { getToken, verifyToken } from '../utils/jwt';

const isAuth = async (req, _res, next) => {
  try {
    const token = getToken(req);
    const decoded = verifyToken(token);
    req.user = await User.findOne({ _id: decoded.id });
    next();
  } catch (err) {
    next(err);
  }
};

export {
  isAuth,
};
