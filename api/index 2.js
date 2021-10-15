const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const api_key = "a64gs8es8g4s65dfaef48da84";

const Welcome = "Streaming Api'ye Hoşgeldiniz.";

const movieTrend = [
  {
    id: 1,
    name: "Godzilla vs. Kong",
    img: "https://image.tmdb.org/t/p/w1280//jMWkd0fuwbG39eJpzycJzPWMCww.jpg",
    movie: "/videos/g1.mp4",
    description:
      "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
  },
  {
    id: 2,
    name: "Raya and the Last Dragon",
    img: "https://image.tmdb.org/t/p/w1280//hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
    movie: "/videos/raya.mp4",
    description:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
  },
  {
    id: 3,
    name: "Tom & Jerry",
    img: "https://image.tmdb.org/t/p/w1280//fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
    movie: "/videos/tom.mp4",
    description:
      "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
  },
  {
    id: 4,
    name: "Breach",
    img: "https://image.tmdb.org/t/p/w1280//nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
    movie: "/videos/breach.mp4",
    description:
      "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
  },
  {
    id: 5,
    name: "The Unholy",
    img: "https://image.tmdb.org/t/p/w1280//zDq2pwPyt4xwSFHKUoNN2LohDWj.jpg",
    movie: "/videos/unholy.mp4",
    description:
      "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
  },
  {
    id: 6,
    name: "100% Wolf",
    img: "https://image.tmdb.org/t/p/w1280//7TxeZVg2evMG42p0uSbMJpWNQ8A.jpg",
    movie: "/videos/wolf.mp4.mp4",
    description:
      "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
  },
  {
    id: 7,
    name: "The Funeral Home",
    img: "https://image.tmdb.org/t/p/w1280//3GW0A72MxsSgghqpjc2O2MvO8Ec.jpg",
    movie: "/videos/funeral.mp4.mp4",
    description:
      "Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.",
  },
  {
    id: 8,
    name: "Peninsula",
    img: "https://image.tmdb.org/t/p/w1280//d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg",
    movie: "/videos/peninsula.mp4.mp4",
    description:
      "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
  },
  {
    id: 9,
    name: "Chaos Walking",
    img: "https://image.tmdb.org/t/p/w1280//5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg",
    movie:  "/videos/choas.mp4.mp4",
    description:
      "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
  },
  {
    id: 10,
    name: "Nomadland",
    img: "https://image.tmdb.org/t/p/w1280//bjjZXrP8PEdFeJkKERc62xlarMI.jpg",
    movie: "/videos/nomadlan.mp4.mp4",
    description:
      "A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.",
  },
];

const movieDiscover = [
  {
    id: 1,
    name: "I Care a Lot",
    img: "https://image.tmdb.org/t/p/w1280//vX5JtEcumMQvMCLVcIqfetc7hdg.jpg",
    movie: "/videos/icarelot.mp4.mp4",
    description:
      "A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some unexpected baggage.",
  },
  {
    id: 2,
    name: "Mortal Kombat",
    img: "https://image.tmdb.org/t/p/w1280//3phkepIrEHnTNGE6ajEGdBfRxki.jpg",
    movie: "/videos/mortal.mp4.mp4",
    description:
      "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
  },
  {
    id: 3,
    name: "Judas and the Black Messiah",
    img: "https://image.tmdb.org/t/p/w1280//fatz1aegtBGh7KS0gipcsw9MqUn.jpg",
    movie: "/videos/judas.mp4.mp4",
    description:
      "Bill O'Neal infiltrates the Black Panthers on the orders of FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends—falling for a fellow revolutionary en route—a battle wages for O’Neal’s soul.",
  },
  {
    id: 4,
    name: "21 Bridges",
    img: "https://image.tmdb.org/t/p/w1280//5KmhjlR5CEarB8mKtpjcjHRYIu9.jpg",
    movie: "/videos/bridges.mp4.mp4",
    description:
      "An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.",
  },
  {
    id: 5,
    name: "Nobody",
    img: "https://image.tmdb.org/t/p/w1280//sBwGOfJtSF6hlXaEgvFfBfeLqMk.jpg",
    movie: "/videos/nobody.mp4.mp4",
    description:
      "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a nobody. When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
  },
  {
    id: 6,
    name: "100% Wolf",
    img: "https://image.tmdb.org/t/p/w1280//7TxeZVg2evMG42p0uSbMJpWNQ8A.jpg",
    movie: "/videos/wolf.mp4.mp4",
    description:
      "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
  },
  {
    id: 7,
    name: "The Funeral Home",
    img: "https://image.tmdb.org/t/p/w1280//3GW0A72MxsSgghqpjc2O2MvO8Ec.jpg",
    movie: "/videos/funeral.mp4.mp4",
    description:
      "Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.",
  },
  {
    id: 8,
    name: "Peninsula",
    img: "https://image.tmdb.org/t/p/w1280//d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg",
    movie: "/videos/peninsula.mp4.mp4",
    description:
      "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
  },
  {
    id: 9,
    name: "Chaos Walking",
    img: "https://image.tmdb.org/t/p/w1280//5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg",
    movie: "/videos/choas.mp4.mp4",
    description:
      "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
  },
  {
    id: 10,
    name: "Nomadland",
    img: "https://image.tmdb.org/t/p/w1280//bjjZXrP8PEdFeJkKERc62xlarMI.jpg",
    movie: "/videos/nomadlan.mp4.mp4",
    description:
      "A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.",
  },
];

const movieTopRated = [
  {
    id: 1,
    name: "Nomadland",
    img: "https://image.tmdb.org/t/p/w1280//bjjZXrP8PEdFeJkKERc62xlarMI.jpg",
    movie: "/videos/nomadlan.mp4.mp4",
    description:
      "A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.",
  },
  {
    id: 2,
    name: "Peninsula",
    img: "https://image.tmdb.org/t/p/w1280//d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg",
    movie: "/videos/peninsula.mp4.mp4",
    description:
      "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
  },
  {
    id: 3,
    name: "Judas and the Black Messiah",
    img: "https://image.tmdb.org/t/p/w1280//fatz1aegtBGh7KS0gipcsw9MqUn.jpg",
    movie: "/videos/judas.mp4.mp4",
    description:
      "Bill O'Neal infiltrates the Black Panthers on the orders of FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends—falling for a fellow revolutionary en route—a battle wages for O’Neal’s soul.",
  },
  {
    id: 4,
    name: "Mortal Kombat",
    img: "https://image.tmdb.org/t/p/w1280//3phkepIrEHnTNGE6ajEGdBfRxki.jpg",
    movie: "/videos/mortal.mp4.mp4",
    description:
      "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
  },
  {
    id: 5,
    name: "Nobody",
    img: "https://image.tmdb.org/t/p/w1280//sBwGOfJtSF6hlXaEgvFfBfeLqMk.jpg",
    movie: "/videos/nobody.mp4.mp4",
    description:
      "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a nobody. When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
  },
  {
    id: 6,
    name: "100% Wolf",
    img: "https://image.tmdb.org/t/p/w1280//7TxeZVg2evMG42p0uSbMJpWNQ8A.jpg",
    movie: "/videos/wolf.mp4.mp4",
    description:
      "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
  },
  {
    id: 7,
    name: "The Funeral Home",
    img: "https://image.tmdb.org/t/p/w1280//3GW0A72MxsSgghqpjc2O2MvO8Ec.jpg",
    movie: "/videos/funeral.mp4.mp4",
    description:
      "Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.",
  },
  {
    id: 8,
    name: "21 Bridges",
    img: "https://image.tmdb.org/t/p/w1280//5KmhjlR5CEarB8mKtpjcjHRYIu9.jpg",
    movie: "/videos/bridges.mp4.mp4",
    description:
      "An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.",
  },
  {
    id: 9,
    name: "Chaos Walking",
    img: "https://image.tmdb.org/t/p/w1280//5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg",
    movie: "/videos/choas.mp4.mp4",
    description:
      "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
  },
  {
    id: 10,
    name: "I Care a Lot",
    img: "https://image.tmdb.org/t/p/w1280//vX5JtEcumMQvMCLVcIqfetc7hdg.jpg",
    movie: "/videos/icarelot.mp4.mp4",
    description:
      "A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some unexpected baggage.",
  },
];

const news = [
  {
    id: 1,
    title: "Will Smith, David Leitch’in Yeni Filminde Başrolde!",
    img:
      "http://tr.web.img3.acsta.net/r_640_360/newsv7/21/02/07/13/37/1585252.jpg",
    date: "22.07.17",
    content:
      "Hollywood'un önemli aktörlerinden biri haline gelen, Oscar adaylıkları bulunan Will Smith, son dönemin parlayan sinemacılarından olan ve setin her kademesinde görev almak gibi bir tecrübeye sahip David Leitch, yeni projelerinde bir araya geliyor. Hali hazırda birkaç yeni projesi daha bulunan Leitch, yıllarca emek vererek ulaştığı yönetmenlik kariyerinde çok ara vermek istemiyor gibi gözüküyor. Will Smith, David Leitch'in yöneteceği yeni gerilim filmi “Fast & Loose”un başrolünde oynayacak. Film, Tijuana'da uyanan ve oraya nasıl geldiğini hatırlamayan John Riley (Smith) adında bir adamın hikayesini anlatıyor. İpuçlarını ortaya çıkardıktan sonra, daha önce iki hayat yaşadığını anlar. Birinde, parayla, kızlarla ve güçle “Scarface” yaşam tarzını sürdürdüğü büyük bir suç örgütünün zengin lideriydi. Diğer hayatında ise, ailesi ve başka pek bir şeyi olmayan gizli bir CIA ajanı olarak yaşıyordu. Riley, hangisinin gerçek hayatı olduğunu ve hangisini yaşamaya devam etmek istediğini bulmak durumundadır. Will Smith, David Leitch'in yöneteceği yeni gerilim filmi “Fast & Loose”un başrolünde oynayacak. Film, Tijuana'da uyanan ve oraya nasıl geldiğini hatırlamayan John Riley (Smith) adında bir adamın hikayesini anlatıyor. İpuçlarını ortaya çıkardıktan sonra, daha önce iki hayat yaşadığını anlar. Birinde, parayla, kızlarla ve güçle “Scarface” yaşam tarzını sürdürdüğü büyük bir suç örgütünün zengin lideriydi. Diğer hayatında ise, ailesi ve başka pek bir şeyi olmayan gizli bir CIA ajanı olarak yaşıyordu. Riley, hangisinin gerçek hayatı olduğunu ve hangisini yaşamaya devam etmek istediğini bulmak durumundadır. ",
  },

  {
    id: 2,
    title: "Tom Holland, Gelecek Spider-Man Filmi Hakkında Konuştu",
    img:
      "http://tr.web.img4.acsta.net/r_640_360/newsv7/21/02/05/10/31/0959477.jpg",
    date: "22.07.17",
    content:
      "Jon Watts'ın yönetmen koltuğuna oturduğu Spider-Man 3 filmi ile ilgili Tom Holland'dan yeni bir açıklama geldi. Variety'ye konuşan Holland, şimdilerde filmin çekimlerinde bulunuyor. Holland'ın açıklamaları, Spider-Man 3 hakkındaki beklentilerin artmasına neden olacak gibi görünüyor. (Spoiler içerir.) Holland, Variety'ye şu sözleri sarf etti: Şunu söyleyebilirim ki film, bugüne kadar yapılmış solo süper kahraman filmleri arasında en tutkulu olanı. Oturup senaryoyu okursanız, ne yapmaya çalıştıklarını görürsünüz. Başarılı oluyorlar. Bu gerçekten etkileyici. Daha önce hiç buna benzer bir solo süper kahraman filmi görmemiştim. Biliyorsunuz ki ben o Spider-Man'e dönüşen küçük şanslı pisliğim. Film için önümüzde çok fazla çekim var. Noelden önce başlamıştık ve 7 hafta boyunca çekim yaptık. Noel için ara verdik ve sonra yeniden başladık. Bırakın bir parçası olmayı, filmi izlemek için bile geri kalan herkes kadar heyecanlıyım. Dedikodulara göre üç Spider-Man evreni Spider-Man 3'te birleştirilecek. Yani Tobey Maguire, Andrew Garfield, Tom Holland, Kirsten Dunst, Emma Stone ve Zendaya aynı evrende buluşacak. Ayrıca Sam Raimi imzalı Spider-Man filmlerinin Octopus'u Alfred Molina, Amazing Spider-Man'in Electro'su Jamie Foxx ve Marvel'ın Netflix dizilerinde izlediğimiz Daredevil'ın kahramanı Charlie Cox, Spider-Man 3'te yer alacak. Alfred Molina haberi dışında geri kalan isimler hakkında resmi açıklama henüz gelmedi.",
  },

  {
    id: 3,
    title: "Yeni Resident Evil Filminin Gösterim Tarihi Açıklandı",
    img:
      "http://tr.web.img4.acsta.net/r_640_360/newsv7/21/02/05/10/03/3808519.jpg",
    date: "22.07.17",
    content:
      "Resident Evil oyunlarının yeniden uyarlanacağı geçtiğimiz yıl duyurulmuştu. Şimdi ise  Kaya Scodelario ve Hannah John-Kamen başrollü filmin vizyon tarihi açıklandı. Söylenenlere göre film 3 Eylül 2021 tarihinde gösterimini yapacak. Resident Evil filmi için oyunlarda yer alan orijin hikaye kullanılacak. Umbrella Corporation'ın yaydığı bir virüs nedeniyle ansızın mahvolan dünyayı anlatan Resident Evil oyunları, yeniden uyarlanıyor. Filmin 3 Eylül 2021'de vizyona gireceği resmi olarak açıklandı. Robert Kulzer'ın yapımcılığını üstleneceği Resident Evil filminde Hannah John-Kamen, oyunların meşhur başkarakteri Jill Valentine'a hayat verecek. Kaya Scodelairo, Claire Redfield'ı; Robbie Amell ise Chris Redfield'ı canlandıracak. Tom Hopper, Albert Weskel ile; Neal McDonough, William Birkin ile ve Avan Jogia, Leon karakteri ile Resident Evil'daki yerini alacak. Donal Logue'u ise Brian Irons olarak izleyeceğiz. Karakter, 1998 yılına kadar Raccoon Polis Merkezi'nin komiseri olarak biliniyor. Resident Evil'ın yeniden hayata geçirileceği, 2018 yılında açıklanmıştı. Ancak James Wan'in projeden ayrılması, olayları zora sokmuştu. Şimdi ise yeniden harekete geçiliyor. Sony Pictures ve Constantin Films, Resident Evil için iş birliğine gidiyor. Oyunlar daha önce Milla Jovovich'in başrolünde beyaz perdeyle buluşmuştu. Filmlerin yönetmenliğini Paul W.S. Anderson üstleniyordu. Aksiyon ve korkuyu birleştiren serinin çok beğenildiği söylenemez. Ancak yine de eğlenceli bir seyirlik imkanı sunuyordu.",
  },

  {
    id: 4,
    title: "Marvel, 'Blade' Filmi İçin Senaristini Buldu",
    img:
      "http://tr.web.img2.acsta.net/r_640_360/newsv7/21/02/07/20/16/2767954.jpg",
    date: "22.07.17",
    content:
      "Green Book ve Moonlight performanslarıyla kısa sürede iki kez Oscar kazanan Mahershala Ali, korku kahramanı olarak yeni Blade filminin başrolünde yer alıyor. Ali'nin kadroya katılımı ve Marvel'ın 2000'li yılların başlarından itibaren devam eden seriye yeni bir versiyon tasarladığı gerçeği, Marvel'ın 2019'daki San Diego Comic-Con duyuruları arasında ortaya çıktı. Marvel, son altı ay, Ali'nin doğrudan dahil olduğu titiz bir çalışmayla birçok yazar görüşmesi gerçekleştirdi ve sonunda bu isim netlik kazandı. Marvel'ın çeşitliliğe odaklanmasının ve temsili, anahtar bir faktör haline getirmesinin bir yansıması olarak yalnızca siyahi yazarlar ciddi bir şekilde değerlendirildi. David Goyer, 1998-2004 yılları arasında vizyona giren ve Wesley Snipes'ın oynadığı üç orijinal Blade filmini yazmıştı ve şimdi siyahi bir kadın yazar işin başına geçti. Bu isim olan Stacy Osei-Kuffour'un işe alınması, bir Marvel filmi yazan ilk siyahi kadın yazar olduğu için oldukça önemli bir adım. Bu arada, Captain Marvel 2'de çalışan Nia DaCosta, Marvel'ın ilk siyahi kadın yönetmeniydi. Marv Wolfman ve Gene Colan tarafından destekleyici bir karakter olarak yaratılan Blade, ilk olarak 1973'te Tomb of Dracula #10'da göründü ve bir kült favori haline geldi. Annesinin doğum sırasında bir kan emici tarafından ısırılıp öldürülmesi sayesinde bir insan-vampir melezi. Marvel, bir sonraki adımda Osei-Kuffour ile çalışacak bir yönetmeni işe alacak. Osei-Kuffour, Pen15'te çalışan ve komedi dizilerinde olağanüstü yazarlık dalında Emmy adaylığı kazanan ve kariyer hızla yükselen bir senarist. Daha geniş kitlelerce farkına varılmasını sağlayan iş ise HBO’nun Alan Moore - Dave Gibbons çizgi romanından uyarlanan Watchmen’deki yazı ekibinin bir parçası olması ve en iyi dizi dalında WGA Ödülü kazanmasıydı. Kuffour, 1970'lerin Amerika'sında Al Pacino ve Logan Lerman'ı Nazi Avcıları olarak gösteren Amazon’un kana bulanmış mini dizisi Hunters’ta da hikaye editörü olarak görev yaptı. Osei-Kuffour, Domnhall Gleeson'ın rol aldığı HBO suç gerilim filmi Run'da da çalıştı. Osei-Kuffour çalışan bir yazar olmak için mücadele ederken, New York'ta yıllarca oyunlar ve şiirler yazdı.",
  },
];

const duration = [
  {
    "id": 1,
    "user": "",
    "film": "",
    "sure": ""
  },
  {
    "id": 2,
    "user": "test",
    "film": "I Care a Lot",
    "sure": "28"
  },
  {
    "id": 3,
    "user": "test",
    "film": "I Care a Lot",
    "sure": "28"
  },
  {
    "id": 4,
    "user": "test",
    "film": "I Care a Lot",
    "sure": "28"
  },
  {
    "id": 5,
    "user": "test",
    "film": "I Care a Lot",
    "sure": "28"
  },
  {
    "id": 6,
    "user": "test",
    "film": "Judas and the Black Messiah",
    "sure": "48"
  },
  {
    "id": 7,
    "user": "test",
    "film": "Judas and the Black Messiah",
    "sure": "48"
  },
  {
    "id": 8,
    "user": "test",
    "film": "Peninsula",
    "sure": "16"
  },
  {
    "id": 9,
    "user": "test",
    "film": "Peninsula",
    "sure": "16"
  },
  {
    "id": 10,
    "user": "test",
    "film": "Peninsula",
    "sure": "16"
  },
  {
    "id": 11,
    "user": "test",
    "film": "Peninsula",
    "sure": "16"
  },
  {
    "id": 12,
    "user": "test",
    "film": "Nomadland",
    "sure": "98"
  },
  {
    "id": 13,
    "user": "test",
    "film": "Nomadland",
    "sure": "98"
  },
  {
    "id": 14,
    "user": "test",
    "film": "Nomadland",
    "sure": "98"
  },
  {
    "id": 15,
    "user": "test",
    "film": "Nomadland",
    "sure": "98"
  },
  {
    "id": 16,
    "user": "test",
    "film": "Nomadland",
    "sure": "98"
  },
  {
    "id": 17,
    "user": "test",
    "film": "Nomadland",
    "sure": "98"
  },
  {
    "id": 18,
    "user": "test",
    "film": "21 Bridges",
    "sure": "40"
  },
  {
    "id": 19,
    "user": "test",
    "film": "21 Bridges",
    "sure": "40"
  }
];

//Get Metodları

app.get("/", (req, res) => {
  res.json("Streaming Api'ye Hoşgeldiniz");
});
app.get("/api", (req, res) => {
  res.json(Welcome);
});
app.get(`/trending/all/api=${api_key}`, (req, res) => {
  res.json(movieTrend);
});

app.get(`/discover/api=${api_key}`, (req, res) => {
  res.json(movieDiscover);
});
app.get("/duration", (req, res) => {
  res.json(duration);
});
app.get(`/movie/top_rated/api=${api_key}`, (req, res) => {
  res.json(movieTopRated);
});

//Id Get Metodu (İçeriğe erişmek için)

app.get(`/trending/all/api=${api_key}/:id`, (req, res) => {
  const movieTrendId = movieTrend.find((movieTrendId) => movieTrendId.id === parseInt(req.params.id));
  res.json(movieTrendId);
});

app.get("/duration/:id", (req, res) => {
  const durationID = duration.find((durationID) => durationID.id === parseInt(req.params.id));
  res.json(durationID);
});

app.get(`/discover/api=${api_key}/:id`, (req, res) => {
  const movieDiscoverId = movieDiscover.find((movieDiscoverId) => movieDiscoverId.id === parseInt(req.params.id));
  res.json(movieDiscoverId);
});

app.get(`/movie/top_rated/api=${api_key}/:id`, (req, res) => {
  const movieTopRatedId = movieTopRated.find((movieTopRatedId) => movieTopRatedId.id === parseInt(req.params.id));
  res.json(movieTopRatedId);
});


//delete

app.delete(`/duration/:id*?`, (req, res) => {
  var id = req.params.id;

  //DELETE YOUR RECORD WITH YOUR PARAM.

  return res.status(200);
});


//Post Metodları

  app.post(`/trending/all/api=${api_key}`, (req, res) => {
        const trend = {
            id: movieTrend.length +1,
            name: req.body.name,
            img: req.body.img,
            movie: req.body.movie,
            description: req.body.description
        };
        movieTrend.push(trend);
        res.send(trend);
  });
  
  app.post(`/discover/api=${api_key}`, (req, res) => {
    const discover = {
        id: movieDiscover.length +1,
        name: req.body.name,
        img: req.body.img,
        movie: req.body.movie,
        description: req.body.description
    };
    movieDiscover.push(discover);
    res.send(discover);
  });
  
  app.post(`/movie/top_rated/api=${api_key}`, (req, res) => {
    const topRated = {
        id: movieTopRated.length +1,
        name: req.body.name,
        img: req.body.img,
        movie: req.body.movie,
        description: req.body.description
    };
    movieTopRated.push(topRated);
    res.send(topRated);
    
  });


  app.put(`/duration`, (req, res) => {
    const sureler = {
        id: duration.length +1,
        user: req.body.user,
        film: req.body.film,
        sure: req.body.sure
    };
    duration.push(sureler);
    res.send(sureler);
    
  });
  


// app.listen(4000)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
