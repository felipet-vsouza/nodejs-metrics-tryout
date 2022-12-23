const Faker = require("@faker-js/faker");
 
function generateOrderData(requestParams, ctx, ee, next) {
  ctx.vars["totalPrice"] = Faker.faker.commerce.price(50, 5000);
  return next();
}
 
module.exports = {
  generateOrderData,
};