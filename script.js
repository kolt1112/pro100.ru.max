const events = [
	{
		id: 1,
		title: "IT-Хакатон «Цифровой Сургут»",
		date: "15–17 марта 2026",
		location: "Технополис Сургут",
		type: "hackathon",
		price: "Бесплатно",
		participants: "120",
		image: "images/gigachad1.jfif",
		category: "hackathon",
		description:
			"Создайте цифровые решения для умного города. Разработка веб-приложений, мобильных сервисов и систем анализа данных. Лучшие проекты получат призы и возможность реализации.",
	},
	{
		id: 2,
		title: "Nanograd Design Challenge",
		date: "22–24 марта 2026",
		location: "Технополис + Онлайн",
		type: "design",
		price: "Бесплатно",
		participants: "85",
		image: "images/gigachad2.jfif",
		category: "design",
		description:
			"Дизайн-челлендж в стиле космического города будущего. Разработка интерфейсов, 3D-моделирование и визуализация идей для Nanograd.",
	},
	{
		id: 3,
		title: "Робототехника и Программирование",
		date: "5–7 апреля 2026",
		location: "Технополис Сургут",
		type: "hackathon",
		price: "Бесплатно",
		participants: "95",
		image: "images/gigachad3.jfif",
		category: "hackathon",
		description:
			"Соберите и запрограммируйте робота для выполнения сложных задач. Участие в командных соревнованиях по робототехнике и программированию.",
	},
	{
		id: 4,
		title: "UI/UX Design Sprint для школьников",
		date: "12–14 апреля 2026",
		location: "Онлайн",
		type: "design",
		price: "Бесплатно",
		participants: "180",
		image: "images/gigachad4.jfif",
		category: "design",
		description:
			"Интенсивный спринт по созданию пользовательских интерфейсов. Изучение Figma, принципов UX и создание прототипов реальных приложений.",
	},
	{
		id: 5,
		title: "Космический Хакатон Nanograd",
		date: "20–22 мая 2026",
		location: "Технополис Сургут",
		type: "hackathon",
		price: "Бесплатно",
		participants: "110",
		image: "images/gigachad5.jfif",
		category: "hackathon",
		description:
			"Разработка проектов, связанных с освоением космоса. От систем жизнеобеспечения до приложений для космических исследований.",
	},
	{
		id: 6,
		title: "Web-Design Мастерская",
		date: "1–10 марта 2026",
		location: "Онлайн",
		type: "design",
		price: "Бесплатно",
		participants: "220",
		image: "images/gigachad6.jfif",
		category: "design",
		description:
			"Практическая мастерская по современному веб-дизайну. Создание адаптивных сайтов, работа с Tailwind CSS и изучение трендов 2026 года.",
	},
	{
		id: 7,
		title: "IT-Фестиваль Технополис 2026",
		date: "28–30 апреля 2026",
		location: "Сургут",
		type: "conference",
		price: "Бесплатно",
		participants: "350",
		image: "images/gigachad7.jfif",
		category: "conference",
		description:
			"Большой фестиваль информационных технологий. Мастер-классы, лекции, выставка проектов и networking для участников всех возрастов.",
	},
	{
		id: 8,
		title: "Мобильные Приложения и Игры",
		date: "10–12 июня 2026",
		location: "Технополис Сургут",
		type: "hackathon",
		price: "Бесплатно",
		participants: "75",
		image: "images/gigachad8.jfif",
		category: "hackathon",
		description:
			"Создайте свою первую мобильную игру или полезное приложение. Работа с Flutter, Unity и публикация проекта в магазинах приложений.",
	},
];

function renderEvents(filteredEvents) {
	const container = document.getElementById("eventsGrid");
	container.innerHTML = "";

	if (filteredEvents.length === 0) {
		container.innerHTML = `<div class="col-span-3 py-20 text-center text-zinc-400">Ничего не найдено</div>`;
		return;
	}

	filteredEvents.forEach(event => {
		const html = `
            <div class="bg-zinc-900 rounded-3xl overflow-hidden card-hover border border-zinc-800 group">
                <div class="relative">
                    ${
											event.image
												? `<img src="${event.image}" alt="${event.title}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">`
												: `<div class="w-full h-64 bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">Фото мероприятия будет здесь</div>`
										}
                    <div class="absolute top-6 right-6 bg-black/70 backdrop-blur-md text-xs font-mono px-4 py-2 rounded-2xl">
                        ${event.participants} чел.
                    </div>
                </div>
                <div class="p-8">
                    <div class="flex justify-between mb-4">
                        <span class="inline-block px-5 py-2 bg-zinc-800 text-yellow-400 text-xs font-medium rounded-3xl">
                            ${event.type === "hackathon" ? "ХАКАТОН" : event.type === "design" ? "ДИЗАЙН" : "ФЕСТИВАЛЬ"}
                        </span>
                        <div class="text-emerald-400 text-sm font-medium">${event.price}</div>
                    </div>
                    <h3 class="text-2xl font-semibold tracking-tight mb-3">${event.title}</h3>
                    <div class="space-y-1 text-sm mb-4">
                        <div class="flex items-center gap-2 text-zinc-400"><i class="fa-solid fa-calendar w-4"></i><span>${event.date}</span></div>
                        <div class="flex items-center gap-2 text-zinc-500"><i class="fa-solid fa-location-dot w-4"></i><span>${event.location}</span></div>
                    </div>
                    <p class="text-zinc-400 text-sm line-clamp-3 mb-6">${event.description}</p>
                    
 <button onclick="window.location.href='event.html?id=${event.id}'" 
        class="w-full py-5 border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 rounded-3xl text-sm font-medium transition-all">
    Подробнее и регистрация
</button>
                </div>
            </div>
        `;
		container.innerHTML += html;
	});
}

function filterEvents() {
	const search = document
		.getElementById("searchInput")
		.value.toLowerCase()
		.trim();
	const dateFilter = document.getElementById("dateFilter").value;
	let filtered = events;

	// Фильтр по поисковой строке
	if (search) {
		filtered = filtered.filter(
			e =>
				e.title.toLowerCase().includes(search) ||
				e.description.toLowerCase().includes(search),
		);
	}

	// Фильтр по дате (исправленный)
	if (dateFilter !== "all") {
		filtered = filtered.filter(e => {
			const dateStr = e.date.toLowerCase();

			switch (dateFilter) {
				case "march":
					return dateStr.includes("марта") || dateStr.includes("март");
				case "april":
					return dateStr.includes("апреля") || dateStr.includes("апрель");
				case "may":
					return dateStr.includes("мая") || dateStr.includes("май");
				default:
					return true;
			}
		});
	}

	renderEvents(filtered);
}
function filterByCategory(btn) {
	document
		.querySelectorAll(".filter-btn")
		.forEach(b => b.classList.remove("active"));
	btn.classList.add("active");
	const cat = btn.dataset.category;
	let filtered =
		cat === "all" ? events : events.filter(e => e.category === cat);
	document.getElementById("searchInput").value = "";
	document.getElementById("dateFilter").value = "all";
	renderEvents(filtered);
}

function resetFilters() {
	document.getElementById("searchInput").value = "";
	document.getElementById("dateFilter").value = "all";
	document.querySelectorAll(".filter-btn").forEach(b => {
		b.classList.remove("active");
		if (b.dataset.category === "all") b.classList.add("active");
	});
	renderEvents(events);
}

// function showEventDetail(id) {
// 	const e = events.find(ev => ev.id === id);
// 	alert(
// 		`📍 ${e.title}\n\nДата: ${e.date}\nМесто: ${e.location}\n\n${e.description}\n\nУчастников: ${e.participants}\n\nДля регистрации обращайтесь в Технополис Сургут`,
// 	);
// }

function scrollToSection(id) {
	document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Убрана функция toggleDarkMode

document.addEventListener("DOMContentLoaded", () => {
	renderEvents(events);
});
