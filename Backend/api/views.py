from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Skill, Project, About, ContactMessage, Resume, SocialLink, SiteSettings
from .serializers import (
    SkillSerializer, ProjectSerializer, AboutSerializer,
    ContactMessageSerializer, ResumeSerializer, SocialLinkSerializer, SiteSettingsSerializer
)

# 1. Skills: Read-only, list all skills for the Skills section
class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all().order_by('name')
    serializer_class = SkillSerializer

# 2. Projects: Full CRUD, but typically only GET is used by frontend
class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-date', 'title')
    serializer_class = ProjectSerializer

# 3. About: Singleton, only one "About Me" entry, return the latest
class AboutViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

    def list(self, request, *args, **kwargs):
        # Return the latest About entry, or 404 if none
        about = self.get_queryset().order_by('-id').first()
        if not about:
            return Response({"detail": "About info not found."}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(about)
        return Response(serializer.data)

# 4. ContactMessage: Only allow POST (create), for contact form submissions
class ContactMessageViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        # Optionally, add custom email sending or spam protection here
        return super().create(request, *args, **kwargs)

# 5. Resume: Read-only, return the latest resume for download
class ResumeViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

    def list(self, request, *args, **kwargs):
        resume = self.get_queryset().order_by('-uploaded_at').first()
        if not resume:
            return Response({"detail": "Resume not found."}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(resume)
        return Response(serializer.data)

# 6. SocialLink: Read-only, list all social links for Navbar/Footer
class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialLink.objects.all().order_by('name')
    serializer_class = SocialLinkSerializer

# 7. SiteSettings: Singleton, only one site settings entry, return the latest
class SiteSettingsViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = SiteSettings.objects.all()
    serializer_class = SiteSettingsSerializer

    def list(self, request, *args, **kwargs):
        settings = self.get_queryset().order_by('-id').first()
        if not settings:
            return Response({"detail": "Site settings not found."}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(settings)
        return Response(serializer.data)