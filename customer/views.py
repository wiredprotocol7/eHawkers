from django.shortcuts import render

# Create your views here.

def welcome(request):
    return render(request,'welcome.html')

def signup(request):
    return render(request,'signup.html')