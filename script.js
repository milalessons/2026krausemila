// ============================================
// Людмила Краузе — Художник, преподаватель
// Montserrat | Бирюзовый + цвета | RU/DE | Тёмная тема
// Фото: IndexedDB + статические fallback (из /images)
// ============================================

const translations = {
    ru: {
        logo: 'Мила Краузе',
        title: 'Людмила Краусе — Художник, преподаватель, арт-терапевт',
        nav_about: 'Обо мне',
        nav_services: 'Услуги',
        nav_reviews: 'Отзывы',
        nav_gallery: 'Галерея',
        nav_contact: 'Контакты',
        btn_contact: 'Связаться',
        hero_badge: 'Художник-педагог с 20-летним стажем',
        hero_title: 'Раскрываю творческий потенциал ребенка и взрослого через персональный подход',
        hero_text: 'Обучение живописи детей и взрослых, арт-терапия, Нейрографика, консультации по Квантовой Астрогенетике. Обучаю онлайн и офлайн в Ойскирхене, на русском и украинском языке, подходит для детей из русско-немецких семей.',
        badge_1: 'Индивидуальный подход',
        badge_2: 'Онлайн и офлайн',
        badge_3: 'Для детей и взрослых',
        btn_cta: 'Записаться на занятие',
        services_label: 'Услуги',
        services_title: 'Профессиональные компетенции и услуги',
        services_subtitle: 'Персональное обучение живописи, терапевтические практики, персональные консультации под запрос через квантовые инструменты',
        tag_kids: '5–15 лет',
        tag_teens: 'от 10 лет',
        tag_all: 'для всех',
        tag_online: 'онлайн',
        tag_consult: 'консультация',
        tag_individual: 'индивидуально',
        service_1_title: 'Рисование для детей',
        service_1_desc: 'Занятия для детей от 5 до 15 лет. Карандаш, акварель, акрил и развитие творческого мышления.',
        service_2_title: 'Масляная живопись',
        service_2_desc: 'Серьезные занятия для подростков и взрослых с углублением в технику масляной живописи. Раскрытие секретов и тонкостей создания полотен.',
        service_3_title: 'Арт-терапия',
        service_3_desc: 'Снятие стресса и эмоциональная гармонизация через творчество. Для детей и взрослых.',
        service_4_title: 'Нейрографика онлайн',
        service_4_desc: 'Практика, которая помогает проработать запросы и найти решения через рисунок. Доступно дистанционно.',
        service_5_title: 'Квантовая Астрогенетика',
        service_5_desc: 'Раскрытие планетарного потенциала ребенка и взрослого по дате рождения. Рекомендации по направлениям дальнейшего обучения и корректировке возможных психологических состояний.',
        service_6_title: 'Световые карты',
        service_6_desc: 'Квантовый инструмент работы с тонким планом через персональные световые метафорические расклады «Неопределенность событий возможно сделать определенными».',
        about_label: 'Обо мне',
        about_title: 'Творчество как путь к себе',
        about_p1: 'Верю, что каждый ребёнок талантлив по-своему, и моя задача — помочь этот талант раскрыть. Обучаю различным техникам живописи. К каждому ученику — индивидуальный подход. Учу детей рисовать карандашом, акрилом, маслом на холсте, развиваю творческое мышление и уверенность в себе.',
        about_p2: 'Помимо изобразительного искусства, я провожу арт-терапевтические занятия и нейрографику для детей и взрослых, помогаю снять стресс через творчество. Для родителей раскрываю планетарный потенциал детей по дате рождения.',
        quote: '«Каждый ребёнок талантлив по-своему, и я готова помочь раскрыть его потенциал».',
        float_years: 'лет опыта',
        photo_placeholder: 'Фото художника',
        stat_1: 'лет творческого опыта',
        stat_2: 'лет — возраст учеников',
        stat_3: 'направления искусства',
        stat_4: 'языки консультаций',
        gallery_label: 'Портфолио',
        gallery_title: 'Галерея',
        gallery_subtitle: 'Авторские работы и творчество учеников в различных техниках.',
        gallery_tab_personal: 'Личная',
        gallery_tab_students: 'Ученики',
        gallery_tab_neuro: 'Нейрографика',
        work_1: 'Работа 1',
        work_2: 'Работа 2',
        work_3: 'Работа 3',
        work_4: 'Работа 4',
        work_5: 'Работа 5',
        work_6: 'Работа 6',
        reviews_label: 'Отзывы',
        reviews_title: 'Что говорят ученики и родители',
        reviews_subtitle: 'Реальные отзывы от наших учеников и их родителей',
        video_label: 'Презентационное видео',
        contact_label: 'Контакты',
        contact_title: 'Свяжитесь со мной',
        contact_subtitle: 'Запишитесь на пробное занятие, задайте вопрос или узнайте больше об услугах',
        contact_info_title: 'Контакты',
        contact_info_text: 'Пишите или звоните — отвечу в удобное для вас время.',
        form_title: 'Записаться на занятие',
        form_text: 'Напишите мне в Telegram или WhatsApp или на электронную почту, и мы договоримся о времени и формате.',
        form_note: 'Занятия и консультации проходят в Ойскирхене, онлайн, возможны уроки на дому. Первое знакомство возможно онлайн в формате консультации, чтобы выбрать подходящий метод обучения или общения.',
        footer_text: '© 2026 Людмила Краусе. Все права защищены.',
        gallery_more: 'Больше работ',
        moreworks_title: 'Все работы — Людмила Краусе',
        moreworks_heading: 'Все работы',
        moreworks_subtitle: 'Полная коллекция работ и ученических проектов',
        moreworks_empty: 'Пока нет загруженных работ'
    },

    de: {
        logo: 'Mila Krause',
        title: 'Ljudmila Krause — Künstlerin, Lehrerin, Kunsttherapeutin',
        nav_about: 'Über mich',
        nav_services: 'Leistungen',
        nav_reviews: 'Bewertungen',
        nav_gallery: 'Galerie',
        nav_contact: 'Kontakt',
        btn_contact: 'Kontakt',
        hero_badge: 'Kunstpädagogin mit 20 Jahren Erfahrung',
        hero_title: 'Entfalte das kreative Potenzial von Kindern und Erwachsenen durch einen persönlichen Ansatz',
        hero_text: 'Unterricht in Malerei für Kinder und Erwachsene, Kunsttherapie, Neurographik, Beratung in Quanten-Astrogenetik. Ich unterrichte online und offline in Euskirchen, auf Russisch und Ukrainisch, geeignet für Kinder aus russisch-deutschen Familien.',
        badge_1: 'Individueller Ansatz',
        badge_2: 'Online und Offline',
        badge_3: 'Für Kinder und Erwachsene',
        btn_cta: 'Termin vereinbaren',
        services_label: 'Leistungen',
        services_title: 'Berufliche Kompetenzen und Dienstleistungen',
        services_subtitle: 'Persönlicher Malunterricht, therapeutische Praktiken, persönliche Beratung auf Anfrage mit Quanteninstrumenten',
        tag_kids: '5–15 Jahre',
        tag_teens: 'ab 10 Jahren',
        tag_all: 'für alle',
        tag_online: 'online',
        tag_consult: 'Beratung',
        tag_individual: 'individuell',
        service_1_title: 'Zeichnen für Kinder',
        service_1_desc: 'Unterricht für Kinder von 5 bis 15 Jahren. Bleistift, Aquarell, Acryl und Entwicklung des kreativen Denkens.',
        service_2_title: 'Ölmalerei',
        service_2_desc: 'Intensiver Unterricht für Jugendliche und Erwachsene mit Vertiefung in die Technik der Ölmalerei. Enthüllung der Geheimnisse und Feinheiten der Erstellung von Gemälden.',
        service_3_title: 'Kunsttherapie',
        service_3_desc: 'Stressabbau und emotionale Harmonisierung durch Kreativität. Für Kinder und Erwachsene.',
        service_4_title: 'Neurographik Online',
        service_4_desc: 'Eine Praxis, die hilft, Anliegen zu bearbeiten und Lösungen durch Zeichnen zu finden. Fern verfügbar.',
        service_5_title: 'Quanten-Astrogenetik',
        service_5_desc: 'Enthüllung des planetaren Potenzials von Kindern und Erwachsenen anhand des Geburtsdatums. Empfehlungen für weitere Bildungsrichtungen und Korrektur möglicher psychologischer Zustände.',
        service_6_title: 'Lichtkarten',
        service_6_desc: 'Quanteninstrument für die Arbeit mit der feinstofflichen Ebene durch persönliche Licht-Metaphern-Legungen. "Die Unbestimmtheit von Ereignissen kann bestimmbar gemacht werden."',
        about_label: 'Über mich',
        about_title: 'Kreativität als Weg zu sich selbst',
        about_p1: 'Ich glaube, dass jedes Kind auf seine Weise talentiert ist, und meine Aufgabe ist es, dieses Talent zu entfalten. Ich unterrichte verschiedene Maltechniken mit einem individuellen Ansatz für jeden Schüler. Ich bringe Kindern bei, mit Bleistift, Acryl und Öl auf Leinwand zu malen, und entwickle kreatives Denken, künstlerische Fähigkeiten und Selbstvertrauen.',
        about_p2: 'Neben der bildenden Kunst biete ich Kunsttherapie und Neurographik für Kinder und Erwachsene an, um Stress abzubauen und das innere Gleichgewicht durch Kreativität wiederherzustellen. Ich berate auch Eltern und enthülle das planetare Potenzial der Kinder anhand ihres Geburtsdatums.',
        quote: '"Jedes Kind ist auf seine Weise talentiert, und ich bin bereit, sein Potenzial zu entfalten."',
        float_years: 'Jahre Erfahrung',
        photo_placeholder: 'Foto der Künstlerin',
        stat_1: 'Jahre kreative Erfahrung',
        stat_2: 'Jahre — Altersgruppe der Schüler',
        stat_3: 'Kunstrichtungen',
        stat_4: 'Beratungssprachen',
        gallery_label: 'Portfolio',
        gallery_title: 'Galerie',
        gallery_subtitle: 'Eigene Arbeiten und kreative Projekte von Schülern in verschiedenen Techniken.',
        gallery_tab_personal: 'Persönlich',
        gallery_tab_students: 'Schüler',
        gallery_tab_neuro: 'Neurographik',
        work_1: 'Werk 1',
        work_2: 'Werk 2',
        work_3: 'Werk 3',
        work_4: 'Werk 4',
        work_5: 'Werk 5',
        work_6: 'Werk 6',
        reviews_label: 'Bewertungen',
        reviews_title: 'Was Schüler und Eltern sagen',
        reviews_subtitle: 'Echte Bewertungen von unseren Schülern und ihren Eltern',
        video_label: 'Präsentationsvideo',
        contact_label: 'Kontakt',
        contact_title: 'Kontaktieren Sie mich',
        contact_subtitle: 'Vereinbaren Sie eine Probestunde, stellen Sie eine Frage oder erfahren Sie mehr über meine Leistungen',
        contact_info_title: 'Kontakt',
        contact_info_text: 'Schreiben oder rufen Sie an — ich antworte zu einer Zeit, die Ihnen passt.',
        form_title: 'Termin vereinbaren',
        form_text: 'Schreiben Sie mir auf Telegram, WhatsApp oder per E-Mail, und wir vereinbaren eine passende Zeit und ein passendes Format.',
        form_note: 'Unterricht und Beratungen finden in Euskirchen, online und auch zu Hause statt. Das erste Kennenlernen kann online als Beratung erfolgen, um die passende Lernmethode oder Kommunikationsform zu wählen.',
        footer_text: '© 2026 Ljudmila Krause. Alle Rechte vorbehalten.',
        gallery_more: 'Mehr Werke',
        moreworks_title: 'Alle Werke — Ljudmila Krause',
        moreworks_heading: 'Alle Werke',
        moreworks_subtitle: 'Die komplette Sammlung von Werken und Schülerprojekten',
        moreworks_empty: 'Noch keine Werke hochgeladen'
    }
};

let currentLang = 'ru';
let db = null;
let currentGalleryCategory = 'personal';

const GALLERY_MORE_URL = 'moreworks.html';
const DB_NAME = 'MilaKrauseDB';
const DB_VERSION = 2;
const IS_MOREWORKS = location.pathname.includes('moreworks');

// ============================================
// СЧЁТЧИКИ КЛИКОВ (сохраняются в localStorage)
// ============================================
function incrementCounter(key) {
    let val = parseInt(localStorage.getItem(key) || '0');
    val++;
    localStorage.setItem(key, val);
    console.log(`[Counter] ${key}: ${val}`);
    return val;
}

function getCounters() {
    return {
        tg_click: parseInt(localStorage.getItem('tg_click') || '0'),
        wa_click: parseInt(localStorage.getItem('wa_click') || '0'),
        email_copy: parseInt(localStorage.getItem('email_copy') || '0')
    };
}

function resetCounters() {
    localStorage.removeItem('tg_click');
    localStorage.removeItem('wa_click');
    localStorage.removeItem('email_copy');
}

// ============================================
// СТАТИЧЕСКИЕ ФАЙЛЫ ДЛЯ ГЛАВНОЙ (6 файлов)
// ============================================
const STATIC_MAIN = {
    personal: [
        { name: '1s.jpg', wide: true },
        { name: '2.jpg', wide: false },
        { name: '3.jpg', wide: false },
        { name: '4.jpg', wide: false },
        { name: '5.jpg', wide: false },
        { name: '6s.jpg', wide: true }
    ],
    students: [
        { name: '11s.jpg', wide: true },
        { name: '22.jpg', wide: false },
        { name: '33.jpg', wide: false },
        { name: '44.jpg', wide: false },
        { name: '55.jpg', wide: false },
        { name: '66s.jpg', wide: true }
    ],
    neuro: [
        { name: '111s.jpg', wide: true },
        { name: '222.jpg', wide: false },
        { name: '333.jpg', wide: false },
        { name: '444.jpg', wide: false },
        { name: '555.jpg', wide: false },
        { name: '666s.jpg', wide: true }
    ]
};

// ============================================
// СТАТИЧЕСКИЕ ФАЙЛЫ ДЛЯ MOREWORKS (по 20 дополнительных)
// ============================================
const MAX_STATIC_MORE = 20;
const STATIC_MORE = {
    personal: Array.from({ length: MAX_STATIC_MORE }, (_, i) => ({
        name: `lic${i + 1}.jpg`,
        wide: (i % 5 === 0)
    })),
    students: Array.from({ length: MAX_STATIC_MORE }, (_, i) => ({
        name: `ych${i + 1}.jpg`,
        wide: (i % 5 === 0)
    })),
    neuro: Array.from({ length: MAX_STATIC_MORE }, (_, i) => ({
        name: `neiro${i + 1}.jpg`,
        wide: (i % 5 === 0)
    }))
};

// Комбинированный список для moreworks (сначала основные 6, потом доп. 20)
function getMoreStatic(category) {
    const main = STATIC_MAIN[category] || [];
    const extra = STATIC_MORE[category] || [];
    return [...main, ...extra];
}

const STATIC_ABOUT_PHOTO = 'images/main.jpg';

// ============================================
// ОТЗЫВЫ – ТЕПЕРЬ ЭТО ИЗОБРАЖЕНИЯ
// (старые текстовые отзывы больше не используются)
// ============================================

// ============================================
// RENDER REVIEWS (изображения rev1, rev2, rev3, rev4)
// ============================================
function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const imageNames = ['rev1', 'rev2', 'rev3', 'rev4', 'rev5', 'rev6'];

    imageNames.forEach((name, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';

        const img = document.createElement('img');
        img.alt = `Отзыв ${index + 1}`;
        img.loading = 'lazy';

        tryLoadImage(img, name, ['jpg', 'png', 'jpeg'], () => {
            const placeholder = document.createElement('div');
            placeholder.className = 'review-placeholder';
            placeholder.textContent = `Отзыв ${index + 1}`;
            card.innerHTML = '';
            card.appendChild(placeholder);
        });

        card.appendChild(img);
        grid.appendChild(card);
    });
}

// Вспомогательная функция для последовательной попытки загрузки
function tryLoadImage(imgElement, baseName, extensions, onFail) {
    let extIndex = 0;

    function tryNext() {
        if (extIndex >= extensions.length) {
            if (typeof onFail === 'function') onFail();
            return;
        }
        const ext = extensions[extIndex];
        imgElement.src = `images/${baseName}.${ext}`;
        extIndex++;
        // Обработчик ошибки будет срабатывать, если файл не найден
        imgElement.onerror = function() {
            // Очищаем onerror, чтобы не зациклиться
            imgElement.onerror = null;
            tryNext();
        };
        // Если загрузилось успешно – onerror не вызовется
        imgElement.onload = function() {
            // Всё хорошо
        };
    }

    tryNext();
}

// ============================================
// VIDEO THEME SWITCH
// ============================================
function updateVideoSource() {
    const video = document.getElementById('aboutVideo');
    const source = document.getElementById('videoSource');
    if (!video || !source) return;
    
    const isDark = document.body.classList.contains('dark-theme');
    source.src = isDark ? 'images/movie2.mp4' : 'images/movie1.mp4';
    video.load();
}

function openDB() {
    return new Promise((resolve, reject) => {
        if (db && db.name === DB_NAME) {
            resolve(db);
            return;
        }
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains('photos')) {
                database.createObjectStore('photos');
            }
        };
    });
}

function dbGet(key) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readonly');
        const store = tx.objectStore('photos');
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

function dbSet(key, value) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readwrite');
        const store = tx.objectStore('photos');
        const req = store.put(value, key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

function dbDelete(key) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readonly');
        const store = tx.objectStore('photos');
        const req = store.delete(key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

async function getGallery(category) {
    const key = 'gallery_' + category;
    const data = await dbGet(key);
    return Array.isArray(data) ? data : [];
}

async function setGallery(category, items) {
    const key = 'gallery_' + category;
    await dbSet(key, items);
}

async function getAboutPhoto() {
    return await dbGet('about_photo') || null;
}

async function setAboutPhoto(data) {
    await dbSet('about_photo', data);
}

async function deleteAboutPhoto() {
    await dbDelete('about_photo');
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ============================================
// Render Gallery (главная)
// ============================================
async function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    const tabsWrap = document.getElementById('galleryTabsWrap');
    const moreWrap = document.getElementById('galleryMoreWrap');
    if (!grid) return;
    grid.innerHTML = '';
    if (moreWrap) moreWrap.innerHTML = '';

    if (tabsWrap) {
        const t = translations[currentLang];
        tabsWrap.innerHTML = `
            <div class="gallery-tabs">
                <button class="gallery-tab active" data-category="personal">${t.gallery_tab_personal || '🎨 Личная'}</button>
                <button class="gallery-tab" data-category="students">${t.gallery_tab_students || '👨‍🎓 Ученики'}</button>
                <button class="gallery-tab" data-category="neuro">${t.gallery_tab_neuro || '✏️ Нейрографика'}</button>
            </div>
        `;
        tabsWrap.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.addEventListener('click', async function() {
                tabsWrap.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const gridEl = document.getElementById('galleryGrid');
                if (gridEl) {
                    gridEl.classList.add('switching');
                    await new Promise(r => setTimeout(r, 250));
                    currentGalleryCategory = this.dataset.category;
                    await renderGalleryItems();
                    gridEl.classList.remove('switching');
                } else {
                    currentGalleryCategory = this.dataset.category;
                    await renderGalleryItems();
                }
            });
        });
    }

    await renderGalleryItems();
}

async function renderGalleryItems() {
    const grid = document.getElementById('galleryGrid');
    const moreWrap = document.getElementById('galleryMoreWrap');
    if (!grid) return;
    grid.innerHTML = '';
    if (moreWrap) moreWrap.innerHTML = '';

    let items = [];
    if (db) {
        try { items = await getGallery(currentGalleryCategory); } catch(e) { console.warn('Gallery load error:', e); }
    }

    // Используем STATIC_MAIN для главной страницы
    const staticItems = STATIC_MAIN[currentGalleryCategory] || [];
    const hasStatic = staticItems.length > 0;

    if (items.length === 0 && hasStatic) {
        staticItems.forEach((file, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item' + (file.wide ? ' gallery-item-wide' : '');
            const img = document.createElement('img');
            img.src = `images/${file.name}`;
            img.alt = `Работа ${index + 1}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            img.style.borderRadius = 'inherit';
            img.onerror = function() {
                this.parentElement.innerHTML = `
                    <div class="gallery-placeholder">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                        </svg>
                        <span>${translations[currentLang]['work_' + (index + 1)] || 'Работа ' + (index + 1)}</span>
                    </div>
                `;
            };
            div.appendChild(img);
            grid.appendChild(div);
        });
        if (!IS_MOREWORKS && hasStatic && moreWrap) {
            const btn = document.createElement('a');
            btn.className = 'btn btn-primary gallery-more-btn';
            btn.href = GALLERY_MORE_URL;
            btn.textContent = translations[currentLang].gallery_more || 'Больше работ';
            moreWrap.appendChild(btn);
        }
        return;
    }

    if (items.length > 0) {
        items.forEach((item) => {
            const div = document.createElement('div');
            div.className = 'gallery-item' + (item.wide ? ' gallery-item-wide' : '');
            const alt = currentLang === 'ru' ? (item.alt_ru || '') : (item.alt_de || '');
            if (item.data) {
                const img = document.createElement('img');
                img.src = item.data;
                img.alt = alt;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.display = 'block';
                img.style.borderRadius = 'inherit';
                img.onerror = function() {
                    this.parentElement.innerHTML = `
                        <div class="gallery-placeholder">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <path d="M21 15l-5-5L5 21"/>
                            </svg>
                            <span>${alt}</span>
                        </div>
                    `;
                };
                div.appendChild(img);
            } else {
                div.innerHTML = `
                    <div class="gallery-placeholder">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                        </svg>
                        <span>${alt}</span>
                    </div>
                `;
            }
            grid.appendChild(div);
        });

        if (!IS_MOREWORKS && moreWrap) {
            const btn = document.createElement('a');
            btn.className = 'btn btn-primary gallery-more-btn';
            btn.href = GALLERY_MORE_URL;
            btn.textContent = translations[currentLang].gallery_more || 'Больше работ';
            moreWrap.appendChild(btn);
        }
        return;
    }

    // fallback (если нет статических и нет данных) – используем те же 6
    const defaults = [
        { wide: true }, { wide: false }, { wide: false },
        { wide: false }, { wide: false }, { wide: true }
    ];
    defaults.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item' + (item.wide ? ' gallery-item-wide' : '');
        const alt = translations[currentLang]['work_' + (index + 1)] || ('Work ' + (index + 1));
        div.innerHTML = `
            <div class="gallery-placeholder">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                </svg>
                <span>${alt}</span>
            </div>
        `;
        grid.appendChild(div);
    });
}

// ============================================
// Render About Photo (с fallback на main.jpg)
// ============================================
async function renderAboutPhoto() {
    const frame = document.getElementById('aboutFrame');
    if (!frame) return;

    let photo = null;
    if (db) {
        try { 
            photo = await getAboutPhoto(); 
        } catch(e) { 
            console.warn('About photo load error:', e); 
        }
    }
    const t = translations[currentLang];
    const alt = currentLang === 'ru' ? 'Фото художника' : 'Foto der Künstlerin';

    if (photo && photo.data) {
        const img = document.createElement('img');
        img.src = photo.data;
        img.alt = alt;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.display = 'block';
        img.style.borderRadius = 'inherit';
        img.onerror = function() {
            this.parentElement.innerHTML = `
                <div class="about-placeholder">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span data-i18n="photo_placeholder">${t.photo_placeholder}</span>
                </div>
            `;
        };
        frame.innerHTML = '';
        frame.appendChild(img);
        return;
    }

    const img = document.createElement('img');
    img.src = STATIC_ABOUT_PHOTO;
    img.alt = alt;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.display = 'block';
    img.style.borderRadius = 'inherit';
    img.onerror = function() {
        this.parentElement.innerHTML = `
            <div class="about-placeholder">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
                <span data-i18n="photo_placeholder">${t.photo_placeholder}</span>
            </div>
        `;
    };
    frame.innerHTML = '';
    frame.appendChild(img);
}

// ============================================
// Render More Works (с удалением отсутствующих файлов)
// ============================================
async function renderMoreWorks() {
    const grid = document.getElementById('moreworksGrid');
    const empty = document.getElementById('moreworksEmpty');
    const tabsWrap = document.getElementById('moreworksTabsWrap');
    if (!grid) return;
    grid.innerHTML = '';

    if (tabsWrap) {
        const t = translations[currentLang];
        tabsWrap.innerHTML = `
            <div class="gallery-tabs moreworks-tabs">
                <button class="gallery-tab active" data-category="personal">${t.gallery_tab_personal || '🎨 Личная'}</button>
                <button class="gallery-tab" data-category="students">${t.gallery_tab_students || '👨‍🎓 Ученики'}</button>
                <button class="gallery-tab" data-category="neuro">${t.gallery_tab_neuro || '✏️ Нейрографика'}</button>
            </div>
        `;
        tabsWrap.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.addEventListener('click', async function() {
                tabsWrap.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const gridEl = document.getElementById('moreworksGrid');
                if (gridEl) {
                    gridEl.classList.add('switching');
                    await new Promise(r => setTimeout(r, 250));
                    currentGalleryCategory = this.dataset.category;
                    await renderMoreWorksItems();
                    gridEl.classList.remove('switching');
                } else {
                    currentGalleryCategory = this.dataset.category;
                    await renderMoreWorksItems();
                }
            });
        });
    }

    await renderMoreWorksItems();
}

async function renderMoreWorksItems() {
    const grid = document.getElementById('moreworksGrid');
    const empty = document.getElementById('moreworksEmpty');
    if (!grid) return;
    grid.innerHTML = '';

    let items = [];
    if (db) {
        try { items = await getGallery(currentGalleryCategory); } catch(e) { console.warn('MoreWorks load error:', e); }
    }

    // Для moreworks используем комбинированный список: сначала основные 6, затем дополнительные 20
    const staticItems = getMoreStatic(currentGalleryCategory);

    if (items.length === 0 && staticItems.length > 0) {
        if (empty) empty.classList.remove('show');
        let addedCount = 0;
        staticItems.forEach((file, idx) => {
            const div = document.createElement('div');
            div.className = 'moreworks-item';
            const alt = translations[currentLang]['work_' + (idx + 1)] || ('Работа ' + (idx + 1));
            const img = document.createElement('img');
            img.src = `images/${file.name}`;
            img.alt = alt;
            img.loading = 'lazy';
            img.style.width = '100%';
            img.style.aspectRatio = '1';
            img.style.objectFit = 'cover';
            // Если изображение не загрузилось – удаляем весь элемент
            img.onerror = function() {
                div.remove();
                // Проверяем, не стал ли grid пустым после удаления
                if (grid.children.length === 0 && empty) {
                    empty.classList.add('show');
                }
            };
            div.appendChild(img);
            const caption = document.createElement('div');
            caption.className = 'moreworks-caption';
            caption.innerHTML = `
                <span class="moreworks-num">#${idx + 1}</span>
                <span class="moreworks-name">${alt}</span>
            `;
            div.appendChild(caption);
            grid.appendChild(div);
            addedCount++;
        });
        // Если после добавления всех элементов не осталось ни одного (все удалены)
        if (grid.children.length === 0 && empty) {
            empty.classList.add('show');
        }
        return;
    }

    if (items.length === 0) {
        if (empty) empty.classList.add('show');
        return;
    }
    if (empty) empty.classList.remove('show');

    items.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'moreworks-item';
        const alt = currentLang === 'ru' ? (item.alt_ru || ('Работа ' + (idx + 1))) : (item.alt_de || ('Werk ' + (idx + 1)));
        if (item.data) {
            const img = document.createElement('img');
            img.src = item.data;
            img.alt = alt;
            img.loading = 'lazy';
            img.style.width = '100%';
            img.style.aspectRatio = '1';
            img.style.objectFit = 'cover';
            img.onerror = function() {
                div.remove();
                if (grid.children.length === 0 && empty) {
                    empty.classList.add('show');
                }
            };
            div.appendChild(img);
            const caption = document.createElement('div');
            caption.className = 'moreworks-caption';
            caption.innerHTML = `
                <span class="moreworks-num">#${idx + 1}</span>
                <span class="moreworks-name">${alt}</span>
            `;
            div.appendChild(caption);
        } else {
            // Если данных нет – не создаём ячейку
            return;
        }
        grid.appendChild(div);
    });
}

function setLanguage(lang, animate = true) {
    currentLang = lang;
    const t = translations[lang];

    if (animate) {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.2s ease';

        setTimeout(() => {
            applyTranslations(t, lang);
            if (IS_MOREWORKS) {
                renderMoreWorks();
            } else {
                renderGallery();
                renderAboutPhoto();
                renderReviews();
                updateVideoSource();
            }
            document.body.style.opacity = '1';
        }, 200);
    } else {
        applyTranslations(t, lang);
        if (IS_MOREWORKS) {
            renderMoreWorks();
        } else {
            renderGallery();
            renderAboutPhoto();
            renderReviews();
            updateVideoSource();
        }
    }
}

function applyTranslations(t, lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.title = t.title;
    document.documentElement.lang = lang;

    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    localStorage.setItem('lang', lang);
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateVideoSource();
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark-theme');
    updateVideoSource();
}

// ============================================
// КОПИРОВАНИЕ EMAIL (рабочий вариант)
// ============================================
function copyEmail(e) {
    e.preventDefault();
    const email = 'ludmilakrause900@gmail.com';
    
    // Пробуем через clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
            showTooltip('Скопировано!');
            incrementCounter('email_copy');
        }).catch(() => {
            fallbackCopyEmail(email);
        });
    } else {
        fallbackCopyEmail(email);
    }
}

function fallbackCopyEmail(email) {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        const success = document.execCommand('copy');
        if (success) {
            showTooltip('Скопировано!');
            incrementCounter('email_copy');
        } else {
            alert('Не удалось скопировать. Скопируйте вручную: ' + email);
        }
    } catch (err) {
        alert('Не удалось скопировать. Скопируйте вручную: ' + email);
    }
    document.body.removeChild(textarea);
}

function showTooltip(text) {
    const tooltip = document.getElementById('emailTooltip');
    if (tooltip) {
        tooltip.textContent = currentLang === 'ru' ? text : 'Kopiert!';
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 2000);
    }
}

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', async function() {
    try {
        let views = parseInt(localStorage.getItem('mila_page_views') || '0');
        localStorage.setItem('mila_page_views', (views + 1).toString());
    } catch(e) {}

    initTheme();
    try { await openDB(); } catch(e) { console.warn('IndexedDB недоступен:', e); }

    if (IS_MOREWORKS) {
        await renderMoreWorks();
    } else {
        await renderGallery();
        await renderAboutPhoto();
        renderReviews();
    }

    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== currentLang) {
        setLanguage(savedLang, false);
    }

    const langSwitch = document.getElementById('langSwitch');
    const langMenu = document.getElementById('langMenu');

    if (langSwitch && langMenu) {
        langSwitch.addEventListener('click', function(e) {
            e.stopPropagation();
            langSwitch.classList.toggle('open');
            langMenu.classList.toggle('open');
        });

        document.addEventListener('click', function() {
            langSwitch.classList.remove('open');
            langMenu.classList.remove('open');
        });

        langMenu.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                if (lang !== currentLang) {
                    setLanguage(lang, true);
                }
                langSwitch.classList.remove('open');
                langMenu.classList.remove('open');
            });
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            const spans = menuToggle.querySelectorAll('span');
            if (nav.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    if (!IS_MOREWORKS) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            });
        });

        const heroScroll = document.querySelector('.hero-scroll');
        if (heroScroll) {
            heroScroll.addEventListener('click', () => {
                const services = document.getElementById('services');
                if (services) services.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }
});
