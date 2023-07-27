---
author: Madhu Anugu
pubDatetime: 2023-07-07T05:45:00.737Z
title: Kubernetes Service
postSlug: kub-beginner-service
featured: true
tags:
  - release
description: Kubernetes Services from beginner course by Mumshad Munambeth
---
## Service

Three are three types
1. NodePort
2. ClusterIp
3. Load Balancer
To get the service url do
```
minikube service myapp-service --url
// will return url of the service
```

2. ClusterIp
In typical web application we can have group of pods running front-end, group of pods runing back-end and group of pods running key-value cache store like redis.

The web frontend servers need to communicate to backend servers and the backend servers
need to communicatge to redis. What is the right way to connect between these groups, We cannot use pod ip's as they are subject to be deleted and recreated. ClusterIp service
helps here by creating a end point (ip) for the group.

For example if front end want to communicate with backend pods, we can create a backend cluster ip and communicate through it


![Replica Set commands](/images/clusterIp.png)



```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend
  labels:
    app: guestbook
    tier: frontend
spec:
  type: ClusterIP
  ports:
  - targetPort: 80
    port: 80

  selector:
    app: myapp
    type: back-end

```






