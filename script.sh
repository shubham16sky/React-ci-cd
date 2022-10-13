#!/bin/bash

container=`sudo docker ps | awk '{print $NF}' | awk '(NR>1)' | grep -E "project"`


if [ ! -z "$container" ]
then
        sudo docker stop project && sudo docker rm project  && sudo docker run --name "project" --detach -p 3000:3000  frontend

else
        sudo docker run --name "project" --detach  -p 3000:3000  frontend
fi
