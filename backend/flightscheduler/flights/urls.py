from django.urls import include, path
from django.conf.urls import url
from . import views
from rest_framework import routers

# router = routers.DefaultRouter()

# router.register(r'users',views.UserViewSet)

urlpatterns = [
    url(r'^$', views.flight_list),
    url(r'^(?P<pk>[0-9]+)$', views.flight_detail)

]