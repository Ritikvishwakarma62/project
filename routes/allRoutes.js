const routes = require("express").Router();

routes.use("/api/city",(require("../controllers/cityController")));
routes.use("/api/signup",(require("../controllers/signupController")));
routes.use("/api/auth",(require("../controllers/authController")));
routes.use("/api/user-profile",(require("../controllers/userProfileController")));
routes.use("/api/admin-auth",require("../controllers/adminAuthController"));
routes.use("/api/category", require("../controllers/categoryController"));
routes.use("/api/product", require("../controllers/productController"));
routes.use("/api/product-category", require("../controllers/productCategoryController"));
routes.use("/api/sub-category",require("../controllers/subCategoryController"));
routes.use("/api/category-subcategory",require("../controllers/categorySubCategoryController"));

module.exports = routes