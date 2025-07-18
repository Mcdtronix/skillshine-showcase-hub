from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SkillViewSet, ProjectViewSet, AboutViewSet, ContactMessageViewSet,
    ResumeViewSet, SocialLinkViewSet, SiteSettingsViewSet
)

router = DefaultRouter()
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'about', AboutViewSet, basename='about')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'resumes', ResumeViewSet, basename='resume')
router.register(r'social-links', SocialLinkViewSet, basename='sociallink')
router.register(r'site-settings', SiteSettingsViewSet, basename='sitesettings')

urlpatterns = [
    path('', include(router.urls)),
]