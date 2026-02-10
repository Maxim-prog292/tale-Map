const regions = document.querySelectorAll("path");
const modal = document.getElementById("region-modal");
const modalClose = document.querySelector(".modal-close");
const modalRegionName = document.getElementById("modal-region-name");
const modalMuseums = document.getElementById("modal-museums");

const regionsData = [
  {
    bind: "molokovo",
    regionName: "Молоковский район",
    content: [
      {
        title: "Музей Какойто",
        description: "This is the description for Region 1.",
        url: "",
      },
      {
        title: "Музей Какойто",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "kholm",
    regionName: "kholm",
    content: [
      {
        title: "Музей 2",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "sonkovo",
    regionName: "sonkovo",
    content: [
      {
        title: "Музей 3",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "vesegonsk",
    regionName: "vesegonsk",
    content: [
      {
        title: "Музей 4",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "sandovo",
    regionName: "sandovo",
    content: [
      {
        title: "Музей 5",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "lesnoi",
    regionName: "lesnoi",
    content: [
      {
        title: "Музей 6",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "bejeck",
    regionName: "bejeck",
    content: [
      {
        title: "Музей 7",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "kesgor",
    regionName: "kesgor",
    content: [
      {
        title: "Музей 8",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "kashin",
    regionName: "kashin",
    content: [
      {
        title: "Музей 9",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "kalyazin",
    regionName: "kalyazin",
    content: [
      {
        title: "Музей 10",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "kimri",
    regionName: "Кимрский муниципальный округ, поселок Приволжский",
    content: [
      {
        title: "Музей Гадов",
        description: `"Не за тридевять земель, не в далёком царстве-государстве, а в болотистой долине реки Хотча, что тихо струится перед впадением в Волгу-матушку, давным-давно поселился герой многих сказок и былин — добродушный Змей Горыныч. Место сие издревле звалось змеиным царством: в камышах шуршали, в воде плескались, на солнышке грелись видимо-невидимо змей. И оттого прозвали сию землю Гадово, где ныне стоит музей гадов, хранящий тайны и предания седой старины.

Здесь оживает сказка, и начинается увлекательное театрализованное действо. Не только Горыныч, но и Кикимора болотная, что в тине живёт, баба Яга — костяная нога, да Гадюжки — его верные подружки, встречают гостей да ведут их в мир чудес. Гостей ждёт сказочный пир — с яствами да напитками, что сами собой на столах появляются. Для детей — народные игры, хороводы да забавы, а для взрослых — конкурсы да потехи. Тут же выставка-продажа сувенирной продукции: от узорчатых оберегов до диковинных поделок, что руками мастеров народных созданы. Хорошее настроение да радость в сердцах — вот что увозят с собой гости из Гадова!

Где ещё можно встретить такое? Только здесь, в краю, где сказка становится былью! Приезжайте, посмотрите, побывайте в гостях у сказки. Увезите с собой не только сувениры, но и тепло добрых воспоминаний, что согреют сердце в долгие зимние вечера."

"Гадово — родина Змея Горыныча" приглашает Вас на экскурсии и развлекательные программы!`,
        url: "./img/museum/kimri_mus_gadov.webp",
      },
    ],
  },
  {
    bind: "konakovskiy",
    regionName: "konakovskiy",
    content: [
      {
        title: "Музей 12",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "kalininskiy",
    regionName: "kalininskiy",
    content: [
      {
        title: "Музей 13",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "rameshki",
    regionName: "rameshki",
    content: [
      {
        title: "Музей 14",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "lihoslavl",
    regionName: "lihoslavl",
    content: [
      {
        title: "Музей 15",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "torjokskiy",
    regionName: "torjokskiy",
    content: [
      {
        title: "Музей 16",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "starickiy",
    regionName: "starickiy",
    content: [
      {
        title: "Музей 17",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "zubtsov",
    regionName: "zubtsov",
    content: [
      {
        title: "Музей 18",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "rzevskiy",
    regionName: "rzevskiy",
    content: [
      {
        title: "Музей 19",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "maksatiha",
    regionName: "maksatiha",
    content: [
      {
        title: "Музей 20",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "spirovskiy",
    regionName: "spirovskiy",
    content: [
      {
        title: "Музей 21",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "vishniyvolochok",
    regionName: "vishniyvolochok",
    content: [
      {
        title: "Музей 22",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "udomelskiy",
    regionName: "udomelskiy",
    content: [
      {
        title: "Музей 23",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "bologovskiy",
    regionName: "bologovskiy",
    content: [
      {
        title: "Музей 24",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "kuvshinovskiy",
    regionName: "kuvshinovskiy",
    content: [
      {
        title: "Музей 25",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "selizjarovskiy",
    regionName: "selizjarovskiy",
    content: [
      {
        title: "Музей 26",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "firovskiy",
    regionName: "firovskiy",
    content: [
      {
        title: "Музей 27",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "ostashkovskiy",
    regionName: "ostashkovskiy",
    content: [
      {
        title: "Музей 28",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "penovskiy",
    regionName: "penovskiy",
    content: [
      {
        title: "Музей 29",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "oleninskiy",
    regionName: "oleninskiy",
    content: [
      {
        title: "Музей 30",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "belskiy",
    regionName: "belskiy",
    content: [
      {
        title: "Музей 31",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "nelidovskiy",
    regionName: "nelidovskiy",
    content: [
      {
        title: "Музей 32",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "andreapolskiy",
    regionName: "andreapolskiy",
    content: [
      {
        title: "Музей 33",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "jarovskiy",
    regionName: "jarovskiy",
    content: [
      {
        title: "Музей 34",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "zapadnodvinskiy",
    regionName: "zapadnodvinskiy",
    content: [
      {
        title: "Музей 35",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "toropeckiy",
    regionName: "toropeckiy",
    content: [
      {
        title: "Музей 36",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
  {
    bind: "tver",
    regionName: "tver",
    content: [
      {
        title: "Музей 37",
        description: "This is the description for Region 1.",
        url: "",
      },
    ],
  },
];

function openModal(regionData) {
  modalRegionName.textContent = regionData.regionName || "";

  // очищаем прошлый рендер
  modalMuseums.innerHTML = "";

  const list = Array.isArray(regionData.content) ? regionData.content : [];

  list.forEach((museum) => {
    const hasImage = museum.url && museum.url.trim() !== "";

    const card = document.createElement("div");
    card.className = `museum-card${hasImage ? " has-image" : ""}`;

    card.innerHTML = `
      <img class="museum-image" src="${hasImage ? museum.url : ""}" alt="${museum.title || ""}">
      <div class="museum-body">
        <div class="museum-title">${museum.title || ""}</div>
        <p class="museum-desc">${museum.description || ""}</p>
      </div>
    `;

    modalMuseums.appendChild(card);
  });

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // при открытии всегда в начало списка
  modalMuseums.scrollTo({ top: 0 });
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

regions.forEach((region) => {
  region.addEventListener("click", (e) => {
    const regionClass = e.target.classList[0];
    const data = regionsData.find((item) => item.bind === regionClass);
    if (!data) return;
    openModal(data);
  });
});

modalClose.addEventListener("click", closeModal);

// бонус: закрытие по клику на фон (если нужно — оставь; если нет — убери)
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// бонус: закрытие по Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
