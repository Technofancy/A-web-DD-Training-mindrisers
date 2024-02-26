const fetchProducts = () => {
    console.log("Lists of products");
}

//Default export : can be renamed @ import
module.export = fetchProducts;

const fetchStore = () => {
    console.log("Products in store.");
}

//Named export : object export
module.export = {
    products: fetchProducts,
    store: fetchStore,
};
