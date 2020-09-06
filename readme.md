# Dynmap web endpoints

Endpoints used in the web view for Dynmap.

# Endpoints

## [GET ]/up/configuration

Returns servers's settings.

See src/configuration.ts

## [GET] /tiles/\_markers\_/marker\_{worldId}.json

Returns makers in a world.

See src/markers.ts

## [GET] /up/world/{worldId}/{UNIXTime}

Returns metadata and player info for the world. 

`{UNIXTime}` is the current time in UNIX time (ms since 1970).
`${worldId}` is the world's ID.

See src/data.ts