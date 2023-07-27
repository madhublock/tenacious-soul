---
author: Madhu Anugu
pubDatetime: 2023-07-07T05:45:00.737Z
title: Kubernetes
postSlug: kub-beginner
featured: true
tags:
  - release
description: Kubernetes beginner course by Mumshad Munambeth
---

## POD

kub does not deploy container on node, it will deploy on pod, a smallest object


## Replicaset

Replica set is used to create replicas of the defined spec in the template. Also very import is the selector to create replicas based
on already created pods which has matching labels

Scenario: If Replica pods are already created, but any one pod fails it uses the template to create a new pod

If you update scale by using
```@bin/bash
kubectl scale --replicas=6 -f replica-def.yaml
```
The file is not updated with the replicas but replicas are created


```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: frontend-rc
  labels:
    app: guestbook
    tier: frontend
spec:
  replicas: 3
  template:
    metadata:
      name: frontend
      labels:
        app: guestbook
        tier: frontend
    spec:
      containers:
      - name: nginx-container
        image: nginx
        ports:
        - containerPort: 80
```

![Replica Set commands](/images/replicaset_commands.png)

## Service

To get the service url do
```
minikube service myapp-service --url
// will return url of the service
```




