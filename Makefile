.PHONY: sync build all clone

all: sync

sync:
	rsync -av --delete weave-gitops/website/build/ assets

build:
	cd weave-gitops/website && yarn build

clone:
	git clone git@github.com:microscaler/weave-gitops
