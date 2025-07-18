from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.CharField(max_length=50, blank=True, null=True)  # e.g., Beginner, Intermediate, Expert
    icon = models.ImageField(upload_to='skills/icons/', blank=True, null=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/images/', blank=True, null=True)
    project_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    tech_stack = models.ManyToManyField(Skill, blank=True)
    date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title

class About(models.Model):
    content = models.TextField()
    profile_image = models.ImageField(upload_to='about/profile/', blank=True, null=True)

    def __str__(self):
        return "About Me"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"

class Resume(models.Model):
    file = models.FileField(upload_to='resumes/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Resume uploaded at {self.uploaded_at}"

class SocialLink(models.Model):
    name = models.CharField(max_length=100)  # e.g., LinkedIn, GitHub
    url = models.URLField()
    icon = models.ImageField(upload_to='social/icons/', blank=True, null=True)

    def __str__(self):
        return self.name

class SiteSettings(models.Model):
    site_title = models.CharField(max_length=200)
    meta_description = models.TextField(blank=True, null=True)
    logo = models.ImageField(upload_to='site/logo/', blank=True, null=True)

    def __str__(self):
        return self.site_title