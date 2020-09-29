const adminGate = (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      const newErr = new Error('Unauthorized API Request')
      newErr.status = 403
      throw newErr
    }
  } catch (e) {
    next(e)
  }
}
module.exports = {adminGate}
