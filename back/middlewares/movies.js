module.exports = {
  setApiURL(req, res, next) {
    req.API_BASE_URL = `${process.env.OMDB_URL}/?apikey=${
      process.env.OMDB_API_KEY
    }&type=movie`;
    next();
  }
};
