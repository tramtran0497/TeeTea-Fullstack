# TEETEA Restaurant Full-stack Project

## To Do Tasks
### API
1. Installing `multer` and `sharp` npm to upload images, avatar for User. `DONE` 
2. Connect MongoDB CLoud  to place data. `DONE`
3. Adding features: sort, filter and setup limit, skip,.. data Product. 
4. Adding sending email feature when sign up/ delete/ make an order/ confirm emails by `SendGrid` service. `DONE`
5. Creating Admin authenticate middleware. `DONE`
6. Creating Jest test for all method get/post/put/delete and running test.
7. Connect `Cloudinary` to store images, using for Products, Events, News, Jobs and so on. `DONE`
8. Typing data.
9. Separating controllers nad routers to easily handle when problems.


### Client: food-ordering
Current:
- Using fake data (hard code).
- Separate and have not connected yet with API (because API is being designed and created).
- Lack of several content pages.
- Forms should be refactored and can communicate with API.

#### Having no account
1. Designing and creating content for `Delivery Policy and Services`. `DONE`
2. Application job form is sent directly the TeeTea email and response confirm email through `Emailjs`.
3. Fetching data method get all products/ news/ events/ jobs from API. 
4. Setup saving list cart, theme at local storage. 
5. Redesign `Sign up` page.
6. Adding background image when have no items in cart on `Cart` page.
7. when clicking each 3 buttons status order, it's background color is black and showing the status order on side.
8. Hiding/ disappearance User sidebar when clicking others.
9. At each product page, using redux to add cart after fill a form order each product. `DONE`

#### Have an account
1. Connecting Login/ Logout/ Sign up with API method post create user/ logout/ login.
2. Customer contact form is sent directly to `Emailjs` and confirm email is sent back to customer by `SendGrid`(Asking signup/ login before creating a form).
3. Designing and creating content for `Profile` Page, and then connect between API and client.
4. Designing and make content for `Order` page, a form create an order - method post API (Asking signup/ login before creating a form). Designing and make content for detail each order.
5. Fetching all orders to show history order.
6. Creating sending email to change password when customer forgets their password.
7. 