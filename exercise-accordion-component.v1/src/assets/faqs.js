export const faqs = [
  {
    title: "ReactJS",
    text: [
      "ReactJS е JavaScript библиотека, с помощта на която се изгражда потребителския интерфейс - UI.",
      "React реагира на промяната на STATE-а и променя потребителския интерфейс, като пре-рендерира компонентите",
    ],
  },
  {
    title: "Declarative vs. Imperative",

    text: [
      "Ключова разлика между Декларативното и Императивното програмиране е, че Декларативното програмиране се фокусира върху това, което програмата трябва да постигне, докато Императивното програмиране се фокусира върху това как програмата трябва да постигне резултата.",
      "Декларативното програмиране може да бъде обяснено с помощта на реален сценарий. Да предположим, че потребителят трябва да провери за нови имейли. Един от методите е чрез активиране на известията за входящата поща. Потребителят трябва да активира известията само веднъж и всеки път, когато пристигне нов имейл, той получава известие автоматично. Декларативното програмиране е подобно на това. Осигурява простота. Декларативното програмиране изразява  необходимия резултат. Той обяснява логиката на изчислението, без да описва контролния поток.",
      "Императивното програмиране може да бъде обяснено с помощта на реален сценарий, както преди. За да провери новите имейли, потребителят може да влезе в Gmail и да продължи да опреснява страницата, за да провери дали е получил нови имейли или не. Това е подобно на императивното програмиране. Обяснява всяка стъпка, свързана с постигане на резултата. Той използва изрази, за да изрази промените в състоянието на програмата.",
    ],
  },
  {
    title: "JSX",
    text: [
      "JSX е декларативен синтаксис , който описва как да изглеждат и как да функционират компонентите,    на база подадената информацията и заложената логика.",
    ],
  },
  {
    title: "Components",
    text: [
      "Компонентите са функция, която приема props и връща React елемент.",
      "Web страницата е изградена от различни компоненти",
    ],
  },
  {
    title: "Data",
    text: [
      "Data (информацията) is ONE-WAY DATA FLOW. Информацията се предава само от parent to child.",
      "В React е забранено да се мутира информацията!",
    ],
  },
  {
    title: "Props",
    text: [
      " PROPS е информацията, която идва от parent компонента и може да бъде променяна само от него. Тя е immutable",
    ],
  },
  {
    title: "State",

    text: [
      "STATE е най-важната концепция в React. Това е вътрешната информация, която зависи и може да бъде променяна от логиката на компонента - 'Component's memory'",
      "При промяна на State-а, React автоматично пре-рендерира компонента    Компонента запазва информацията от State-a по време на своя 'lifecycle'",
    ],
  },
  {
    title: " State vs. Props",

    text: [
      "Props е информацията , която е собственост на parent компонента. Това е информационния канал, по който родителя предава информация на child компонента. Props са READ-ONLY!",
      'State е вътрешната информация, "собственост" на компонента. Това е паметта на компонента, зависеща от състоянието    след презареждане. State прави компонентите интерактивни.',
      "Ако child компонента получи обновен props, това ще провокира пре-рендериране на компонента. Ако State е подаден като Props на child компонента и двата компонента ще се пре-рендерират, ако State-а се промени",
    ],
  },
  {
    title: "State management",

    text: [
      "State management зависи от отговорите на въпросите:",
      "Кога ни трябва STATE",
      "Какъв 'вид' STATE ни е необходим",
      "Къде да поставим всяко парче от STATE-a",
      "Комуникация между CHILD to PARENT",
      "Как се достъпва GLOBAL STATE",
    ],
  },
  {
    title: "Global State",
    text: [
      "STATE, необходим на много компоненти. Когато създадем GLOBAL STATE , той ще е достъпен от всеки компонент в цялото приложение.",
    ],
  },
  {
    title: "Local State",
    text: [
      "State, необходим само на един или няколко CHILD компонента",
      "Този STATE ще е достъпен само за тя и техните CHILD компоненти, ако е подаден като PROPS към тях",
    ],
  },
  {
    title: "Hook",
    text: [
      "[useState, useEffect, ...]",
      "Hook-овете се декларират най-горе във функцията на компонента",
    ],
  },
  {
    title: "Fragments",
    text: [
      "Фрагментите позволяват да се групирате списък от child компоненти, без да добавяте допълнителен parent element към DOM.",
      "Фрагментите са полезни, защото групирането на елементи с фрагмент няма ефект върху оформлението или стиловете, за разлика от това, ако сте обвили елементите в друг контейнер като DOM елемент.",
    ],
  },
];
