
from django.contrib import admin
from django.urls import path
from api import views as apiviews
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', apiviews.index),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('about/', apiviews.PostsView.as_view(), name='about_view'),
    path('login/', apiviews.index, name='login_view')
]
