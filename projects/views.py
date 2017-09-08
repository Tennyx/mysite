from django.shortcuts import render

def project_list(request):

	projects = {
		'calc': {
			'title': 'Calculator',
			'summary': 'Add, subtract, divide & more!',
			'url': '/projects/calculator',
			'langlist': ['jquery']
			# 'image': '/static/images/calc1.gif'
		},
		'timer': {
			'title': 'Timer',
			'summary': 'Countdown to extinction.',
			'url': '/projects/timer',
			'langlist': ['jquery']
			# 'image': '/static/images/timer1.gif'
		},
		'siamonds': {
			'title': 'Siamonds',
			'summary': 'Like Simon but with a terrible name.',
			'url': '/projects/siamonds',
			'langlist': ['jquery']
			# 'image': '/static/images/siamonds1.gif'
		},
		'tic-tac-toe': {
			'title': 'Tic-Tac-Toe',
			'summary': 'Play by yourself or with a friend!',
			'url': '/projects/tic-tac-toe',
			'langlist': ['jquery']
			# 'image': '/static/images/tic_tac_toe1.gif'
		},
		'weather': {
			'title': 'Weather App',
			'summary': 'Because who needs windows?',
			'url': '/projects/weather',
			'langlist': ['jquery']
			# 'image': '/static/images/weather1.gif'
		},
		'twitch-streams': {
			'title': 'Twitch Stream Status',
			'summary': 'Anyone streaming atm?',
			'url': '/projects/twitch-streams',
			'langlist': ['jquery']
			# 'image': '/static/images/twitch_streams1.gif'
		},
		'wiki-viewer': {
			'title': 'Wikipedia Viewer',
			'summary': 'Way better than going to Wikipedia.',
			'url': '/projects/wikipedia-viewer',
			'langlist': ['jquery']
			# 'image': '/static/images/wiki_viewer1.gif'
		},
		'markdown-previewer': {
			'title': 'Markdown Previewer',
			'summary': 'GitHub-flavored.',
			'url': '/projects/markdown-previewer',
			'langlist': ['reactjs']
			# 'image': '/static/images/calc1.gif'
		},
		'recipe-list': {
			'title': 'Recipe List',
			'summary': 'A pinch of HTML and a dash of JSX.',
			'url': '/projects/recipe-list',
			'langlist': ['reactjs']
			# 'image': '/static/images/calc1.gif'
		},
		'game-of-life': {
			'title': 'Game of Life',
			'summary': "Conway's Game of Life.",
			'url': '/projects/game-of-life',
			'langlist': ['reactjs']
			# 'image': '/static/images/calc1.gif'
		},
		'twisted-groves': {
			'title': 'Twisted Groves',
			'summary': 'Roguelike game - can you survive?',
			'url': '/projects/twisted-groves',
			'langlist': ['reactjs']
			# 'image': '/static/images/calc1.gif'
		},
		'zip-finder': {
			'title': 'Zip Finder',
			'summary': 'Find zip from a city with Google API',
			'url': '/projects/zip-finder',
			'langlist': ['jquery']
			# 'image': '/static/images/calc1.gif'
		},
		'quote-generator': {
			'title': 'Quote Generator',
			'summary': 'Cycle through quotes & tweet them',
			'url': '/projects/quote-generator',
			'langlist': ['jquery']
			# 'image': '/static/images/calc1.gif'
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

def quote_gen(request):
	return render(request, 'projects/quote-generator.html')