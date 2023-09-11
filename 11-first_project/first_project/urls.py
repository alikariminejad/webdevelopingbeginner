from django.contrib import admin
from django.urls import path, re_path, include
from first_app import views

urlpatterns = [
    re_path(r'^$', views.index, name='index'),
    re_path(r'^first_app/', include('first_app.urls', namespace='first_app')),  # Added namespace
    path('admin/', admin.site.urls),
]
