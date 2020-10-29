from django.urls import path, include
from django.contrib.auth import views as auth_views
from customer.views import welcome,signup
urlpatterns = [
path('welcome', welcome, name='welcome'),
    path('signup',signup, name='signup'),
]