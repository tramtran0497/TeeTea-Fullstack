const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const confirmNewOrder = (orderId, name) => {
    sgMail.send({
        to: email,
        from: 'tramtran0497@gmail.com', 
        subject: `Your order ${orderId} is successfully created.`,
        text: `Hi, ${name}. Thanks for you choice, TeeTea's kitchen received your order! We're preparing and cooking your meal.`,
    })
}

module.exports = confirmNewOrder
