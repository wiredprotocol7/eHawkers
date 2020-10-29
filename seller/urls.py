from django.urls import path, include
from django.contrib.auth import views as auth_views
from seller.views import profile, register, myshop

urlpatterns = [
    path('profile', profile, name='profile'),
    path('register', register, name='register'),
    path('myshop',myshop,name='myshop'),
]
