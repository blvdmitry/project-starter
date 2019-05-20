## Deployment to Digital Ocean with docker-machine

1. `docker-machine create --driver=digitalocean --digitalocean-access-token=$DO_TOKEN --digitalocean-size=1gb $PROJECT_NAME`
2. `eval $(docker-machine env $PROJECT_NAME)`


