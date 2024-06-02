from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_to_training),
    path('picture-training/', views.login_to_training),
    path('fetch-picture/', views.load_next_base_picture),
]
