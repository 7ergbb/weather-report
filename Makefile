venv:
	[ ! -e .venv ] && python3 -m venv .venv --prompt weather || true
.PHONY: venv