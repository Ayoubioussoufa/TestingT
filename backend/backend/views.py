from django.http import JsonResponse

def get_data(request):
    data = {
        'message': 'Hello from Django!',
        'content': 'This is some data from the backend.'
    }
    return JsonResponse(data)
