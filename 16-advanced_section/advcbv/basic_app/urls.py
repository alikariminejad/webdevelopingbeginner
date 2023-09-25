from django.urls import path, re_path, include
from basic_app import views

app_name = 'basic_app'

urlpatterns = [
    re_path(r'^$',views.SchoolDetailView.as_view(),name='list'),
    path('school/<int:pk>/', views.SchoolDetailView.as_view(), name='school-detail'),
]