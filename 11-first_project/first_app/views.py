from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    my_dict = {'insert_me':"Hello I am from views.py !"}
    return render(request, 'first_app/index.html', context=my_dict)
