APP_NAME = dumi_spa_nginx_docker
PORT = 80

# 镜像打包
build:
	cp docker/Dockerfile .
	cp docker/nginx.conf .
	docker build -t $(APP_NAME) .
	rm Dockerfile
	rm nginx.conf

# 启动镜像
deploy:
	docker run -d -it -p=$(PORT):$(PORT) --name="$(APP_NAME)" $(APP_NAME)

# 停止、清理镜像
stop:
	docker stop $(APP_NAME)
	docker rm $(APP_NAME)
	docker rmi $(APP_NAME)