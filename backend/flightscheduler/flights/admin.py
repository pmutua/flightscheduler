from django.contrib import admin
from flights.models import *


@admin.register(Schedule)
class IssuedPermitAdmin(admin.ModelAdmin):
    
    list_display =  (
        'id','airline','flight_no','trip_type','departure_airport','arrival_airport','departure_date','arrival_date'
    )
    
    search_fields = (
        'airline','flight_no',
    )
    
    # read_only_fields = (
    #     'id','created_at','updated_at',
    # )


