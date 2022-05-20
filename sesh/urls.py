from django.urls import URLPattern, path
from django.views.generic import TemplateView

app_name= 'sesh'

urlpatterns = [
    path('', TemplateView.as_view(template_name="sesh/index.html"))
]