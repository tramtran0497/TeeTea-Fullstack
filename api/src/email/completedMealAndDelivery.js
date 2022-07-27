const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const completedMealAndDelivery = (orderId, name) => {
  sgMail.send({
    to: email,
    from: "tramtran0497@gmail.com",
    subject: `Your order ${orderId} is completed and starting delivery to your address point.`,
    text: `Hi, ${name}. Your order is ready! We're preparing delivery your order. If you use TeeTea delivery service, please check your phone next 10 minutes. We look forward to serving you again in the near future. Thank you and Wishing you have great day! `,
  });
};

module.exports = completedMealAndDelivery;
