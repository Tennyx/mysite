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
		}
	}

	return render(request, 'projects/project_list.html', {'projects': projects})

def calc(request):
	return render(request, 'projects/calculator.html')

def timer(request):
	return render(request, 'projects/timer.html')

def siamonds(request):
	return render(request, 'projects/siamonds.html')