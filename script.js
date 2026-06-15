/* ------------------------
   БУРГЕР-МЕНЮ
------------------------- */

const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

function closeMenu() {
    menu.style.display = 'none';
    burger.textContent = '☰';
    if (overlay) overlay.classList.remove('open');
}

function openMenu() {
    menu.style.display = 'flex';
    burger.textContent = '✕';
    if (overlay) overlay.classList.add('open');
}

burger.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        closeMenu();
    } else {
        openMenu();
    }
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Закрытие меню по клику на затемнённую подложку
if (overlay) {
    overlay.addEventListener('click', () => {
        closeMenu();
    });
}

/* ------------------------
   ТАЙМЕР ДО СВАДЬБЫ
------------------------- */

const weddingDate = new Date('2026-08-14T10:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        document.querySelector('.countdown').innerHTML = '<h3>Сегодня наш день ❤️</h3>';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ------------------------
   АНИМАЦИЯ БЛОКОВ
------------------------- */

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('section, .place-card, .fact, .timeline-item, .contact-card').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

/* ------------------------
   ПЛАВНАЯ ПРОКРУТКА
------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ------------------------
   КНОПКА RSVP
------------------------- */

const rsvpButton = document.querySelector('.main-btn');
if (rsvpButton) {
    rsvpButton.addEventListener('click', () => {
        const form = document.querySelector('.guest-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* ------------------------
   КРАСИВАЯ ЗАГРУЗКА
------------------------- */

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/* ------------------------
   ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ (RU/EN)
------------------------- */

// Словарь переводов
const translations = {
    ru: {
        // навигация
        nav_home: "Главная",
        nav_story: "История",
        nav_schedule: "Программа",
        nav_places: "Места",
        nav_dresscode: "Дресс-код",
        nav_contacts: "Контакты",
        // hero
        date: "14 августа 2026",
        quote: "Cреди миллионов звезд<br>Мы выбрали светить вместе.",
        countdown_title: "До нашей встречи осталось",
        days: "дней",
        hours: "часов",
        minutes: "минут",
        seconds: "секунд",
        confirm_btn: "Подтвердить присутствие",
        // story
        story_title: "Наша история",
        story_text1: "Все началось в институте. Мы были просто знакомыми, проходили мимо друг друга каждый день, еще не догадываясь, что искра любви уже начинает зажигаться.",
        story_text2: "<br>Однажды, на одном из мероприятий института, мы оказались в одной компании. У нас завязался значимый диалог. Мы сразу почувствовали притяжение. Наше общение было легким и приятным, словно мы знали друг друга всю жизнь.",
        story_text3: "<br>С тех пор мы стали проводить все больше времени вместе. Часто гуляли по городу, смотрели фильмы и просто болтали до поздней ночи. Вскоре мы осознали, что стали неотъемлемой частью жизни друг друга. Мы были всегда рядом, поддерживали друг друга и делились своими мечтами и планами на будущее.",
        story_text4: "<br>И если вы читаете это… значит совсем скоро мы официально станем семьей!",
        // facts
        facts_title: "Интересные факты о нас",
        fact1: "Вместе уже 8 лет",
        fact2: "Говорим друг другу 'Я тебя люблю' на 9 языках",
        fact3: "Обожаем кулинарные эксперименты и необычные сочетания специй",
        fact4: "Были активистами в университете и аниматорами в Турции",
        fact5: "Любим организовывать тематические мероприятия и праздники",
        // timeline
        timeline_title: "Программа дня",
        event1_title: "СБОР ГОСТЕЙ",
        event1_subtitle: "Комплекс отдыха «Лель»",
        event2_title: "ВЫЕЗДНАЯ РЕГИСТРАЦИЯ",
        event3_title: "БАНКЕТ",
        event3_subtitle: "Зал «Малый Прованс Холл»",
        event4_title: "ТАНЦЫ",
        event4_subtitle: "До поздней ночи",
        // places
        places_title: "Место",
        places_name: "Комплекс отдыха \"Лель\"",
        places_address: "г. Уфа, ул. Левобережная, 51к1",
        // dresscode
        dresscode_title: "Дресс-код",
        colors_title: "Мы будем рады, если вы поддержите цветовую палитру нашей свадьбы",
        dress_note1: "Для вдохновения мы собрали несколько примеров образов, которые гармонично впишутся в атмосферу нашего дня",
        dress_women: "Для девушек",
        dress_men: "Для мужчин",
        color_butter: "Сливочный",
        color_lemon: "Лимонный крем",
        color_lavender: "Лаванда",
        color_sage: "Шалфейный",
        color_chocolate: "Молочный шоколад",
        color_beige: "Пыльный бежевый",
        dress_note: "Для сохранения общей атмосферы праздника просим по возможности избегать белых, неоновых и слишком ярких контрастных оттенков",
        dress_note2: "Если подходящего оттенка не найдётся — не переживайте. Для нас важнее всего ваше присутствие и хорошее настроение.",
        // photo
        photo_title: "Фото и видео",
        photo_text1: "Нам будет особенно приятно увидеть этот день вашими глазами.",
        photo_text2: "Делитесь фотографиями и видео в нашем свадебном альбоме.",
        tg_chat: "Telegram-чат гостей",
        upload_album: "Загрузить фото в альбом",
        album_or: "(или",
        album_click_here: "нажмите сюда",
        // form
        form_title: "Анкета гостя",
        form_deadline_text: "Будем благодарны, если Вы подтвердите свое присутствие и заполните анкету до:",
        form_help_text: "Это поможет нам с любовью подготовить каждую деталь нашего особенного дня",
        name_placeholder: "Ваше имя и фамилия",
        attend_yes: "С радостью буду",
        attend_no: "К сожалению, не смогу",
        song_placeholder: "Любимая песня",
        wishes_placeholder: "Ваши пожелания молодожёнам",
        submit_btn: "Отправить ответ",
        // contacts
        contacts_title: "Контакты",
        coordinator: "Координатор",
        coordinator_name: "Светлана Тяпова",
        contact_note: "В день свадьбы, пожалуйста, по всем организационным вопросам обращайтесь к координатору. Мы будем заняты друг другом и можем не сразу ответить на звонок.",
        // preferences (новое)
        preferences_title: "Ваши предпочтения",
        pref_champagne: "Шампанское",
        pref_red_wine: "Красное вино",
        pref_white_wine: "Белое вино",
        pref_vodka: "Водка",
        pref_rum: "Ром",
        pref_whiskey: "Виски",
        pref_cognac: "Коньяк",
        pref_no_alcohol: "Не пью алкоголь"
    },
    en: {
        nav_home: "Home",
        nav_story: "Story",
        nav_schedule: "Schedule",
        nav_places: "Venue",
        nav_dresscode: "Dress code",
        nav_contacts: "Contacts",
        date: "August 14, 2026",
        quote: "Among millions of stars<br>We chose to shine together.",
        countdown_title: "Time until our meeting",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        confirm_btn: "Confirm attendance",
        story_title: "Our story",
        story_text1: "It all started at the institute. We were just acquaintances, passing each other every day, not yet realizing that the spark of love was beginning to ignite.",
        story_text2: "<br>One day, at an institute event, we ended up in the same company. We had a meaningful conversation. We immediately felt a pull. Our communication was easy and pleasant, as if we had known each other all our lives.",
        story_text3: "<br>Since then, we started spending more and more time together. We often walked around the city, watched movies, and just chatted until late at night. Soon we realized that we had become an integral part of each other's lives. We were always there for each other, supporting each other and sharing our dreams and plans for the future.",
        story_text4: "<br>And if you are reading this… soon we will officially become a family!",
        facts_title: "Interesting facts about us",
        fact1: "Together for 8 years",
        fact2: "We say 'I love you' in 9 languages",
        fact3: "We love culinary experiments and unusual combinations of spices",
        fact4: "At the university we were activists and also worked as animators in Turkey",
        fact5: "We love organizing themed events and holidays",
        timeline_title: "Day schedule",
        event1_title: "GUEST ARRIVAL",
        event1_subtitle: "Lel Recreation Complex",
        event2_title: "OUTDOOR REGISTRATION",
        event3_title: "BANQUET",
        event3_subtitle: "Small Provence Hall",
        event4_title: "DANCING",
        event4_subtitle: "Until late night",
        places_title: "Venue",
        places_name: "Lel Recreation Complex",
        places_address: "Ufa, Levoberezhnaya St., 51k1",
        dresscode_title: "Dress code",
        colors_title: "We will be glad if you support the color palette of our wedding",
        dress_note1: "For inspiration, we have collected several examples of images that will fit harmoniously into the atmosphere of our day",
        dress_women: "For Ladies",
        dress_men: "For Gentlemen",
        color_butter: "Butter",
        color_lemon: "Lemon cream",
        color_lavender: "Lavender",
        color_sage: "Sage",
        color_chocolate: "Milk chocolate",
        color_beige: "Dusty beige",
        dress_note: "To maintain the overall festive atmosphere, please avoid using white, neon, or overly bright contrasting colors.",
        dress_note2: "If you don't find the right shade, don't worry. Your presence and good mood are most important to us.",
        photo_title: "Photos and videos",
        photo_text1: "We will be especially pleased to see this day through your eyes.",
        photo_text2: "Share photos and videos in our wedding album.",
        tg_chat: "Telegram guest chat",
        upload_album: "Upload photo to album",
        album_or: "(or",
        album_click_here: "click here",
        form_title: "Guest form",
        form_deadline_text: "We would be grateful if you confirm your attendance and fill out the form by:",
        form_help_text: "This will help us lovingly prepare every detail of our special day",
        name_placeholder: "Your full name",
        attend_yes: "I will gladly attend",
        attend_no: "Unfortunately, I cannot attend",
        song_placeholder: "Favorite song",
        wishes_placeholder: "Your wishes for the newlyweds",
        submit_btn: "Send response",
        contacts_title: "Contacts",
        coordinator: "Coordinator",
        coordinator_name: "Svetlana Tyapova",
        contact_note: "On the wedding day, please direct all organizational questions to the coordinator. We will be busy with each other and may not answer the phone immediately.",
        // preferences (новое)
        preferences_title: "Your preferences",
        pref_champagne: "Champagne",
        pref_red_wine: "Red wine",
        pref_white_wine: "White wine",
        pref_vodka: "Vodka",
        pref_rum: "Rum",
        pref_whiskey: "Whiskey",
        pref_cognac: "Cognac",
        pref_no_alcohol: "I don't drink alcohol"
    }
};

// Функция смены языка
function setLanguage(lang) {
    // Перевод текстовых элементов с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'SELECT') {
                const options = el.querySelectorAll('option[data-i18n]');
                options.forEach(opt => {
                    const optKey = opt.getAttribute('data-i18n');
                    if (translations[lang][optKey]) {
                        opt.textContent = translations[lang][optKey];
                    }
                });
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Перевод placeholder для полей с атрибутом data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Замена изображений (если нужны версии на другом языке)
    const imgMappings = {
        'names': lang === 'en' ? 'Images/names_en.webp' : 'Images/names.webp',
        'endname': lang === 'en' ? 'Images/endname_en.webp' : 'Images/endname.webp',
        'lemon': lang === 'en' ? 'Images/lemon_en.webp' : 'Images/lemon.webp',
        'endlem': lang === 'en' ? 'Images/endlem_en.webp' : 'Images/endlem.webp',
        'pallete': lang === 'en' ? 'Images/pallete_en.webp' : 'Images/pallete.webp'
    };
    document.querySelectorAll('[data-i18n-img]').forEach(el => {
        const key = el.getAttribute('data-i18n-img');
        if (imgMappings[key]) {
            el.src = imgMappings[key];
        }
    });

    // Добавляем класс lang-en на body для английской версии
    document.body.classList.toggle('lang-en', lang === 'en');

    // Активное состояние кнопок переключателя
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Переключение слайдера в language-switch
    const switcher = document.querySelector('.language-switch');
    if (switcher) {
        switcher.classList.toggle('en', lang === 'en');
    }

    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('lang', lang);
}

// Запуск после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ru';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
document.getElementById('rsvpForm').addEventListener('submit', function (e) {

    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    const preferences = [];

    document.querySelectorAll('input[name="preferences"]:checked')
        .forEach(el => preferences.push(el.value));

    formData.set('preferences', preferences.join(', '));

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
        .then(() => {
            alert('Спасибо! Анкета отправлена ❤️');
            form.reset();
        })
        .catch(() => {
            alert('Ошибка отправки');
        });
});
