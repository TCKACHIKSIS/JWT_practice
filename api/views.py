from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from . models import Posts
from . serializers import PostSerializer


def index(request):
    return render(request, 'index.html')


class PostsView(generics.RetrieveAPIView):
    queryset = Posts.objects.all()
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)