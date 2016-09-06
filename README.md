# User Management System

**Steps to run the project:**

1. Download the project
2. Enter the project directory from CLI
3. Run 'grunt serve' to start the project (it will open new tab in your browser automatically)



**Implemented basic features:**

1. List of existing users
2. List of existing groups (select box)
3. Ability to create new users
4. Ability to create new groups
5. Ability to change user group
6. Ability to delete group if group no longer has members
7. Ability to delete users
8. Create new user form validation
9. Ability to Search/Filter users by free text input
10. Ability to filter users by groups
11. Responsive design




**Implemented advanced features:**

1. Goolgle maps integration
2. Voice recognition


==========================================
**Goolgle maps explanation**

Every user has location data - city name and city lat/lng.
When we click on some user from the list his location will be displayed on the map.
When we create new user, we must pick user location (city) from "Pick city" dropdown. This field is mandatory.

===========================================

===========================================

**Voice recognition explanation**

**The main purpose of voice recognition module is to find user in the list by first_name.**

When you launch the application for the first time it will ask you to allow browser to use your microphone. Press YES to allow.
In order to find some user in the list simply say **FIND STEVEN** or any other name that you want to find. Expected behavior - you should see the
text on the application top bar saying **Looking for Steven**, when it does find Steven then few things should happen:

1. The text on the tob bar will change to **Steven found!!!**
2. Users list will scroll automatically to Stevens position
3. Stevens row will become focused and his location will appear on the map

**NOTE:** _Voice recognition performance depends on internet connection speed, so please don't worry if 
it takes few seconds to respond. If it takes too much time, refresh the page and try again._

============================================



