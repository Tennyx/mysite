# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views import View
from email.mime.text import MIMEText
import smtplib, os

def send_email(name, email, phone, comment):
    email_ = 'cale.switzer@gmail.com'
    pw = ''

    fromx = email_
    to  = email_
    body = 'NAME: ' + str(name) + '\nPHONE: ' + str(phone) + '\nEMAIL: ' + str(email_) + '\nCOMMENT: ' + str(comment)
    

    msg = MIMEText(body)
    
    msg['Subject'] = 'Contact Form'
    msg['From'] = fromx
    msg['To'] = to

    server = smtplib.SMTP('smtp.gmail.com:587')
    server.starttls()
    server.ehlo()
    server.login(email_, pw)
    server.sendmail(fromx, to, msg.as_string())
    server.quit()

class Contact(View):
	def get(self, request):

		context = {
			'submitted': False
		}

		return render(request, 'contact/contact.html', context)

	def post(self, request):
		name = request.POST.get('inputName')
		email = request.POST.get('inputEmail')
		phone = request.POST.get('inputPhone')
		comment = request.POST.get('inputText')
		
		send_email(name, email, phone, comment)

		context = {
			'submitted': True
		}

		return render(request, 'contact/contact.html', context)