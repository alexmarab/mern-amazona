# MERN AMAZONA

# Steps

1. Install tools
2. Create React App
3. Create Git Repository
4. List Products
   1. Create products array
   2. Add product images
   3. Render products
   4. Style products
5. Add page routing
   1. Install React Router v6  
      npm i react-router-dom
   2. Create Route for Home Screen
   3. Create Router for Product Screen
6. Fetch Products from Backend
   1. Set Proxy in package.json  
      "proxy": url_to_backend_server
   2. Install Axios  
      npm i axios
   3. Use State Hook
   4. Use Effect Hook
   5. Use Reducer Hook
7. Manage State By Reducer Hook
   1. Define reducer
   2. Update fetch data
   3. Get state from useReducer
8. Add Bootstrap UI Framework
   1. Install  
      npm i react-bootstrap bootstrap
   2. Update App.jsx
9. Create Product Component
   1. Create rating component
   2. Create product component
   3. Use rating in product component
10. Create Product Deatil Screen
    1. Fetch products from backend
    2. Create 3 columns for image, info and
11. Create Loading Component and Message Component
    1. Create loading component
    2. Use spinner component
    3. Create message component
    4. Create utils.js to define getError function
12. Create React Context for Add Item to Cart
    1. Create React Context
    2. Define Reducer
    3. Create Store Provider
    4. Implement add to cart button click handler
13. Complete Add to cart
    1. Check exist item in the cart
    2. Check count in stock in backend
14. Create Cart Screen
    1. Create 2 columns
    2. Display items list
    3. Create action column
15. Complete Cart Screen
    1. Click handler for inc/dec item
    2. Click handler for remove item
    3. Click handler for checkout
16. Create SignIn Screen
    1. Create sign in form
17. Complete Signin Screen
    1. Handle submit action
    2. Save token in store and local storage
    3. Show user name in Header
18. Create Shipping Screen
    1. Create form inputs
    2. Handle save shipping address
    3. Add checkout wizard bar
19. Create Sign Up Screen
    1. Create form inputs
    2. Handle submit
20. Create Payment Method Screen
    1. Create input form
    2. Implement select payment method
    3. Handle submit
