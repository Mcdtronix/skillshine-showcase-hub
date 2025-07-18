from django.contrib import admin
from django.utils.html import format_html
from .models import Skill, Project, About, ContactMessage, Resume, SocialLink, SiteSettings

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'proficiency', 'icon')
    search_fields = ('name', 'proficiency')
    list_filter = ('proficiency',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'project_url', 'github_url', 'date')
    search_fields = ('title', 'description')
    list_filter = ('date',)
    filter_horizontal = ('tech_stack',)
    readonly_fields = ('image_preview',)

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" />', obj.image.url)
        return "-"
    image_preview.short_description = "Image Preview"

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('id', 'profile_image')
    readonly_fields = ('profile_image_preview',)

    def profile_image_preview(self, obj):
        if obj.profile_image:
            return format_html('<img src="{}" width="100" />', obj.profile_image.url)
        return "-"
    profile_image_preview.short_description = "Profile Image Preview"

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',)

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'description', 'uploaded_at', 'file')
    readonly_fields = ('uploaded_at', 'file_link')

    def file_link(self, obj):
        if obj.file:
            return format_html('<a href="{}" target="_blank">Download</a>', obj.file.url)
        return "-"
    file_link.short_description = "Resume File"

@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'icon')
    search_fields = ('name', 'url')

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ('site_title', 'logo')
    readonly_fields = ('logo_preview',)

    def logo_preview(self, obj):
        if obj.logo:
            return format_html('<img src="{}" width="100" />', obj.logo.url)
        return "-"
    logo_preview.short_description = "Logo Preview" 