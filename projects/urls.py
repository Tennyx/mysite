from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.project_list, name='project_list'),
	url(r'^calculator$', views.calc, name='calculator'),
	url(r'^timer$', views.timer, name='timer')
]