from rest_framework import serializers
from sesh.models import Post
from users.models import NewUser

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'area', 'difficulty', 'time', 'players_needed', 'description', 'player')

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['player'] =  instance.player.user_name
        return ret
