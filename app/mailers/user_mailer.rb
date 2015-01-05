class UserMailer < ApplicationMailer
  def welcome_email
    mail(to: 'matthieu.demus@gmail.com',
         body: "test",
         content_type: "text/html",
         subject: "Already rendered!")
  end
end
