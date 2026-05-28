/*
  Ponto de entrada da aplicação.

  Este arquivo permite executar o mesmo projeto em três arquiteturas:
  - MVC: usa MovieController
  - MVP: usa MoviePresenter
  - MVVM: usa MovieViewModel

  A arquitetura padrão é MVVM, pois ela representa a versão final do projeto.
  Para testar as outras versões, use a URL:
  - index.html?arch=mvc
  - index.html?arch=mvp
  - index.html?arch=mvvm
*/
document.addEventListener("DOMContentLoaded", () => {
  const architecture = getSelectedArchitecture();

  const repository = new MovieRepository();
  const view = new MovieView();

  showSelectedArchitecture(architecture);

  if (architecture === "mvc") {
    new MovieController(repository, view);
    return;
  }

  if (architecture === "mvp") {
    new MoviePresenter(repository, view);
    return;
  }

  const viewModel = new MovieViewModel(repository);
  view.connectViewModel(viewModel);
});

/*
  Lê a arquitetura escolhida pela URL.
  Caso o parâmetro esteja vazio ou inválido, o projeto abre em MVVM.
*/
function getSelectedArchitecture() {
  const allowedArchitectures = ["mvc", "mvp", "mvvm"];
  const params = new URLSearchParams(window.location.search);
  const selectedArchitecture = (params.get("arch") || "mvvm").toLowerCase();

  if (allowedArchitectures.includes(selectedArchitecture)) {
    return selectedArchitecture;
  }

  return "mvvm";
}

/*
  Atualiza o texto e o estado visual dos links no seletor de arquitetura.
  Isso não interfere na regra do projeto, apenas ajuda na apresentação.
*/
function showSelectedArchitecture(architecture) {
  const architectureName = document.querySelector("#architectureName");

  if (architectureName) {
    architectureName.textContent = architecture.toUpperCase();
  }

  document.querySelectorAll("[data-architecture-link]").forEach((link) => {
    const isActive = link.dataset.architectureLink === architecture;

    link.classList.toggle("architecture-switch__link--active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
      return;
    }

    link.removeAttribute("aria-current");
  });
}
