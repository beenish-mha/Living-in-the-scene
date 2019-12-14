# Finding APIs
Used google to find APIs by searching 'APIs to find movie locations'.
By searching this we were able to find a website that used information similar to what we were looking for through the TMDb API.
Then looked through the TMDb documentation to see if we could access the locations within this API. 

I created an account and requested access to the API- within the request I gave a brief explaination why I was requesting the the API.

Through research we then found myapifilms which would allow us to chain the movie database api 

We now have 2 APIs: 
API 1: https://developers.themoviedb.org/4/getting-started/authorization
API 2: https://www.myapifilms.com/imdb.do

# Testing the APIs

Our test cases for the two APIs:
    Coronation Street
    Skyfall
    Lost in Translation 
    Harry Potter
    Casa Blanca
    Mary Poppins 
    Last Christmas 
    Jurasic Park

Tested out the 8 cases and found that 7 of these worked, however the first case did not fall under movies so found that we would need to change the API URL to be able to search for TV shows. We believed this maybe a little hard so have decided to focus on Movies with the possiblity to and the changes for TV shows if we have time at the end of the project.

# API Route 
    1. Enter movie name
    2. Retrieve TMDb Id 
    3. Choose correct movie (if multiple options appear)
    4. Retrieve IMDb Id
    5. Enter IMDb ID into the APIfilms
    6. Retreive movie locations 

# API Keys

API 1(TMDb): 0a2e111476bfd341e9cc4952d7f4e484
API 2(MyAPI): 67b14d73-182d-4e58-8ea8-df1280852d84