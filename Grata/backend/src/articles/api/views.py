from rest_framework.generics import ListAPIView, RetrieveAPIView
from articles.models import Article
from .serialzers import ArticleSerialize


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerialize


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerialize
