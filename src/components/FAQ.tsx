import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Какие типы файлов поддерживаются?",
    answer:
      "Сервис поддерживает все популярные форматы видео (MP4, MOV, AVI, MKV), фотографий (JPG, PNG, HEIC, WebP, GIF) и позволяет сохранять ссылки на любые веб-страницы.",
  },
  {
    question: "Есть ли ограничения на размер файлов?",
    answer:
      "Максимальный размер одного файла зависит от выбранного тарифного плана. На бесплатном тарифе — до 500 МБ на файл. На платных тарифах ограничения значительно выше.",
  },
  {
    question: "Могу ли я делиться файлами с другими людьми?",
    answer:
      "Да! Вы можете поделиться любым файлом или папкой по ссылке. Вы сами управляете доступом: разрешить просмотр всем или только конкретным пользователям.",
  },
  {
    question: "Как защищены мои данные?",
    answer:
      "Все файлы хранятся в зашифрованном виде. Приватные материалы недоступны никому, кроме вас. Мы не передаём данные третьим лицам и строго соблюдаем политику конфиденциальности.",
  },
  {
    question: "Доступен ли сервис с мобильного телефона?",
    answer:
      "Да, сервис полностью адаптирован для мобильных устройств. Загружайте, просматривайте и делитесь материалами прямо со смартфона через браузер.",
  },
  {
    question: "Как начать пользоваться?",
    answer:
      "Зарегистрируйтесь бесплатно — это займёт меньше минуты. После этого вы сразу можете загружать файлы и сохранять ссылки. Никаких сложных настроек.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}