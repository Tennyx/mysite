from django.shortcuts import render

def project_list(request):

	projects = {
		'calc': {
			'title': 'Calculator',
			'summary': 'Simple calculator built with jQuery.',
			'url': '/projects/calculator',
			'image': '/static/images/calc1.gif'
		},
		'timer': {
			'title': 'Timer',
			'summary': 'Simple timer built with jQuery.',
			'url': '/projects/timer',
			'image': '/static/images/timer1.gif'
		},
		'siamonds': {
			'title': 'Siamonds',
			'summary': 'Simon-style game made with jQuery',
			'url': '/projects/siamonds',
			'image': '/static/images/siamonds1.gif'
		},
		'tic-tac-toe': {
			'title': 'Tic-Tac-Toe',
			'summary': 'Tic-Tac-Toe game made with jQuery',
			'url': '/projects/tic-tac-toe',
			'image': '/static/images/tic_tac_toe1.gif'
		},
		'weather': {
			'title': 'Weather App',
			'summary': 'See current weather.',
			'url': '/projects/weather',
			'image': '/static/images/weather1.gif'
		},
		'twitch-streams': {
			'title': 'Twitch Stream Status',
			'summary': 'Twitch viewer made with jQuery',
			'url': '/projects/twitch-streams',
			'image': '/static/images/twitch_streams1.gif'
		},
		'wiki-viewer': {
			'title': 'Wikipedia Viewer',
			'summary': 'Wikipedia viewer made with jQuery',
			'url': '/projects/wikipedia-viewer',
			'image': '/static/images/wiki_viewer1.gif'
		},
		'markdown-previewer': {
			'title': 'Markdown Previewer',
			'summary': 'Markdown Previewer made with Reactjs',
			'url': '/projects/markdown-previewer',
			'image': '/static/images/calc1.gif'
		},
		'recipe-list': {
			'title': 'Recipe List',
			'summary': 'Recipe List made with Reactjs',
			'url': '/projects/recipe-list',
			'image': '/static/images/calc1.gif'
		},
		'game-of-life': {
			'title': 'Game of Life',
			'summary': 'Game of Life made with Reactjs',
			'url': '/projects/game-of-life',
			'image': '/static/images/calc1.gif'
		},
		'twisted-groves': {
			'title': 'Twisted Groves',
			'summary': 'Roguelike game made with Reactjs',
			'url': '/projects/twisted-groves',
			'image': '/static/images/calc1.gif'
		},
		'zip-finder': {
			'title': 'Zip Finder',
			'summary': 'Find zip from city using Google API',
			'url': '/projects/zip-finder',
			'image': '/static/images/calc1.gif'
		}
	}

	return render(request, 'projects/project_list.html', {'projects': projects})

def calc(request):
	return render(request, 'projects/calculator.html')

def timer(request):
	return render(request, 'projects/timer.html')

def siamonds(request):
	return render(request, 'projects/siamonds.html')

def tic_tac_toe(request):
	return render(request, 'projects/tic-tac-toe.html')

def twitch_streams(request):
	return render(request, 'projects/twitch-streams.html')

def wikipedia_viewer(request):
	return render(request, 'projects/wikipedia-viewer.html')

def weather(request):
	return render(request, 'projects/weather.html')

def markdown(request):
	return render(request, 'projects/markdown-previewer.html')

def recipe(request):
	return render(request, 'projects/recipe-list.html')

def game_of_life(request):
	return render(request, 'projects/game-of-life.html')

def twisted_groves(request):
	return render(request, 'projects/twisted-groves.html')

def zip_finder(request):
	return render(request, 'projects/zip-finder.html')