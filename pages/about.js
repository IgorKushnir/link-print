import Head from "next/head";
import { useState } from "react";

import styles from "../styles/Home.module.scss";

import Header from "../components/Header/Header";
import GetBonus from "../components/GetBonus/GetBonus";
import Footer from "../components/Footer/Footer";
import ContactModal from "../components/ContactModal/ContactModal";
import DownloadModal from '../components/DownloadModal/DownloadModal';
import MobileMenu from '../components/MobileMenu/MobileMenu'

export default function AboutPage() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isDownloadPopupOpened, setIsDownloadPopupOpened] = useState(false);

  return (
    <>
      <Head>
        <title>УФ принтера Link Print</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере"
        />
        <meta
          name="keywords"
          content="Link Print Украина, линк принт Украина, Linkprint, link print, Продажа UV оборудования, Пробный принт, купить уф принтер, купить uv принтер, уф печать, uv печать, uvпечать, уф гибридный принтер, Уф принтер Планшетный"
        />
        <meta property="og:url" content="https://www.linkprint.com.ua/" />
        <meta property="og:title" content="УФ принтера" />
        <meta
          property="og:description"
          content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <link rel="canonical" href="https://www.linkprint.com.ua/" />
      </Head>

      <main className={styles.main}>
        {isPopupOpened && <ContactModal setIsPopupOpened={setIsPopupOpened} />}
        {isDownloadPopupOpened && <DownloadModal setIsDownloadPopupOpened={setIsDownloadPopupOpened}/>}
        {isMobileMenuOpened && (
          <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened} />
        )}
        <Header setIsMobileMenuOpened={setIsMobileMenuOpened} />
        <section className={styles.contacts} id="contacts">
          <div className="container">
            <h2 className={styles.heading}>О компании</h2>
            <h3 className={styles.subheading}>
              Цифровий УФ-друк не перший рік продовжує активне завоювання як
              ринку візуальної реклами, так і сегмент виробництва рекламно-
              сувенірної продукції. Системи, які друкують чорнилом, що УФ-
              затверджується, все частіше приходять на зміну сольвентним
              принтерам в рекламно-виробничих компаніях різних країн світу.
            </h3>

            <p className={styles.text}>
              Нову лінійку цифрового друкарського обладнання на українському
              рекламному ринку представляє компанія «Лінк Прінт».
            </p>
            <p className={styles.span}>
              Розкажіть про вашу компанію, Олена, як давно ви працюєте на
              українському ринку, як прийшли до того, чим зараз займаєтеся?
            </p>
            <p className={styles.text}>
              Я займаюся продажем устаткування і витратних матеріалів для
              реклами з 2000 року. У 2006 році за підтримки власника «Компанії
              Sun» Владислава Мірчева ми були новаторами успішного впровадження на український ринок сольвентних принтерів нової на той
              момент китайської торгової марки Infinity. За два роки було
              продано близько 200 одиниць техніки, хоча до нас український ринок
              скептично ставився до китайської продукції.
            </p>
            <p className={styles.text}>
              У 2008 році наш стенд на виставці T-REX відвідали представники
              австрійського заводу Durst, і було прийнято рішення про спільну
              роботу з просування цієї відомої європейської торгової марки УФ-
              обладнання на ринок України.
            </p>

            <p className={styles.text}>
              У 2010 р. сміливе рішення про просування чорнила Limei мало відомого на той момент заводу в Китаї справило глобальний переворот
              на українському ринку сольвентного друку. Через чотири роки роботи 80% ринку стали друкувати на нашому чорнилі, включаючи провідні друкарьскі виробництва України.
            </p>

            <p className={styles.text}>
              Вважаю, що у кожного фахівця в своїй справі має бути професійне
              чуття у виборі успішного продукту. Можу сміливо сказати, що моє
              професійне чуття завжди виявлялося вірним.
            </p>

            <p className={styles.span}>
              Чому ви зараз вибрали саме це обладнання, цього постачальника?
            </p>

            <p className={styles.text}>
              Так само було і з Link Print, коли я побачила цей УФ-принтер на
              виставці в Польщі в 2018 році і зрозуміла, що оптимальне
              поєднання його можливостей, якості, надійності, ціни, оперативної
              поставки, а головне — зручного для швидкої комунікації в рішенні
              задач територіального розташування заводу — в Білорусії — якраз
              те, що потрібно нашому ринку, тому що це: 
              <ul>
                <li>• завжди швидке
              постачання запчастин,</li>
                <li>• модернізація і апгрейд з урахуванням
              швидкої зміни потреб ринку в наш час,</li>
                <li>• ще й гарантія 2 роки</li>
              </ul>
            </p>

            <p className={styles.text}>
              Наш партнер, білоруська компанія Link Print має багаторічний досвід роботи з друкарським устаткуванням, тому як ніхто інший знає
              задачі кінцевого споживача і враховує їх у технічних розробках.
            </p>

            <p className={styles.span}>У чому особливості та переваги цього обладнання?</p>

            <p className={styles.text}>
              Перш за все скажу, що лінійка цього обладнання — унікальна. Всі
              комплектуючі, корпуси принтерів — якісні, дуже надійні (сталеві
              корпуси — білоруського виробництва). Вся механіка і вся
              електроніка працюють ідеально.
            </p>

            <p className={styles.text}>Недарма ми даємо гарантію на обладнання — 2 роки.</p>

            <p className={styles.text}>
              У нас високоякісна збірка обладнання. В принтери встановлюються
              сучасні голови, що друкують — RICOH GEN5 або Konica Minolta 1024i,
              на таких головах працюють брендові УФ-машини по всьому світу.
            </p>

            <p className={styles.text}>
              Завдяки закупівлі нами обладнання в сусідній країні, витрати на
              його поставку мінімальні, тому вигода від покупки устаткування
              білоруського виробника для українського покупця в рази більше,
              так як і якість обладнання набагато вище.
            </p>

            <p className={styles.span}>
              Розкажіть про лінійку пропонованого вами в Україні обладнання.
            </p>

            <p className={styles.text}>
              Модель 2019 року — широкоформатний багатофункціональний гібридний <span>UV LED принтер LinkPrint P200n-P320n</span>. Це найсучасніша
              відповідь запитам ринку УФ-друку. Це максимально швидке повернення ваших інвестицій при мінімальних стартових вкладеннях.
            </p>
            <img src="/img/jpg/p-200-5.jpg" className={styles.img} />
            <p className={styles.text}>
              Більшість листових матеріалів має ширину в межах двох метрів, при
              цьому довжина може досягати шести. Єдиний спосіб нанесення зображення в таких випадках — друк на гібридному принтері. Такі
              завдання як виготовлення декоративних панно на композитному
              алюмінії, друк великих стекол для скіналі або офісних перегородок,
              друк на аркушах полікарбонату довжиною понад 4 метра й інші можна
              виконати тільки на гібридному принтері.
            </p>
            <p className={styles.text}>
              Тепер багатофункціональна система для друку УФ-чорнилом по
              рулонних і листових матеріалах Link Print P200n оснащується
              вдосконаленою системою подачі і підмотки рулонних матеріалів.
              Принтер відмінно справляється з завданнями друку з рулону в рулон.
              Подача відбувається конвеєром з вакуумним столом. В результаті в
              зону друку можна подавати більш важкі і масивні основи (вагою до
              150 кг), причому подача здійснюється більш точно, ніж раніше.
              Можна додатково встановити важкий притискний вал для фіксації
              нерівних носіїв.
            </p>
            <p className={styles.text}>
              Ще одне покращення, реалізоване в Link Print P200n, — наявність
              додаткового ряду друкуючих голів, призначених для нанесення
              праймера на матеріал перед друком. Такий підхід не тільки дозволяє
              відчутно підвищувати якість і стійкість відбитків, одержуваних,
              наприклад, на акрилі та силікатному склі, а й дає можливість
              значно підвищити продуктивність при виконанні подібних завдань і
              робить устаткування набагато зручнішим в експлуатації. Серед
              інших переваг цієї моделі — висока продуктивність, що досягає 80
              кв. м/год при відносно компактних габаритах. Так, при необхідності
              принтер можна внести в приміщення, двері до якого мають ширину
              всього 85 см.
            </p>
            <p className={styles.span}>
              Планшетні UV LED принтери Link Print FB210 (друк 2100 x 1250 мм) і
              модель 2019 року — FB320 (друк 2000 x 3000 мм)
            </p>
            <img src="/img/jpg/fb-210-1.jpg" className={styles.img} />
            <p className={styles.text}>Ці моделі — найсучасніша відповідь запитам ринку УФ-друку.</p>
            <p className={styles.text}>
              Основа принтера — жорстка сталева станина, завдяки якій можливо
              отримати високу швидкість друку на різних матеріалах. Переміщення
              каретки відбувається за двома високоточними рейками, вони дозволяють переміщати каретку без вібрацій. 
              У свою чергу портал переміщається по двох кулько-гвинтових парах за допомогою двох
              синхронізованих серводвигунів.
            </p>
            <p className={styles.text}>
              Вакуумний стіл оснащений повітряними помпами. В обох моделях,
              FB210 і FB320, стіл має 6 вакуумних зон, керованих кранами. Для
              легкого позиціонування по столу важких листових матеріалів в
              системі вбудований клапан перемикання напрямку потоку повітря
              для створення повітряної подушки. Стіл має спеціальне покриття, у
              якого дуже низька адгезія до полімеризованої фарби.
            </p>
            <p className={styles.span}>Колірна схема: CMYK + Білий + Лак + Праймер</p>
            <p className={styles.text}>
              Використання білого і лаку значно розширює діапазон дизайнерських рішень.
            </p>
            <p className={styles.text}>
              Можливість друкувати в декілька шарів — це спосіб отримати унікальні ефекти і рельєф.
            </p>
            <p className={styles.text}>
              Використання лаку надає виробу глянцевий вигляд, тривимірність.
            </p>
            <p className={styles.text}>Одночасний друк CMYK + білий + CMYK.</p>
            <p className={styles.text}>
              Використання спеціального праймера особливо важливо при друку по
              акрилу, праймер наноситься тільки під зображення, його витрата
              повністю оптимізована і подальша обробка не потрібна. Принтер, як
              і інші моделі цієї лінійки, оснащений автоматичною системою
              циркуляції білого чорнила, яка запобігає осіданню діоксиду титану.
              Перед надходженням в голови, що друкують чорнило нагрівається в
              субтанках, забезпечуючи більш стабільний друк.
            </p>
            <p className={styles.text}>
              Принтер надзвичайно зручний в експлуатації. Програмне регулювання висоти каретки принтера дозволяє легко 
              друкувати на різноманітних листових матеріалах товщиною до 100 мм: МДФ, ДСП, склі,
              керамічній плитці, акрилі, фанері, картоні та інших.
            </p>
            <p className={styles.text}>
              Для роботи з ПВХ та іншими матеріалами, що несуть статичний заряд
              на принтер може бути встановлений іонізатор. Всі принтери обладнані системою захисту каретки від зіткнення. Спеціальні шторки
              з датчиками зупинять друк, якщо на шляху руху виникне перешкода.
            </p>
            <p className={styles.span}>
              Планшетний УФ-принтер LINK PRINT FB690R, з опцією циліндричного
              друку, модель 2019 року
            </p>
            <img src="/img/png/fb690-2.png" className={styles.img} />
            <p className={styles.text}>
              Принтер Link Print з системою для друку на циліндрах по своїй продуктивності в десятки разів випереджає схожі рішення, що існують
              на ринку. Набір вбудованих можливостей для друку настільки
              широкий, що аналогів цієї моделі не існує.
            </p>

            <p className={styles.text}>
              Планшетні принтери Link Print FB690R — нова лінійка планшетних
              принтерів для УФ-друку на широкому спектрі матеріалів, включаючи
              об’ємні предмети висотою до 37 см. Принтер був спеціально
              розробле- ний для універсальних виробництв, де потрібен друк робіт
              з високою роздільною здатністю, з акуратним і точним опрацюванням
              деталей. Принтер для малих форматів, але в ньому використовуються
              технології великих сучасних машин: жорстка сталева станина,
              підігрів чорнила в субтанках, сервоприводи, шестизонний вакуумний
              стіл з покриттям, що легко очищується, система циркуляції білого,
              система негативного тиску в чорнильному тракті, потужний РІП ONYX,
              система LED УФ- сушіння з повітряним охолодженням, датчик
              визначення висоти друку.
            </p>

            <p className={styles.text}>
              <span>Механічна система друку на циліндрах KEBAB</span> дозволяє наносити
              зображення на циліндричні поверхні, в тому числі по всьому їх
              колі.
            </p>

            <p className={styles.text}>
              Виріб встановлюється на металеві ролики і за рахунок переміщення
              столу обертається при друку. Ролики можуть пересуватися уздовж валів, з огляду на велику висоту підйому каретки на пристосуванні
              можна друкувати склянки, термоси, кухлі та навіть невеликі
              барила.
            </p>

            <p className={styles.text}>
              <span>Висота підйому каретки 37 см (!)</span> — це дозволяє друкувати на футбольних м’ячах, скриньках, подарунковій упаковці, в тому числі на
              ци- ліндричних предметах великого діаметру.
            </p>

            <p className={styles.text}>
              <span>Система з сервоприводом для друку на циліндрах</span> — нова розробка
              компанії Link Print. Швидкість друку вище, ніж на механічній
              системі в десятки разів. У комплект входить регульована за кутом
              підйому платформа, сервопривід, вакуумний насос, LED-сушка з
              блоком живлення. Виріб встановлюється на спеціально підготовлене
              оснащення і фіксується вакуумом.
            </p>

            <p className={styles.text}>
              Існує два режими друку: мультипрохідний і однопрохідний. У однопрохідному режимі швидкість друку вище ще в кілька разів.
            </p>

            <p className={styles.text}>
              Клієнтам зараз вже недостатньо друку звичайного банера: вони
              хочуть друк на склі, 3D-друк, об’ємний друк лаком... Тому в наш
              час ринку реклами і поліграфії потрібні нові рішення, які
              враховують нові, збільшені потреби клієнтів. А все вищеперелічене
              вже може робити друкарське обладнання Link Print.
            </p>

            <p className={styles.text}>
              Один УФ-принтер Link Print дозволяє на порядок розширити свої
              можливості у виробництві рекламної продукції або почати новий
              успішний бізнес.
            </p>

            <p className={styles.span}>
              Які питання про це обладнання вам найбільш часто задають ваші
              потенційні клієнти?
            </p>

            <p className={styles.text}>
              Найчастіше мене запитують: принтери Link Print збираються в Білорусі з комплектуючих, куплених в Китаї?
            </p>

            <p className={styles.text}>
              Відповідаю: лінійка обладнання Link Print — це унікальна розробка
              команди висококваліфікованих білоруських фахівців на чолі з
              господарем виробництва, Олександром Чупригіним, який сам
              особисто бере участь в проведенні постійної модернізації
              обладнання.
            </p>

            <p className={styles.text}>
              Частина комплектуючих, яка закуповується ними в Китаї, проходить
              ретельний відбір за своїми характеристиками і має високу якість. В
              іншому випадку білоруський виробник не міг би давати 2 роки
              гарантії на свою продукцію.
            </p>

            <p className={styles.text}>
              Друге питання, яке найбільш часто задається — про електроніку.
            </p>

            <p className={styles.text}>
              Електроніка в принтерах використовується не китайська, а європейська, з 5-річною гарантією для білоруського заводу від
              європейського виробника. Є конструктивний зв’язок безпосередньо з
              виробником цієї електроніки. Стабільність роботи підтверджена
              часом.
            </p>

            <p className={styles.text}>
              Наші білоруські партнери продали вже більше 100 одиниць устаткування.
            </p>

            <p className={styles.span}>
              Чи є вже покупці цього устаткування в Україні? Як вони відгукуються про своє придбання?
            </p>
            <p className={styles.text}>
              Кілька одиниць ми вже продали в цьому році великим друкарським
              виробництвам, покупці дуже задоволені покупкою. УФ-друк стрімко
              розвивається, деякі наші клієнти повертаються за другою машиною!
            </p>
            <p className={styles.span}>Які ваші подальші плани?</p>
            <p className={styles.text}>
              Зараз у мене своя компанія «Лінк Прінт», зі штатом молодих
              амбітних співробітників, що працюють під одним гаслом: професійний, гнучкий, клієнтоорієнтований підхід.
            </p>
            <p className={styles.text}>
              Мені завжди приємно представляти гідне, якісне обладнання — це
              приносить задоволення від виконаної роботи, коли її результатом
              стають вдячні відгуки користувачів нашого товару.
            </p>
            <p className={styles.text}>
              Будемо підвищувати наш рівень роботи — і нехай наше якісне, надійне обладнання, яке 
              відповідає найвищим вимогам сучасного рекламного ринку, стане найкращим інструментом для збільшення доходу наших клієнтів.
            </p>
            <p className={styles.text}>Запрошуємо до спільної роботи!</p>
          </div>
        </section>
        <GetBonus setIsPopupOpened={setIsPopupOpened} />
        <Footer setIsDownloadPopupOpened={setIsDownloadPopupOpened} setIsPopupOpened={setIsPopupOpened} />
      </main>
    </>
  );
}
