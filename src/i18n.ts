import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            certificates: 'Certificates',
            pricing: 'Pricing',
            payment: 'Payment',
            contact: 'Contact',
            get_project: 'Get a Project'
          },
          home: {
            hero_tag: 'Premium Digital Product Creator',
            hero_title: 'I Build <0>Smart</0> Digital <2 /> Products That <1>Grow</1> <2 /> Your Business',
            hero_desc: 'Professional portfolio of Mukharram Rasuleva — Founder, CEO, and Senior Product Developer specializing in AI integration and scalable systems.',
            cta_view_work: 'View My Work',
            cta_contact: 'Contact Me',
            expertise_tag: 'Expertise',
            expertise_title: 'Solutions Built For Performance',
            expertise_desc: 'Every digital product is designed to solve a specific business problem, whether it\'s efficiency, conversion, or scale.',
            ai_title: 'Intelligence, Trust, <1 /> and Modern <0>AI Expertise</0>',
            ai_desc1_title: 'Confidence & Results',
            ai_desc1: 'Strategic AI solutions designed to automate complexity and unlock hidden growth potential in your existing business model.',
            ai_desc2_title: 'High-End Performance',
            ai_desc2: 'End-to-end security and high-performance engineering to ensure your systems remain reliable and future-proof.',
            cta_ready: 'If Your Business <0>Isn’t Scaling</0>, Your <1>Systems Are Failing</1>',
            cta_ready_desc: 'I help businesses implement smart technology — AI, automation, and custom platforms — to eliminate bottlenecks and accelerate growth.',
            client_satisfaction: 'Client Satisfaction'
          },
          about: {
            story_tag: 'The Story',
            hero_title: 'A Premium Mindset For <0>Complex Code</0>',
            hero_desc: 'My journey started with a fascination for logic and grew into a mission: building luxury-level digital products for founders who value speed, intelligence, and execution.',
            quote: '"I don’t just build code — I build systems that make money and save time."',
            execution_title: 'Execution & Consistency',
            execution_desc: 'From an ambitious IT student to a trusted product builder for global entrepreneurs.',
            timeline: {
              student: { title: 'Graduate IT Student', period: 'THE ACADEMIC BASE', desc: 'Final-year IT student at TMC Institute in partnership with Cardiff Metropolitan University (UK). Built a strong academic and practical foundation in computer science, algorithms, and system design.' },
              dev: { title: 'Developer', period: 'THE PRACTITIONER', desc: 'Developing real-world web applications, automation systems, and cross-platform solutions. Focused on building efficient, scalable, and production-ready software.' },
              builder: { title: 'Product Builder', period: 'THE BUILDER', desc: 'Designing complete digital products from concept to deployment. Gained international experience in AI development through a technology program in China (2025).' }
            },
            tech_stack_title: 'Advanced Tech <br /> Stack & Strategy',
            tech_stack_desc: 'I specialize in high-impact technologies that allow for rapid scaling and intelligent automation.'
          },
          services: {
            hero_tag: 'Solutions',
            hero_title: 'Digital <0>Power</0> For <1 /> Global Growth',
            hero_desc: 'I don\'t just build code — I build systems that make money and save time. Every service is a strategic investment into your brand\'s future.',
            order_now: 'Order Now',
            free_quote: 'Get Free Quote',
            philosophy_quote: '"Strategy beats code every single time."',
            philosophy_desc: 'I don’t accept every project. I work with founders who are ready to build something that lasts. If you value quality and long-term vision, we’re a perfect match.',
            ai: {
              title: 'AI-Powered Websites',
              category: 'Intelligence',
              desc: '“A website that works for you 24/7 using AI automation”',
              pricing: '$1,500 – $3,500'
            },
            standard: {
              title: 'Standard Websites',
              category: 'Performance',
              desc: 'Clean, fast, and high-converting business sites tailored to your brand.',
              pricing: '$500 – $1,200'
            },
            bots: {
              title: 'Telegram Bots & Automation',
              category: 'Efficiency',
              desc: 'Automate customer support, sales, and internal workflows seamlessly.',
              pricing: '$300 – $1,000'
            },
            mobile: {
              title: 'Mobile Apps (Flutter)',
              category: 'Experience',
              desc: 'Cross-platform mobile solutions with pixel-perfect modern UI.',
              pricing: '$1,500+'
            },
            ecommerce: {
              title: 'E-commerce Systems',
              category: 'Commerce',
              desc: 'Full online store systems with robust payment and admin logic.',
              pricing: '$1,500 – $4,000'
            }
          },
          certificates: {
            hero_tag: 'Validation',
            hero_title: 'Professional <br /> Showcase <0>Gallery</0>',
            hero_desc: 'A collection of verified achievements across digital architecture, AI integration, and core development frameworks.',
            verify: 'Verify Credentials',
            looking_skill: 'Looking for a specific skill set?',
            skill_desc: 'I\'m constantly evolving. If your project requires niche expertise, reach out for a full technical discussion.',
            request_pdf: 'Request Portfolio PDF'
          },
          pricing: {
            hero_tag: 'Investment',
            hero_title: 'Clear & <br /> <0>Transparent</0> Pricing',
            hero_desc: 'Choose the tier that matches your current scale. Every investment is focused on increasing your efficiency and brand value.',
            recommended: 'Best for growing businesses',
            usd: 'USD',
            faq_title: 'Frequently Asked Questions',
            tiers: {
              start: {
                name: 'Start',
                price: '$300 – $700',
                desc: 'Perfect for new ventures and personal brands.',
                cta: 'Launch My Website',
                features: ['Single Page Landing', 'Mobile-First Optimization', 'Telegram Integration', 'Basic SEO Setup', 'High Performance']
              },
              growth: {
                name: 'Growth',
                price: '$1,200 – $2,500',
                desc: 'The popular choice for expanding businesses.',
                cta: 'Grow My Business',
                tag: 'Popular Choice',
                features: ['Multi-page Platform', 'Payment Systems (Payme/Click)', 'Advanced CRM Integration', 'Telegram Automation', 'Marketing Analytics']
              },
              scale: {
                name: 'Scale',
                price: '$2,500 – $5,000+',
                desc: 'For brands ready to dominate their market.',
                cta: 'Scale My System',
                features: ['Full Business Ecosystem', 'AI Implementation', 'Custom Database Logic', 'Scalable Architecture', 'Priority Strategy']
              },
              enterprise: {
                name: 'Enterprise',
                price: 'Custom',
                desc: 'Bespoke solutions for global operations.',
                cta: 'Contact for Global Solution',
                features: ['Unlimited Scalability', 'Bespoke AI Workflows', '24/7 Dedicated Support', 'Maximum Security Audit', 'Full White-label']
              }
            },
            faqs: {
              q1: 'How long does a project take?',
              a1: 'Start projects usually take 1-2 weeks. Growth and Scale projects average 4-8 weeks for full delivery and testing.',
              q2: 'Do you offer local payment support?',
              a2: 'Yes, I specialize in integrating Uzbekistan-specific payment gateways like Payme and Click for seamless local transactions.'
            }
          },
          contact: {
            hero_tag: 'Inquiry',
            hero_title: 'Let\'s Build Something <0>Powerful</0> Together.',
            hero_desc: 'Serious inquiries only. If you\'re ready to invest in a premium digital outcome, fill out the form or reach out directly via Telegram.',
            telegram_title: 'Fast Lane: Telegram',
            telegram_desc: 'Instant feedback & quick discussions',
            email_desc: 'Official business documentation',
            form: {
              name: 'Full Name',
              name_placeholder: 'Enter your name',
              email: 'Email Address',
              email_placeholder: 'name@company.com',
              project_type: 'Project Type',
              vision: 'Your Vision',
              vision_placeholder: 'Tell me about your goals and current business scale.',
              submit: 'Start Collaboration',
              sending: 'Sending...'
            },
            whatsapp_title: 'Fast Lane: WhatsApp',
            whatsapp_desc: 'Instant message & quick support',
            success: {
              title: 'Message Received.',
              desc: 'I value high-end communication. You can expect a response within 12 hours.',
              another: 'Send Another Message'
            }
          },
          footer: {
            tagline: 'Building smart digital products that grow your business. Luxury development for startups and brands who demand the best.',
            links: {
              title: 'Quick Links',
              about: 'About Me',
              services: 'Services',
              pricing: 'Pricing',
              certificates: 'Certificates'
            },
            contact: {
              title: 'Contact',
              available: 'Available for projects worldwide.'
            },
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
          },
          payment: {
            hero_tag: 'Secure Payment',
            hero_title: 'Infrastructure & <0>Gateway</0> Setup',
            hero_desc: 'Complete your initial deposit or infrastructure fee using our secure local payment detail.',
            card_title: 'Humo Payment Card',
            card_holder: 'Card Holder',
            card_number: 'Card Number',
            copy_success: 'Copied to clipboard',
            instruction_title: 'How it works',
            instruction_step1: 'Complete the transfer using Payme, Click, or your preferred banking app.',
            instruction_step2: 'Take a screenshot of the successful transaction.',
            instruction_step3: 'Send the screenshot to my Telegram to finalize the setup.'
          }
        }
      },
      uz: {
        translation: {
          nav: {
            home: 'Asosiy',
            about: 'Biz haqimizda',
            services: 'Xizmatlar',
            certificates: 'Sertifikatlar',
            pricing: 'Narxlar',
            payment: 'To\'lov',
            contact: 'Aloqa',
            get_project: 'Loyiha boshlang'
          },
          home: {
            hero_tag: 'Premium raqamli mahsulotlar yaratuvchisi',
            hero_title: 'Men biznesingizni <1>Rivojlantiruvchi</1> <2 /> <0>Aqlli</0> raqamli <2 /> mahsulotlar quraman',
            hero_desc: 'Muxarram Rasuleva — Muassis, bosh direktor va AI integratsiyasi hamda kengayuvchan tizimlar bo\'yicha katta mahsulot ishlab chiquvchisining professional portfoliosi.',
            cta_view_work: 'Ishlarimni ko\'ring',
            cta_contact: 'Men bilan bog\'laning',
            expertise_tag: 'Tajriba',
            expertise_title: 'Samaradorlik uchun qurilgan yechimlar',
            expertise_desc: 'Har bir raqamli mahsulot muayyan biznes muammosini hal qilish uchun mo\'ljallangan — xoh u samaradorlik, xoh konversiya yoki o\'sish bo\'lsin.',
            ai_title: 'Intellekt, Ishonch <1 /> va Zamonaviy <0>AI Tajribasi</0>',
            ai_desc1_title: 'Ishonch va Natijalar',
            ai_desc1: 'Murakkablikni avtomatlashtirish va biznesingizdagi yashirin o\'sish salohiyatini ochish uchun mo\'ljallangan strategik AI yechimlari.',
            ai_desc2_title: 'Yuqori samaradorlik',
            ai_desc2: 'Tizimlaringiz ishonchli va kelajakka chidamli bo\'lishini ta\'minlash uchun xavfsiz va yuqori samarali muhandislik.',
            cta_ready: 'Agar biznesingiz <0>kengaymayotgan bo\'lsa</0>, tizimlaringiz <1>ishdan chiqmoqda</1>',
            cta_ready_desc: 'Men bizneslarga to\'siqlarni bartaraf etish va o\'sishni tezlashtirish uchun aqlli texnologiyalarni — AI, avtomatlashtirish va maxsus platformalarni joriy qilishda yordam beraman.',
            client_satisfaction: 'Mijozlar mamnuniyati'
          },
          about: {
            story_tag: 'Hikoya',
            hero_title: '<0>Murakkab Kod</0> Uchun Premium Dunyoqarash',
            hero_desc: 'Mening sayohatim mantiqqa bo\'lgan qiziqishdan boshlandi va missiyaga aylandi: tezlik, intellekt va ijroni qadrlaydigan asoschilar uchun hashamatli darajadagi raqamli mahsulotlar yaratish.',
            quote: '"Men shunchaki kod yozmayman — men pul keltiradigan va vaqtni tejaydigan tizimlar quraman."',
            execution_title: 'Ijro va Doimiylik',
            execution_desc: 'Intiluvchan IT talabasidan global tadbirkorlar uchun ishonchli mahsulot yaratuvchisigacha.',
            timeline: {
              student: { title: 'IT Bitiruvchisi', period: 'AKADEMIK ASOS', desc: 'Cardiff Metropolitan University (Buyuk Britaniya) bilan hamkorlikdagi TMC institutining yakuniy bosqich talabasi. Kompyuter fanlari, algoritmlar va tizim dizayni bo\'yicha kuchli akademik va amaliy poydevor qurilgan.' },
              dev: { title: 'Dasturchi', period: 'AMALIYOTCHI', desc: 'Real dunyo veb-ilovalari, avtomatlashtirish tizimlari va kross-platforma yechimlarini ishlab chiqish. Samarali, kengaytiriladigan va ishlab chiqarishga tayyor dasturiy ta\'minot yaratishga e\'tibor qaratilgan.' },
              builder: { title: 'Mahsulot Yaratuvchisi', period: 'QURUVCHI', desc: 'Konsepsiyadan to foydalanishgacha bo\'lgan to\'liq raqamli mahsulotlarni loyihalash. Xitoydagi texnologiya dasturi orqali sun\'iy intellektni ishlab chiqishda xalqaro tajribaga ega bo\'lingan (2025).' }
            },
            tech_stack_title: 'Ilg\'or Texnologiyalar <br /> va Strategiya',
            tech_stack_desc: 'Men tezkor kengayish va aqlli avtomatlashtirishga imkon beruvchi yuqori natijali texnologiyalarga ixtisoslashganman.'
          },
          services: {
            hero_tag: 'Yechimlar',
            hero_title: 'Global O\'sish Uchun <1 /> Raqamli <0>Kuch</0>',
            hero_desc: 'Men shunchaki kod yozmayman — men pul keltiradigan va vaqtni tejaydigan tizimlar quraman. Har bir xizmat brendingiz kelajagiga strategik sarmoyadir.',
            order_now: 'Hozir buyurtma bering',
            free_quote: 'Bepul narxni oling',
            philosophy_quote: '"Strategiya har doim koddan ustun turadi."',
            philosophy_desc: 'Men hamma loyihani ham qabul qilmayman. Men uzoq vaqt xizmat qiladigan narsani yaratishga tayyor asoschilar bilan ishlayman. Agar siz sifat va uzoq muddatli vizyonni qadrlasangiz, biz mukammal mosmiz.',
            ai: {
              title: 'AI bilan ishlaydigan veb-saytlar',
              category: 'Intellekt',
              desc: '“AI avtomatizatsiyasi orqali siz uchun 24/7 ishlaydigan veb-sayt”',
              pricing: '$1,500 – $3,500'
            },
            standard: {
              title: 'Standart veb-saytlar',
              category: 'Samaradorlik',
              desc: 'Brendingizga moslashtirilgan toza, tezkor va yuqori konversiyali biznes saytlari.',
              pricing: '$500 – $1,200'
            },
            bots: {
              title: 'Telegram botlari va avtomatlashtirish',
              category: 'Tejamkorlik',
              desc: 'Mijozlarni qo\'llab-quvvatlash, sotish va ichki ish jarayonlarini to\'siqlarsiz avtomatlashtiring.',
              pricing: '$300 – $1,000'
            },
            mobile: {
              title: 'Mobil ilovalar (Flutter)',
              category: 'Tajriba',
              desc: 'Piksel darajasida mukammal zamonaviy UI bilan kross-platforma mobil yechimlari.',
              pricing: '$1,500+'
            },
            ecommerce: {
              title: 'E-tijorat tizimlari',
              category: 'Tijorat',
              desc: 'To\'lov va admin mantiqiga ega to\'liq onlayn do\'kon tizimlari.',
              pricing: '$1,500 – $4,000'
            }
          },
          certificates: {
            hero_tag: 'Tasdiqlash',
            hero_title: 'Professional <br /> <0>Gallereya</0> Ko\'rgazmasi',
            hero_desc: 'Raqamli arxitektura, AI integratsiyasi va asosiy ishlab chiqish freymvorklari bo\'yicha tasdiqlangan yutuqlar to\'plami.',
            verify: 'Sertifikatni tasdiqlash',
            looking_skill: 'Muayyan ko\'nikmalar to\'plamini qidiryapsizmi?',
            skill_desc: 'Men doimiy rivojlanib boraman. Agar loyihangiz maxsus tajribani talab qilsa, to\'liq texnik muhokama uchun bog\'laning.',
            request_pdf: 'Portfolio PDF ni so\'rash'
          },
          pricing: {
            hero_tag: 'Sarmoya',
            hero_title: 'Aniq va <br /> <0>Shaffof</0> Narxlar',
            hero_desc: 'Hozirgi ko\'lamingizga mos keladigan darajani tanlang. Har bir sarmoya samaradorligingizni va brend qiymatini oshirishga qaratilgan.',
            recommended: 'O\'sib borayotgan bizneslar uchun eng yaxshisi',
            usd: 'USD',
            faq_title: 'Ko\'p beriladigan savollar',
            tiers: {
              start: {
                name: 'Start',
                price: '$300 – $700',
                desc: 'Yangi korxonalar va shaxsiy brendlar uchun mukammal.',
                cta: 'Veb-saytimni ishga tushirish',
                features: ['Bir sahifalik Landing', 'Mobil-birinchi optimallashtirish', 'Telegram integratsiyasi', 'Asosiy SEO sozlamalari', 'Yuqori samaradorlik']
              },
              growth: {
                name: 'Growth',
                price: '$1,200 – $2,500',
                desc: 'Kengayib borayotgan bizneslar uchun ommabop tanlov.',
                cta: 'Biznesimni rivojlantirish',
                tag: 'Ommabop tanlov',
                features: ['Ko\'p sahifali platforma', 'To\'lov tizimlari (Payme/Click)', 'Kengaytirilgan CRM integratsiyasi', 'Telegram avtomatlashtirish', 'Marketing tahlillari']
              },
              scale: {
                name: 'Scale',
                price: '$2,500 – $5,000+',
                desc: 'O\'z bozorida ustunlik qilishga tayyor brendlar uchun.',
                cta: 'Tizimimni kengaytirish',
                features: ['To\'liq biznes ekotizimi', 'AI joriy etish', 'Maxsus ma\'lumotlar bazasi mantig\'i', 'Kengayuvchan arxitektura', 'Ustuvor strategiya']
              },
              enterprise: {
                name: 'Enterprise',
                price: 'Maxsus',
                desc: 'Global operatsiyalar uchun maxsus yechimlar.',
                cta: 'Global yechim uchun bog\'laning',
                features: ['Cheksiz kengayuvchanlik', 'Maxsus AI ish jarayonlari', '24/7 maxsus yordam', 'Maksimal havfsizlik auditi', 'To\'liq oq yorliq']
              }
            },
            faqs: {
              q1: 'Loyiha qancha vaqt oladi?',
              a1: 'Start loyihalari odatda 1-2 hafta davom etadi. Growth va Scale loyihalari to\'liq yetkazib berish va sinovdan o\'tkazish uchun o\'rtacha 4-8 hafta davom etadi.',
              q2: 'Mahalliy to\'lov tizimlarini qo\'llab-quvvatlaysizmi?',
              a2: 'Ha, men uzluksiz mahalliy tranzaksiyalar uchun Payme va Click kabi O\'zbekiston uchun xos to\'lov shlyuzlarini integratsiya qilishga ixtisoslashganman.'
            }
          },
          contact: {
            hero_tag: 'So\'rov',
            hero_title: 'Keling, Birgalikda <0>Kuchli</0> Narsa Quraylik.',
            hero_desc: 'Faqat jiddiy so\'rovlar uchun. Agar siz premium raqamli natijaga sarmoya kiritishga tayyor bo\'lsangiz, shaklni to\'ldiring yoki to\'g\'ridan-to\'g\'ri Telegram orqali bog\'laning.',
            telegram_title: 'Tez yo\'l: Telegram',
            telegram_desc: 'Tezkor fikr-mulohazalar va tezkor muhokamalar',
            email_desc: 'Rasmiy biznes hujjatlari',
            form: {
              name: 'To\'liq ismingiz',
              name_placeholder: 'Ismingizni kiriting',
              email: 'Elektron pochta manzili',
              email_placeholder: 'name@company.com',
              project_type: 'Loyiha turi',
              vision: 'Sizning vizyoningiz',
              vision_placeholder: 'Maqsadlaringiz va hozirgi biznes ko\'lamingiz haqida gapirib bering.',
              submit: 'Hamkorlikni boshlash',
              sending: 'Yuborilmoqda...'
            },
            whatsapp_title: 'Tez yo\'l: WhatsApp',
            whatsapp_desc: 'Tezkor xabar va qo\'llab-quvvatlash',
            success: {
              title: 'Xabar qabul qilindi.',
              desc: 'Men sifatli muloqotni qadrlayman. 12 soat ichida javob kutishingiz mumkin.',
              another: 'Boshqa xabar yuborish'
            }
          },
          footer: {
            tagline: 'Biznesingizni rivojlantiruvchi aqlli raqamli mahsulotlar yaratish. Eng yaxshisini talab qiladigan startaplar va brendlar uchun hashamatli darajadagi dasturlash.',
            links: {
              title: 'Tezkor havolalar',
              about: 'Men haqimda',
              services: 'Xizmatlar',
              pricing: 'Narxlar',
              certificates: 'Sertifikatlar'
            },
            contact: {
              title: 'Aloqa',
              available: 'Butun dunyo bo\'ylab loyihalar uchun ochiqman.'
            },
            rights: 'Barcha huquqlar himoyalangan.',
            privacy: 'Maxfiylik siyosati',
            terms: 'Foydalanish shartlari'
          },
          payment: {
            hero_tag: 'Xavfsiz to\'lov',
            hero_title: 'Infrastruktura va <0>Shlyuz</0> sozlamalari',
            hero_desc: 'Xavfsiz mahalliy to\'lov ma\'lumotlarimizdan foydalanib, boshlang\'ich depozit yoki infratuzilma haqini to\'lang.',
            card_title: 'Humo to\'lov kartasi',
            card_holder: 'Karta egasi',
            card_number: 'Karta raqami',
            copy_success: 'Nusxalandi',
            instruction_title: 'Bu qanday ishlaydi',
            instruction_step1: 'Payme, Click yoki o\'zingizga qulay bank ilovasi orqali o\'tkazmani amalga oshiring.',
            instruction_step2: 'Muvaffaqiyatli tranzaksiya skrinshotini oling.',
            instruction_step3: 'Sozlashni yakunlash uchun skrinshotni Telegram-ga yuboring.'
          }
        }
      },
      ru: {
        translation: {
          nav: {
            home: 'Главная',
            about: 'Обо мне',
            services: 'Услуги',
            certificates: 'Сертификаты',
            pricing: 'Цены',
            payment: 'Оплата',
            contact: 'Контакты',
            get_project: 'Начать проект'
          },
          home: {
            hero_tag: 'Создатель цифровых продуктов премиум-класса',
            hero_title: 'Я создаю <0>Умные</0> цифровые <2 /> продукты, которые <1>Развивают</1> <2 /> ваш бизнес',
            hero_smart: 'Умные',
            hero_grow: 'Развивают',
            hero_desc: 'Профессиональное портфолио Мухаррам Расулевой — основателя, генерального директора и ведущего разработчика продуктов, специализирующегося на интеграции ИИ и масштабируемых системах.',
            cta_view_work: 'Мои работы',
            cta_contact: 'Связаться со мной',
            expertise_tag: 'Экспертиза',
            expertise_title: 'Решения для высокой производительности',
            expertise_desc: 'Каждый цифровой продукт разработан для решения конкретной бизнес-задачи, будь то эффективность, конверсия или масштаб.',
            ai_title: 'Интеллект, Доверие <1 /> и Современный <0>Опыт ИИ</0>',
            ai_desc1_title: 'Доверие и Результаты',
            ai_desc1: 'Стратегические решения в области ИИ, предназначенные для автоматизации сложности и раскрытия скрытого потенциала роста вашей бизнес-модели.',
            ai_desc2_title: 'Высокая производительность',
            ai_desc2: 'Комплексная безопасность и высокопроизводительная инженерия для обеспечения надежности и актуальности ваших систем в будущем.',
            cta_ready: 'Если ваш бизнес <0>не масштабируется</0>, ваши системы <1>дают сбой</1>',
            cta_ready_desc: 'Я помогаю компаниям внедрять интеллектуальные технологии — ИИ, автоматизацию и индивидуальные платформы — для устранения узких мест и ускорения роста.',
            client_satisfaction: 'Удовлетворенность клиентов'
          },
          about: {
            story_tag: 'История',
            hero_title: 'Премиальный подход к <0>Сложному Коду</0>',
            hero_desc: 'Мой путь начался с увлечения логикой и перерос в миссию: создание цифровых продуктов уровня люкс для основателей, которые ценят скорость, интеллект и исполнение.',
            quote: '"Я не просто пишу код — я создаю системы, которые приносят деньги и экономят время."',
            execution_title: 'Исполнение и Последовательность',
            execution_desc: 'От амбициозного IT-студента до доверенного разработчика продуктов для глобальных предпринимателей.',
            timeline: {
              student: { title: 'Выпускник IT', period: 'АКАДЕМИЧЕСКАЯ БАЗА', desc: 'Студент последнего курса института TMC в партнерстве с Университетом Кардифф Метрополитен (Великобритания). Создан прочный академический и практический фундамент в области компьютерных наук, алгоритмов и проектирования систем.' },
              dev: { title: 'Разработчик', period: 'ПРАКТИК', desc: 'Разработка реальных веб-приложений, систем автоматизации и кроссплатформенных решений. Ориентирован на создание эффективного, масштабируемого и готового к производству программного обеспечения.' },
              builder: { title: 'Создатель Продуктов', period: 'СТРОИТЕЛЬ', desc: 'Проектирование полных цифровых продуктов от концепции до развертывания. Получен международный опыт в области разработки ИИ в рамках технологической программы в Китае (2025).' }
            },
            tech_stack_title: 'Передовой стек <br /> технологий и стратегия',
            tech_stack_desc: 'Я специализируюсь на высокопроизводительных технологиях, которые позволяют быстро масштабироваться и внедрять интеллектуальную автоматизацию.'
          },
          services: {
            hero_tag: 'Решения',
            hero_title: 'Цифровая <0>Сила</0> для <1 /> Глобального Роста',
            hero_desc: 'Я не просто пишу код — я создаю системы, которые приносят деньги и экономят время. Каждая услуга — это стратегическая инвестиция в будущее вашего бренда.',
            order_now: 'Заказать сейчас',
            free_quote: 'Получить бесплатную оценку',
            philosophy_quote: '"Стратегия всегда важнее кода."',
            philosophy_desc: 'Я принимаю не каждый проект. Я работаю с основателями, которые готовы создавать что-то долговечное. Если вы цените качество и долгосрочное видение, мы идеально подходим друг другу.',
            ai: {
              title: 'Сайты на базе ИИ',
              category: 'Интеллект',
              desc: '“Сайт, который работает на вас 24/7 с использованием автоматизации ИИ”',
              pricing: '$1,500 – $3,500'
            },
            standard: {
              title: 'Стандартные сайты',
              category: 'Производительность',
              desc: 'Чистые, быстрые и высококонверсионные бизнес-сайты, адаптированные под ваш бренд.',
              pricing: '$500 – $1,200'
            },
            bots: {
              title: 'Telegram-боты и автоматизация',
              category: 'Эффективность',
              desc: 'Автоматизируйте поддержку клиентов, продажи и внутренние рабочие процессы без проблем.',
              pricing: '$300 – $1,000'
            },
            mobile: {
              title: 'Мобильные приложения (Flutter)',
              category: 'Опыт',
              desc: 'Кросс-платформенные мобильные решения с безупречным современным пользовательским интерфейсом.',
              pricing: '$1,500+'
            },
            ecommerce: {
              title: 'Системы электронной коммерции',
              category: 'Коммерция',
              desc: 'Полные системы онлайн-магазинов с надежной платежной и административной логикой.',
              pricing: '$1,500 – $4,000'
            }
          },
          certificates: {
            hero_tag: 'Валидация',
            hero_title: 'Галерея <br /> профессиональных <0>Достижений</0>',
            hero_desc: 'Коллекция проверенных достижений в области цифровой архитектуры, интеграции ИИ и основных фреймворков разработки.',
            verify: 'Проверить полномочия',
            looking_skill: 'Ищете конкретный набор навыков?',
            skill_desc: 'Я постоянно развиваюсь. Если ваш проект требует узкоспециализированного опыта, свяжитесь со мной для технического обсуждения.',
            request_pdf: 'Запросить PDF портфолио'
          },
          pricing: {
            hero_tag: 'Инвестиции',
            hero_title: 'Четкое и <br /> <0>Прозрачное</0> Ценообразование',
            hero_desc: 'Выберите уровень, соответствующий вашему текущему масштабу. Каждая инвестиция направлена на повышение вашей эффективности и стоимости бренда.',
            recommended: 'Лучшее для растущего бизнеса',
            usd: 'USD',
            faq_title: 'Часто задаваемые вопросы',
            tiers: {
              start: {
                name: 'Start',
                price: '$300 – $700',
                desc: 'Идеально для новых начинаний и личных брендов.',
                cta: 'Запустить мой сайт',
                features: ['Одностраничный лендинг', 'Мобильная оптимизация', 'Интеграция с Telegram', 'Базовая SEO-настройка', 'Высокая скорость']
              },
              growth: {
                name: 'Growth',
                price: '$1,200 – $2,500',
                desc: 'Популярный выбор для расширяющегося бизнеса.',
                cta: 'Развивать мой бизнес',
                tag: 'Популярный выбор',
                features: ['Многостраничная платформа', 'Платежные системы (Payme/Click)', 'CRM интеграция', 'Автоматизация Telegram', 'Маркетинговая аналитика']
              },
              scale: {
                name: 'Scale',
                price: '$2,500 – $5,000+',
                desc: 'Для брендов, готовых доминировать на рынке.',
                cta: 'Масштабировать систему',
                features: ['Полная бизнес-экосистема', 'Внедрение ИИ', 'Сложная логика БД', 'Масштабируемая архитектура', 'Приоритетная стратегия']
              },
              enterprise: {
                name: 'Enterprise',
                price: 'Индивидуально',
                desc: 'Индивидуальные решения для глобальных задач.',
                cta: 'Связаться для решения',
                features: ['Безлимитное масштабирование', 'Индивидуальные AI-процессы', '24/7 поддержка', 'Максимальный аудит безопасности', 'Full White-label']
              }
            },
            faqs: {
              q1: 'Сколько времени занимает проект?',
              a1: 'Проекты Start обычно занимают 1-2 недели. Проекты Growth и Scale занимают в среднем 4-8 недель для полной реализации.',
              q2: 'Поддерживаете ли вы местные платежи?',
              a2: 'Да, я специализируюсь на интеграции платежных шлюзов Узбекистана, таких как Payme и Click, для бесперебойных транзакций.'
            }
          },
          contact: {
            hero_tag: 'Запрос',
            hero_title: 'Давайте создадим что-то <0>Мощное</0> вместе.',
            hero_desc: 'Только серьезные запросы. Если вы готовы инвестировать в премиальный цифровой результат, заполните форму или свяжитесь напрямую через Telegram.',
            telegram_title: 'Быстрая связь: Telegram',
            telegram_desc: 'Мгновенная обратная связь и быстрые обсуждения',
            email_desc: 'Официальная деловая документация',
            form: {
              name: 'Полное имя',
              name_placeholder: 'Введите ваше имя',
              email: 'Адрес электронной почты',
              email_placeholder: 'name@company.com',
              project_type: 'Тип проекта',
              vision: 'Ваше видение',
              vision_placeholder: 'Расскажите о ваших целях и текущем масштабе бизнеса.',
              submit: 'Начать сотрудничество',
              sending: 'Отправка...'
            },
            whatsapp_title: 'Быстрая связь: WhatsApp',
            whatsapp_desc: 'Мгновенные сообщения и поддержка',
            success: {
              title: 'Сообщение получено.',
              desc: 'Я ценю высококлассное общение. Вы можете ожидать ответа в течение 12 часов.',
              another: 'Отправить еще одно сообщение'
            }
          },
          footer: {
            tagline: 'Создание умных цифровых продуктов, которые развивают ваш бизнес. Разработка премиум-класса для стартапов и брендов, которые требуют лучшего.',
            links: {
              title: 'Быстрые ссылки',
              about: 'Обо мне',
              services: 'Услуги',
              pricing: 'Цены',
              certificates: 'Сертификаты'
            },
            contact: {
              title: 'Контакты',
              available: 'Доступна для проектов по всему миру.'
            },
            rights: 'Все права защищены.',
            privacy: 'Политика конфиденциальности',
            terms: 'Условия использования'
          },
          payment: {
            hero_tag: 'Безопасный платеж',
            hero_title: 'Настройка <0>Инфраструктуры</0> и Шлюза',
            hero_desc: 'Оплатите первоначальный депозит или взнос за инфраструктуру, используя наши безопасные реквизиты для местных платежей.',
            card_title: 'Платежная карта Humo',
            card_holder: 'Владелец карты',
            card_number: 'Номер карты',
            copy_success: 'Скопировано в буфер обмена',
            instruction_title: 'Как это работает',
            instruction_step1: 'Выполните перевод через Payme, Click или другое банковское приложение.',
            instruction_step2: 'Сделайте скриншот успешной транзакции.',
            instruction_step3: 'Отправьте скриншот в мой Telegram, чтобы завершить настройку.'
          }
        }
      }
    }
  });

export default i18n;
