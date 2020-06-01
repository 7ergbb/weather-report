venv:
	[ ! -e .venv ] && python3 -m venv .venv --prompt weather || true
.PHONY: venv

lint:
	pycodestyle --ignore=D100,D103,E402 --max-line-length=160 backend/
.PHONY: lint