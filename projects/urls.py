from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.project_list, name='project_list'),
	url(r'^calculator$', views.calc, name='calculator'),
	url(r'^timer$', views.timer, name='timer'),
	url(r'^siamonds$', views.siamonds, name='siamonds'),
	url(r'^tic-tac-toe$', views.tic_tac_toe, name='tic_tac_toe'),
	url(r'^twitch-streams$', views.twitch_streams, name='twitch_streams'),
	url(r'^wikipedia-viewer$', views.wikipedia_viewer, name='wikipedia_viewer'),
	url(r'^weather$', views.weather, name='weather')
]