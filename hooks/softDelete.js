module.exports = async function (ctx) {
  if (!ctx.params.where) ctx.params.where = {};
  ctx.params.where.isDeleted = false;
}
