from django.urls import path
from appTwo import views

app_name = "first_app"
urlpatterns = [
    path("", views.users, name='users'),
]