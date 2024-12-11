from django.db import models
from django.contrib.auth.models import User

class Users(models.Model):
    FirstName = models.CharField(max_length=255)
    LastName = models.CharField(max_length=255)
    mobileNumber = models.CharField(max_length=15)
    emailId = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Customer')

    def __str__(self):
        return self.FirstName  +" - "+self.mobileNumber