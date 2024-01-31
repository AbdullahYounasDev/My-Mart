// Assuming Product is an array of objects
import Product from "../Products/Product";

const ProdForCustomer = Product.map((product) => ({
  ...product,
  wishList: false, // Adding the wishlist property to each product
}));

export default ProdForCustomer;
