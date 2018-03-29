const nodemailer=require('nodemailer');

nodemailer.createTestAccount((err,account) => {
    let transporter=nodemailer.createTransport(
        {
            host:'smtp.gmail.com',
            service:'gmail',
            auth:{
                user:'your email',
                pass:'password'
            }
        });
    let mailOptions={
        from:'Name <your email>',
        to:'whom you want to send',
        subject:'Change Password!',
        text: 'Click on the link below to change password',
        html:`HTML you want to add <p>HEY!!</p>`
    };
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error);
        }
        console.log("Sent! "+info.messageId);
    })
}