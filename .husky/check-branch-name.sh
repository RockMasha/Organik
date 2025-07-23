current_branch=$(git rev-parse --abbrev-ref HEAD)

branch_regex="^(main|master|develop|feature\/[a-z0-9]+(?:-[a-z0-9]+)*|task\/[A-Z]+-[0-9]+(?:-[a-z0-9]+)*|bugfix\/[a-z0-9]+(?:-[a-z0-9]+)*|hotfix\/[a-z0-9]+(?:-[a-z0-9]+)*|release\/[0-9]+\.[0-9]+\.[0-9]+(?:-[a-z0-9]+)*|chore\/[a-z0-9]+(?:-[a-z0-9]+)*|docs\/[a-z0-9]+(?:-[a-z0-9]+)*|refactor\/[a-z0-9]+(?:-[a-z0-9]+)*|style\/[a-z0-9]+(?:-[a-z0-9]+)*|test\/[a-z0-9]+(?:-[a-z0-9]+)*|perf\/[a-z0-9]+(?:-[a-z0-9]+)*|ci\/[a-z0-9]+(?:-[a-z0-9]+)*|build\/[a-z0-9]+(?:-[a-z0-9]+)*)$"

if ! echo "$current_branch" | grep -Eq "$branch_regex"; then
  echo "❌ Помилка: Неправильне іменування гілки."
  echo "Назва гілки '$current_branch' не відповідає дозволеним шаблонам."
  echo "Дозволені шаблони:"
  echo "  - main, master, develop"
  echo "  - feature/<назва-з-малих-літер-та-дефісів>"
  echo "  - task/<ВЕЛИКІ-ЛІТЕРИ>-<ЦИФРИ>-<опис-з-малих-літер-та-дефісів>"
  echo "  - bugfix/<назва-з-малих-літер-та-дефісів>"
  echo "  - hotfix/<назва-з-малих-літер-та-дефісів>"
  echo "  - release/<номер-версії> (наприклад, release/1.0.0, release/1.2.3-beta)"
  echo "  - chore/<назва-з-малих-літер-та-дефісів>"
  echo "  - docs/<назва-з-малих-літер-та-дефісів>"
  echo "  - refactor/<назва-з-малих-літер-та-дефісів>"
  echo "  - style/<назва-з-малих-літер-та-дефісів>"
  echo "  - test/<назва-з-малих-літер-та-дефісів>"
  echo "  - perf/<назва-з-малих-літер-та-дефісів>"
  echo "  - ci/<назва-з-малих-літер-та-дефісів>"
  echo "  - build/<назва-з-малих-літер-та-дефісів>"
  exit 1
fi

echo "✅ Назва гілки '$current_branch' відповідає вимогам."