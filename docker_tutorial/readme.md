# Docker

`docker pull ImageName:Tag` -> pull docker from Docker hub
`docker images ` -> list the images
`docker rmi ` -> remove image

RUN commands in docker file are part of the image build process

CMD when running a docker instance

`docker rm ContainerName/Id` remove the container

`docker ps` - list all running containers
`docker ps -a` - list all running and not running containers
`docker exec -it ContainerID /bin/sh` - get into the docker
`docker start`
`docker stop`



# ex 1
Create Docker file 
Copy JS file into the docker
run the JS file inside the docker with CMD command node FileName.js


# ex 2
Create Nodejs Express application
Which will listen to PORT : 3500
Expose entry point /GET /users will return ```json [ "gal","dorin" ] ```

# ex 3

Dockerize Nodejs api 
expose the following port -8000
build & run
run command : docker run -p PORT_EXTERNAL:PORT_INTERNAL api
docker exec -it <container id> /bin/sh


Missing:
Docker run with .env
docker run with docker-compose 
running nodejs + mysql docker with docker compose 

