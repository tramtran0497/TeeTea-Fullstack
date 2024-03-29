# TEETEA Restaurant Full-stack Project

## To Do Tasks
### API
1. ~~Installing `multer` and `sharp` npm to upload images, avatar for User.~~ `DONE` 
2. ~~Connect MongoDB CLoud  to place data.~~ `DONE`
3. Adding features: sort, filter and setup limit, skip,.. data Product. 
4. ~~Adding sending email feature when sign up/ delete/ make an order/ confirm emails by `SendGrid` service.~~`DONE`
5. ~~Creating Admin authenticate middleware.~~ `DONE`
6. ~~Creating Jest test for all method get/post/put/delete and running test.~~ `DONE`
7. ~~Connect `Cloudinary` to store images, using for Products, Events, News, Jobs and so on.~~ `DONE`
8. Typing data.
9. Separating controllers nad routers to easily handle when problems.


### Client: food-ordering
Current:
- Using fake data (hard code).
- Separate and have not connected yet with API (because API is being designed and created).
- Lack of several content pages.
- Forms should be refactored and can communicate with API.

#### Having no account
1. ~~Designing and creating content for `Delivery Policy and Services`.~~ `DONE`
2. ~~Application job form is sent directly the TeeTea email and customer service contact through `Emailjs`.~~ `DONE`
3. ~~Fetching data method get all products/ news/ events/ jobs from API. (fetch successfully however data is still empty)~~ `DONE`
4. Setup saving list cart, theme at local storage. (Update later)
5. Redesign `Sign up` page. (Update later)
6. ~~Redesign when have no items in cart on `Cart` page.~~ `DONE`
7. when clicking each 3 buttons status order, it's background color is black and showing the status order on side.
8. ~~At each product page, using redux to add cart after fill a form order each product.~~ `DONE`

#### Have an account (Update later)
1. Connecting Login/ Logout/ Sign up with API method post create user/ logout/ login. (I will do these features as separate parts)
2. ~~Customer contact form is sent directly to `Emailjs` and confirm email is sent back to customer by `SendGrid`(Asking signup/ login before creating a form).~~ `DONE`
3. Designing and creating content for `Profile` Page, and then connect between API and client. (I will do this feature later, after Login/Logout and register)
4. Designing and make content for `Order` page, a form create an order - method post API (Asking signup/ login before creating a form). Designing and make content for detail each order.
5. ~~Fetching all orders to show history order.~~ `DONE`
6. Creating sending email to change password when customer forgets their password.

# Deploy API to Heroku

We cannot deploy the entire repo, we need to use the subtree to push to heroku repo. Article: https://janessagarrow.com/blog/how-to-deploy-a-subdirectory-to-heroku/
``` bash
git subtree push --prefix api heroku master
```

Public fetch data:
- Read information of all products/ specific product
Demo API: https://teetea-api.herokuapp.com/products
- Read information of all events/ specific event
Demo API: https://teetea-api.herokuapp.com/events
- Read information of all news/ specific news
Demo API: https://teetea-api.herokuapp.com/news
- Read information of all jobs/ specific job
Demo API https://teetea-api.herokuapp.com/jobs

# Deploy Client UI to Netlify 

The below deployed application using fake data to run this app, the new version will be shown soon.
Demo App: https://cosmic-biscochitos-6214d8.netlify.app/

