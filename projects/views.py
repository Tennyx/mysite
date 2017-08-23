from django.shortcuts import render

def project_list(request):
	return render(request, 'projects/project_list.html')

def calc(request):
	return render(request, 'projects/calculator.html')