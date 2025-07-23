#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

current_branch=$(git rev-parse --abbrev-ref HEAD)

# Дозволені формати гілок:
# - main, master, develop
# - feature/назва-гілки (маленькі літери, дефіси)
# - bugfix/назва-гілки (маленькі літери, дефіси)
# - hotfix/назва-гілки (маленькі літери, дефіси)
# - release/версія (наприклад, release/1.0.0)
# - chore/назва-гілки
# - docs/назва-гілки
# - fix/назва-гілки
# - feat/назва-гілки
# - refactor/назва-гілки
# - style/назва-гілки
# - test/назва-гілки
# - perf/назва-гілки
# - ci/назва-гілки
# - build/назва-гілки

branch_regex="^(main|master|develop|feature\/[a-z0-9]+(?:-[a-z0-9]+)*|bugfix\/[a-z0-9]+(?:-[a-z0-9]+)*|hotfix\/[a-z0-9]+(?:-[a-z0-9]+)*|release\/[0-9]+\.[0-9]+\.[0-9]+|chore\/[a-z0-9]+(?:-[a-z0-9]+)*|docs\/[a-z0-9]+(?:-[a-z0-9]+)*|fix\/[a-z0-9]+(?:-[a-z0-9]+)*|feat\/[a-z0-9]+(?:-[a-z0-9]+)*|refactor\/[a-z0-9]+(?:-[a-z0-9]+)*|style\/[a-z0-9]+(?:-[a-z0-9]+)*|test\/[a-z0-9]+(?:-[a-z0-9]+)*|perf\/[a-z0-9]+(?:-[a-z0-9]+)*|ci\/[a-z0-9]+(?:-[a-z0-9]+)*|build\/[a-z0-9]+(?:-[a-z0-9]+)*)$"

if [[ ! "$current_branch" =~ $branch_regex ]]; then
  echo "❌ Помилка: Неправильне іменування гілки."
  echo "Назва гілки '$current_branch' не відповідає дозволеним шаблонам."
  echo "Дозволені шаблони:"
  echo "  - main, master, develop"
  echo "  - <тип>/<назва-гілки> (наприклад, feature/my-new-feature, bugfix/fix-bug-123)"
  echo "  - <тип> може бути: feature, bugfix, hotfix, release, chore, docs, fix, feat, refactor, style, test, perf, ci, build"
  echo "  - Назва гілки повинна складатися з малих літер та дефісів."
  exit 1
fi

echo "✅ Назва гілки '$current_branch' відповідає вимогам."