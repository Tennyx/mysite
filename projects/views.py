from django.shortcuts import render

def project_list(request):

	projects = {
		'calc': {
			'title': 'Calculator',
			'summary': 'Simple calculator built with jQuery.',
			'url': '/projects/calculator',
			'image': '#'
		},
		'timer': {
			'title': 'Timer',
			'summary': 'Simple timer built with jQuery.',
			'url': '/projects/timer',
			'image': '#'
		}
	}

	return render(request, 'projects/project_list.html', {'projects': projects})

def calc(request):
	return render(request, 'projects/calculator.html')

def timer(request):
	return render(request, 'projects/timer.html')