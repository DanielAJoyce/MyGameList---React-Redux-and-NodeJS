* Database Structure Plan



** Game Table

- GameID
- Title
- Year of Release (This can vary per region, but will keep it to one (Although I could make this an array of strings ))
- Genre (Keep it simple)
- Average User Rating (out of 10)
- Amount of Votes (Number)
- Platforms (Array)
- Metacritic/Open Critic Rating (Can check the API if it exists).
- Description
- Plot Synopsis

** User Table
- UserID
- GameBacklog{
    - Games[
        - GameID
        - Individual User Rating
        - Satus {
            Either of the following:
            - To be Played
            - Currently Playing
            - Dropped
            - Completed
         }
        - Platforms playing on [
            - Platforms here
        ]
    ]
    }
- username
- password
- email
- dateJoined
}

