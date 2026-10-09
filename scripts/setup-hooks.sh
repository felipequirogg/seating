#!/usr/bin/env bash
# Activa los hooks versionados de este repo. Se corre UNA vez después de clonar.
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

git config core.hooksPath .githooks

# En algunos sistemas de archivos el bit de ejecución no se conserva.
chmod +x .githooks/* 2>/dev/null || true

echo "core.hooksPath -> $(git config core.hooksPath)"
echo "Hooks activos:"
echo "  pre-commit: escanea lo que vas a commitear (ofuscación, indicadores del atacante, tasks.json, fuentes falsas)."
echo "  pre-push:   bloquea force-push/borrado de main/master (usa ~/.milionegle-seguridad si existe en este equipo)."
