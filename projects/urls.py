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
	url(r'^weather$', views.weather, name='weather'),
	url(r'^markdown-previewer$', views.markdown, name='markdown'),
	url(r'^recipe-list$', views.recipe, name='recipe'),
	url(r'^game-of-life$', views.game_of_life, name='game_of_life'),
	url(r'^twisted-groves$', views.twisted_groves, name='twisted_groves'),
	url(r'^zip-finder$', views.zip_finder, name='zip_finder')
]