from django.shortcuts import render


# Create your views here.

def profile(request):
    return render(request, 'profile.html')


def register(request):
    return render(request, 'register.html')


def myshop(request):
    return render(request, 'myshop.html')
